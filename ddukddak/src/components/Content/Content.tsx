// Content.tsx
import React, { useState, useEffect, useRef } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const Content = ({ code }: { code: string }) => {
  const [isUnityMounted, setIsUnityMounted] = useState(true);
  const { unityProvider, sendMessage, loadingProgression, isLoaded, unload } =
    useUnityContext({
      loaderUrl: "/PCUnityBuild/WebBuild.loader.js",
      dataUrl: "/PCUnityBuild/WebBuild.data",
      frameworkUrl: "/PCUnityBuild/WebBuild.framework.js",
      codeUrl: "/PCUnityBuild/WebBuild.wasm",
    });

  // 재시도 타이머 해제용
  const retryTimerRef = useRef<number | null>(null);

  // 언마운트 시 WebGL 언로드 + 타이머 정리
  useEffect(() => {
    return () => {
      if (isUnityMounted && isLoaded) unload();
      if (retryTimerRef.current) {
        window.clearTimeout(retryTimerRef.current);
        retryTimerRef.current = null;
      }
    };
  }, [isUnityMounted, isLoaded, unload]);

  // 최소 수정: 타이밍 보장용 안전 전송 함수
  const safeSendMessage = React.useCallback(
    (
      objectName: string,
      methodName: string,
      param: string | number,
      opts?: { retries?: number; delayMs?: number; firstDelayMs?: number }
    ) => {
      const retries = opts?.retries ?? 60;
      const delayMs = opts?.delayMs ?? 50;
      const firstDelayMs = opts?.firstDelayMs ?? 150;
      let left = retries;

      const attempt = () => {
        try {
          sendMessage(objectName, methodName, param.toString());
          if (retryTimerRef.current) {
            window.clearTimeout(retryTimerRef.current);
            retryTimerRef.current = null;
          }
        } catch (err) {
          if (left > 0) {
            left -= 1;
            retryTimerRef.current = window.setTimeout(attempt, delayMs);
          } else {
            console.error(
              `[safeSendMessage] Failed after ${retries} tries:`,
              err
            );
          }
        }
      };
      retryTimerRef.current = window.setTimeout(attempt, firstDelayMs);
    },
    [sendMessage]
  );

  // isLoaded 이후에만, 안전 전송으로 호출
  useEffect(() => {
    if (!isLoaded) return;

    if (isMobileDevice()) {
      safeSendMessage("FeedManager", "GetPlatform", "Mobile", {
        firstDelayMs: 500,
        delayMs: 50,
        retries: 60,
      });
    }

    // FeedManager가 실제로 올라오기까지 아주 짧게 여유를 주고 재시작
    safeSendMessage("FeedManager", "GetGallery", code, {
      firstDelayMs: 200, // 초기 소폭 지연
      delayMs: 50,
      retries: 80, // 최대 ~4초까지 기다려줌
    });
  }, [isLoaded, code, safeSendMessage]);

  // 모바일 판별 함수
  const isMobileDevice = () => {
    if (typeof navigator === "undefined") return false;
    return /Mobi|Android|iPhone|iPad|iPod|Samsung|Phone/i.test(
      navigator.userAgent
    );
  };

  return (
    <div style={{ textAlign: "center", padding: "0px" }}>
      {isUnityMounted && (
        <>
          {!isLoaded && (
            <div style={{ marginTop: "150px" }}>잠시만 기다려주세요!</div>
          )}
          <Unity
            unityProvider={unityProvider}
            style={{ width: "100vw", height: "100vh" }}
          />
          {loadingProgression < 1 && (
            <div style={{ marginTop: "10px" }}>
              로딩 중: {Math.round(loadingProgression * 100)}%
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Content;
