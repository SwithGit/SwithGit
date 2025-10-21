import React, { useState, useEffect } from "react";
import * as S from "./FourthComponent.style";
import mainLogo from "../../../../assets/img/mainBG1.png";
import arContentImage from "../../../../assets/img/Frame 110.png";
import vrContentImage from "../../../../assets/img/큰방 프랍들 1.png";
import { useTranslation } from "react-i18next";
import { useDeviceSize } from "../../../../hooks/useDeviceSize";
import left_btn from "../../../../assets/vector/left_btn.png";
import right_btn from "../../../../assets/vector/right_btn.png";

const FourthComponent: React.FC = () => {
  const [activeContent, setActiveContent] = useState("공간형");
  const [imageSource, setImageSource] = useState(mainLogo);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const { t, i18n } = useTranslation();
  const { isMobile } = useDeviceSize();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleContentClick = (content: string) => {
    setActiveContent(content);
    setIsFirstLoad(false); // 첫 로드 이후에 클릭한 경우
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      switch (activeContent) {
        case "AR":
          setImageSource(arContentImage);
          break;
        case "VR":
          setImageSource(vrContentImage);
          break;
        default:
          setImageSource(mainLogo);
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [activeContent]);

  const getDelay = () => {
    return isFirstLoad && activeContent === "공간형" ? "2.5s" : "0.1s";
  };

  //for mobile
  const slides = [
    {
      title: "공간형 콘텐츠",
      image: mainLogo,
      contents: [
        <>
          <div>
            교육용 게임 및 메타버스 제작. 또는 비즈니스를 위한 회의공간, B2C /
            B2B 브랜드를 위한 온라인 팝업
          </div>

          <div>스토어 공간 제작 가능. </div>
          <div>별도 문의를 통해 디자인, 기능을 추가하여 독자적인 </div>
          <div>콘텐츠 제작 가능.</div>
        </>,
      ],
      tags: ["메타버스", "게임", "교육", "스토어"],
    },
    {
      title: "AR 콘텐츠",
      image: arContentImage,
      contents: [
        <>
          <div>증강현실 (Augmented reality) 기능을 이용한</div>
          <div> 마케팅 영상 제작 가능. 자체 제작 모델링 또는 별도</div>
          <div>문의를 통해 다양한 애니메이션 및 모델링이 들어간</div>
          <div>고화질 마케팅 영상을 타사 대비 저렴하게 제작 가능.</div>
        </>,
      ],
      tags: ["마케팅", "증강현실", "타사 대비 저렴"],
    },
    {
      title: "VR 콘텐츠",
      image: vrContentImage,
      contents: [
        <>
          <div>뚝딱의 고유 기술을 바탕으로 고퀄리티의 VR콘텐츠</div>
          <div>제작 가능. 현실감 높은 그래픽과 최적화.</div>
          <div>VR멀미가 개선되어있는 타사 대비 월등한 최적화와</div>
          <div>높은 퀄리티의 VR콘텐츠를 저렴하게 제작 가능.</div>
        </>,
      ],
      tags: ["교육 실습", "체험 학습", "VR멀미 개선"],
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <S.Container>
      {!isMobile ? (
        <S.TextContainer>
          <S.Title>{t("FourthComponentTitle")}</S.Title>
          <S.Text>{t("FourthComponentDescription")}</S.Text>
          <S.Content>
            <S.LeftAligned>
              <S.Logo src={imageSource} />
            </S.LeftAligned>
            <S.ContentList>
              <S.ContentWrapper
                onClick={() => handleContentClick("공간형")}
                active={activeContent === "공간형"}
              >
                <S.ContentName
                  active={activeContent === "공간형"}
                  delay={getDelay()}
                  underlineLeft={i18n.language === "en" ? "-1px" : "-1px"} // 영어일 때 다르게 적용
                  underlineWidth={i18n.language === "en" ? "180px" : "134px"} // 영어일 때 다르게 적용
                  isEnglish={i18n.language === "en"} // 언어에 따른 스타일 적용
                >
                  {t("FourthComponentSpaceContent")}
                </S.ContentName>
                <S.Substance
                  active={activeContent === "공간형"}
                  isEnglish={i18n.language === "en"}
                >
                  <div>{t("FourthComponentSpaceContentLine1")}</div>
                  <div>{t("FourthComponentSpaceContentLine2")}</div>
                  <div>{t("FourthComponentSpaceContentLine3")}</div>
                  {i18n.language === "en" && (
                    <div>{t("FourthComponentSpaceContentLine3_1")}</div> // 영어일 때 추가 텍스트
                  )}
                </S.Substance>
              </S.ContentWrapper>
              <S.ContentWrapperAR
                onClick={() => handleContentClick("AR")}
                active={activeContent === "AR"}
              >
                <S.ContentName
                  active={activeContent === "AR"}
                  delay="0.1s"
                  underlineLeft={i18n.language === "en" ? "-1px" : "-1px"} // 영어일 때 다르게 적용
                  underlineWidth={i18n.language === "en" ? "135px" : "101px"} // 영어일 때 다르게 적용
                  isEnglish={i18n.language === "en"} // 언어에 따른 스타일 적용
                >
                  <div>{t("FourthComponentARContent")}</div>
                </S.ContentName>
                <S.Substance
                  active={activeContent === "AR"}
                  isEnglish={i18n.language === "en"}
                >
                  <div>{t("FourthComponentARContentLine1")}</div>
                  <div>{t("FourthComponentARContentLine2")}</div>
                  <div>{t("FourthComponentARContentLine3")}</div>
                </S.Substance>
              </S.ContentWrapperAR>
              <S.ContentWrapperVR
                onClick={() => handleContentClick("VR")}
                active={activeContent === "VR"}
              >
                <S.ContentName
                  active={activeContent === "VR"}
                  delay="0.1s"
                  underlineLeft={i18n.language === "en" ? "-1px" : "-1px"} // 영어일 때 다르게 적용
                  underlineWidth={i18n.language === "en" ? "135px" : "101px"}
                >
                  <div>{t("FourthComponentVRContent")}</div>
                </S.ContentName>
                <S.Substance
                  active={activeContent === "VR"}
                  isEnglish={i18n.language === "en"}
                >
                  <div>{t("FourthComponentVRContentLine1")}</div>
                  <div>{t("FourthComponentVRContentLine2")}</div>
                  <div>{t("FourthComponentVRContentLine3")}</div>
                </S.Substance>
              </S.ContentWrapperVR>
            </S.ContentList>
          </S.Content>
        </S.TextContainer>
      ) : (
        <>
          <S.MobileFourthTitle>뚝딱 콘텐츠</S.MobileFourthTitle>
          <S.MobileFourthSubTitle>
            뚝딱에서 제작이 가능한 다양한 콘텐츠를 확인해보세요.
          </S.MobileFourthSubTitle>
          <S.MobileFourthImg
            src={slides[currentIndex].image}
            alt="Main Image"
          />
          <S.SlideContainer>
            <S.ArrowLeft onClick={handlePrev}>
              <S.ArrowBtn src={left_btn} alt="Previous" />
            </S.ArrowLeft>
            {slides.map((slide, index) => (
              <S.MobileThirdContainer
                key={index}
                style={{
                  display: index === currentIndex ? "block" : "none",
                  transition: "all 0.5s ease-in-out",
                }}
              >
                {" "}
                <S.MobileContainerTitle>{slide.title}</S.MobileContainerTitle>
                <S.MobileMiniContainer>
                  {slide.tags.map((tag, tagIndex) => (
                    <S.MobileMiniContent key={tagIndex}>
                      {tag}
                    </S.MobileMiniContent>
                  ))}
                </S.MobileMiniContainer>
                {slide.contents.map((content, contentIndex) => (
                  <S.MobileContainerText key={contentIndex}>
                    {content}
                  </S.MobileContainerText>
                ))}
              </S.MobileThirdContainer>
            ))}
            {/* 오른쪽 화살표 버튼 */}
            <S.ArrowRight onClick={handleNext}>
              <S.ArrowBtn src={right_btn} alt="Next" />
            </S.ArrowRight>{" "}
            {/* 인디케이터 */}
            <S.Indicators>
              {slides.map((_, index) => (
                <S.Indicator
                  key={index}
                  active={index === currentIndex}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </S.Indicators>
          </S.SlideContainer>
        </>
      )}
    </S.Container>
  );
};

export default FourthComponent;
