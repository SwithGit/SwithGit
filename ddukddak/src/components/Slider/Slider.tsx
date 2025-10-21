import React from "react";
import * as S from "./Slider.style";
import { useDeviceSize } from "../../hooks/useDeviceSize";

interface ImageData {
  id: number;
  img: string;
  name: string;
}

interface SliderProps {
  images: ImageData[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const { isMobile } = useDeviceSize();

  // 슬라이드 아이템을 두 번 반복하여 배열 생성
  const extendedImages = [...images, ...images];

  return (
    <>
      {!isMobile ? (
        <S.SliderContainer>
          <S.SlideWrapper>
            {images.map((image, index) => (
              <S.Slide key={index}>
                <S.Image src={image.img} alt={image.name} />
              </S.Slide>
            ))}
            {images.map((image, index) => (
              <S.Slide key={index + images.length}>
                <S.Image src={image.img} alt={image.name} />
              </S.Slide>
            ))}
          </S.SlideWrapper>
        </S.SliderContainer>
      ) : (
        <S.MobileSliderContainer>
          <S.MobileSlideWrapper>
            {extendedImages.map((image, index) => (
              <S.MobileSlide key={index}>
                <S.MobileImage src={image.img} alt={image.name} />
              </S.MobileSlide>
            ))}
          </S.MobileSlideWrapper>
        </S.MobileSliderContainer>
      )}
    </>
  );
};

export default Slider;
