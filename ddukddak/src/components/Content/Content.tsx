// Content.tsx
import React, { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const Content = ({ code }: { code: string }) => {
  const [isUnityMounted, setIsUnityMounted] = useState(true); // 초기 값을 true로 설정
  const [isReady, setIsReady] = useState(false);

  const { unityProvider, sendMessage, loadingProgression, isLoaded, unload } =
    useUnityContext({
      loaderUrl: "/PCUnityBuild/WebBuild.loader.js",
      dataUrl: "/PCUnityBuild/WebBuild.data",
      frameworkUrl: "/PCUnityBuild/WebBuild.framework.js",
      codeUrl: "/PCUnityBuild/WebBuild.wasm",
    });

  // Unity WebGL 언마운트 핸들링
  useEffect(() => {
    return () => {
      if (isUnityMounted && isLoaded) unload();
    };
  }, [isUnityMounted, isLoaded, unload]);

  // Unity 메시지 전송
  useEffect(() => {
    if (isLoaded && !isReady) {
      try {
        sendMessage("FeedManager", "GetGallery", code);
        setIsReady(true);
      } catch (error) {
        console.error("Error sending message to Unity:", error);
      }
    }
  }, [isLoaded, sendMessage, code, isReady]);

  return (
    <div style={{ textAlign: "center", padding: "00px" }}>
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
