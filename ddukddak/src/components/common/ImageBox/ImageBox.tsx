import React from "react";
import * as S from "./ImageBox.style";

interface ImageBoxProps {
  src: string;
  className?: string;
  alt?: string;
}

const ImageBox: React.FC<ImageBoxProps> = ({ src, className, alt }) => {
  // console.log("이미지", S.GalleryImg);
  return (
    <>
      <S.GalleryImg src={src} className={className} alt={alt} />
    </>
  );
};

export default ImageBox;
