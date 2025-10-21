import React from "react";
import ImageBox from "../common/ImageBox/ImageBox";
import GalleryButton from "../common/GalleryButton/GalleryButton";
import * as styles from "./GalleryTemplate.style";

export interface GalleryTemplateProps {
  galleryInfo: any;
  showGallery: () => void;
}

const GalleryTemplate = ({
  galleryInfo,
  showGallery,
}: GalleryTemplateProps) => {
  return (
    <>
      {galleryInfo ? (
        <styles.Template>
          <ImageBox
            //수정 긴급 필요
            // src={`https://ddukddakpie.s3.ap-northeast-2.amazonaws.com/${galleryInfo.nickname}/${galleryInfo.gallerynickname}/Thumbnails/ThumbnailImage0.png`}
            src="https://www.makespacepie.com/_next/image?url=https%3A%2F%2Funityvia.s3.ap-northeast-2.amazonaws.com%2F%EB%B0%98%EC%86%A1%EC%B4%88%EB%93%B1%ED%95%99%EA%B5%90_%EB%8C%80%EA%B5%AC%EB%B0%98%EC%86%A1%EC%B4%88%EB%93%B1%ED%95%99%EA%B5%90%2FThumbnails%2FThumbnailImage0.png&w=1920&q=75"
            className="item-image"
            alt="Gallery Thumbnail"
          />
          <GalleryButton
            label="관람"
            onClick={showGallery}
            className="show-btn"
          />
        </styles.Template>
      ) : (
        <>GalleryTemplate 정보 없음</>
      )}
    </>
  );
};

export default GalleryTemplate;
