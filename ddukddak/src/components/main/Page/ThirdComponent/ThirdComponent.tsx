import React, { useEffect, useRef, useState } from "react";
import * as S from "./ThirdComponent.style";
import third_img from "../../../../assets/img/third_img.png";
import line from "../../../../assets/img/Ellipse 23.png";
import circle from "../../../../assets/img/동그라미.png";
import { useTranslation } from "react-i18next";
import { useDeviceSize } from "../../../../hooks/useDeviceSize";
import mobile_third_main from "../../../../assets/vector/mobile_third_main.png";
import expand_right from "../../../../assets/vector/expand_right.png";
import left_btn from "../../../../assets/vector/left_btn.png";
import right_btn from "../../../../assets/vector/right_btn.png";

const ThirdComponent: React.FC = () => {
  const { t, i18n } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useDeviceSize();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      title: "다양한 3D 콘텐츠 제작 플랫폼",
      contents: [
        <>
          PC, Mobile, VR등 <span>디바이스 관계 없이</span> 제작 가능
        </>,
        <>
          <span>자체적인 모델링 및 미디어 콘텐츠</span> 추가 가능
        </>,
        <>
          별도 문의를 통한 <span>독자적인 디자인 및 기능</span> 추가 가능
        </>,
      ],
      tags: ["메타버스", "게임", "교육", "AR / VR"],
    },
    {
      title: "누구나 손쉽게 제작 가능",
      contents: [
        <>
          회원가입 및 클라이언트 다운로드 후 <span>즉시 제작 가능</span>
        </>,
        <>
          <span>별도의 견적문의 없이</span> 즉시 결제 및 콘텐츠 사용 가능
        </>,
        <>
          단순 <span>링크공유(Web GL)</span>만으로 콘텐츠 이용 가능
        </>,
      ],
      tags: ["견적문의 불필요", "제작 후 즉시 결제"],
    },
    {
      title: "저렴한 서비스 이용료",
      contents: [
        <>
          필요한 콘텐츠, 기능, 기간, 예상 이용자 수 <span>만큼만 결제</span>
        </>,
        <>
          링크 공유 방식을 통한 <span>쉽고 빠른 마케팅 연계</span>
        </>,
        <>
          AR 등 <span>기술력을 요구하는 콘텐츠</span>도 쉽고 빠르게 제작
        </>,
      ],
      tags: ["이용한 만큼만 결제", "마케팅 비용 절감"],
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

  useEffect(() => {
    const ref = containerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (ref) {
            ref.classList.add("animate");
          }
        }
      },
      {
        threshold: 0.5, // 컴포넌트가 50% 이상 보일 때 애니메이션 실행
      }
    );

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, []);

  return (
    <S.Container ref={containerRef}>
      {!isMobile ? (
        <S.ContentWrapper>
          <S.Logo src={third_img} />
          <S.Line src={line} delay="0s" />
          <S.Circle src={circle} delay="0s" top="13%" left="47.8%" />
          <S.Circle src={circle} delay="1.2s" top="42%" left="51%" />
          <S.Circle src={circle} delay="2.3s" top="70.8%" left="49.4%" />
          <S.TextWrapper>
            <S.TextContainer delay="0.4s">
              <S.Title
                delay="3.3s"
                underlineLeft={i18n.language === "en" ? "0px" : "380px"}
                underlineWidth={i18n.language === "en" ? "280px" : "60px"}
                isEnglish={i18n.language === "en"}
              >
                {t("ThirdComponentTitle")}
              </S.Title>
            </S.TextContainer>
            <S.TextContainer delay="0.8s">
              <S.Text isEnglish={i18n.language === "en"}>
                <div>{t("ThirdComponent1_1Title")}</div>{" "}
                {i18n.language === "en" && (
                  <div>{t("ThirdComponent1_2Title")}</div>
                )}
                <div>{t("ThirdComponent2_1Title")}</div>
                {i18n.language === "en" && (
                  <div>{t("ThirdComponent2_2Title")}</div>
                )}
                <div>{t("ThirdComponent3_1Title")}</div>
                {i18n.language === "en" && (
                  <div>{t("ThirdComponent3_2Title")}</div>
                )}
              </S.Text>
            </S.TextContainer>
            <S.TextContainer delay="1.6s" isEnglish={i18n.language === "en"}>
              <S.Title
                delay="4.1s"
                underlineLeft={i18n.language === "en" ? "55px" : "34px"}
                underlineWidth={i18n.language === "en" ? "275px" : "182px"}
                isEnglish={i18n.language === "en"}
              >
                {t("ThirdComponentTitle2")}
              </S.Title>
            </S.TextContainer>

            <S.TextContainer delay="2s">
              <S.Text isEnglish={i18n.language === "en"}>
                <div>{t("ThirdComponent4_1Title")}</div>
                <div>{t("ThirdComponent5_1Title")}</div>
                {i18n.language === "en" && (
                  <div>{t("ThirdComponent5_2Title")}</div>
                )}
                <div>{t("ThirdComponent6_1Title")}</div>
              </S.Text>
            </S.TextContainer>
            <S.TextContainer delay="2.7s">
              <S.Title
                delay="4.8s"
                underlineLeft={i18n.language === "en" ? "32px" : "215px"}
                underlineWidth={i18n.language === "en" ? "170px" : "148px"}
                isEnglish={i18n.language === "en"}
              >
                {t("ThirdComponentTitle3")}
              </S.Title>
            </S.TextContainer>
            <S.TextContainer delay="3.1s">
              <S.Text isEnglish={i18n.language === "en"}>
                <div>{t("ThirdComponent7_1Title")}</div>
                <div>{t("ThirdComponent8_1Title")}</div>
                <div>{t("ThirdComponent9_1Title")}</div>
                {i18n.language === "en" && (
                  <div>{t("ThirdComponent9_2Title")}</div>
                )}
              </S.Text>
            </S.TextContainer>
          </S.TextWrapper>
        </S.ContentWrapper>
      ) : (
        <>
          <S.MobileThirdImg src={mobile_third_main} />
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
            <div style={{ display: "flex", justifyContent: "center" }}>
              <S.MobileExpandImg src={expand_right} />
            </div>
          </S.SlideContainer>
        </>
      )}
    </S.Container>
  );
};

export default ThirdComponent;
