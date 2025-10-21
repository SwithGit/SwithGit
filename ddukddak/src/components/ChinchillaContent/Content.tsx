import React, { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const Content: React.FC = () => {
  const [isUnityMounted, setIsUnityMounted] = useState(true);
  const { unityProvider, loadingProgression, isLoaded, unload } =
    useUnityContext({
      loaderUrl: "/Chinchilla/WebBuild/WebBuild.loader.js",
      dataUrl: "/Chinchilla/WebBuild/WebBuild.data",
      frameworkUrl: "/Chinchilla/WebBuild/WebBuild.framework.js",
      codeUrl: "/Chinchilla/WebBuild/WebBuild.wasm",
    });

  // Unity 언마운트 처리
  useEffect(() => {
    return () => {
      if (isUnityMounted && isLoaded) {
        unload()
          .then(() => console.log("Unity instance successfully unloaded"))
          .catch((error) =>
            console.error("Failed to unload Unity instance:", error)
          );
      }
    };
  }, [isUnityMounted, isLoaded, unload]);

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
