import React, { useRef, useEffect, useState } from "react";
import * as S from "./SecondComponent.style";
import mainImg1Ko from "../../../../assets/img/Group 8661.png";
import mainImg1En from "../../../../assets/img/mainImg1En.png";
import mainImg2Ko from "../../../../assets/img/Group 8662.png";
import mainImg2En from "../../../../assets/img/mainImg2En.png";
import arrowImg from "../../../../assets/img/arrow.png";
import SecondMobileImg from "../../../../assets/img/SecondMobileImg.png";
import ThinkingFace from "../../../../assets/img/ThinkingFace.png";
import ThinkingMsg1 from "../../../../assets/img/ThinkingMsg1.png";
import ThinkingMsg2 from "../../../../assets/img/ThinkingMse2.png";
import ThinkingMsg3 from "../../../../assets/img/ThinkingMse3.png";
import SecondMobileImg2 from "../../../../assets/img/SecondMobileImg2.png";
import HeartEyes from "../../../../assets/img/HeartEyes.png"; // Add HeartEyes image
import Heart from "../../../../assets/img/heart.png";
import HeartMsg from "../../../../assets/img/HeartMsg.png";
import HeartMsg1 from "../../../../assets/img/HeartMsg1.png";
import HeartMsg2 from "../../../../assets/img/HeartMsg2.png";
import expand from "../../../../assets/vector/expand_right.png";
import { useDeviceSize } from "../../../../hooks/useDeviceSize";
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n/i18n";

const SecondComponent: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { isMobile } = useDeviceSize();
  const mainImg1 = i18n.language === "ko" ? mainImg1Ko : mainImg1En;
  const mainImg2 = i18n.language === "ko" ? mainImg2Ko : mainImg2En;
  const isEnglish = i18n.language === "en";

  const [isVisible, setIsVisible] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false); // Add blurred state
  const [showHeartEyes, setShowHeartEyes] = useState(false); // Add state for HeartEyes
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setIsBlurred(true);
            setShowHeartEyes(true); // Show HeartEyes after SecondMobileImg2 appears
          }, 3500); // Blur after 3.5 seconds (when SecondMobileImg2 appears)
        }
      },
      { threshold: 0.5 } // 50% 정도가 화면에 보일 때 트리거
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <S.Container ref={containerRef}>
      {!isMobile ? (
        <>
          <S.TextContainer>
            <S.TextWrapper>
              <S.Title>{t("SecondMainComponentTitle")}</S.Title>
              <S.Text>
                <div>{t("SecondMainComponent2Title")}</div>{" "}
                <div>{t("SecondMainComponent3Title")}</div>
              </S.Text>
            </S.TextWrapper>
            <S.Content>
              <S.Logo src={mainImg1} />
              <S.ArrowLogo src={arrowImg} />
              <S.Logo src={mainImg2} />
            </S.Content>
          </S.TextContainer>
        </>
      ) : (
        <>
          <S.MobileTextContainer>
            <S.MobileTitle>{t("MobileSecondTitle")}</S.MobileTitle>
            <S.MobileText isEnglish={isEnglish}>
              {t("MobileSecondText1")}
            </S.MobileText>
            <S.MobileText isEnglish={isEnglish}>
              {t("MobileSecondText2")}
            </S.MobileText>

            {/* Apply blur when SecondMobileImg2 appears */}
            <S.SecondMobileImg src={SecondMobileImg} isBlurred={isBlurred} />
            <S.ThinkingFace src={ThinkingFace} isBlurred={isBlurred} />
            <S.ThinkingMsg1
              src={ThinkingMsg1}
              isVisible={isVisible}
              isBlurred={isBlurred}
            />
            <S.ThinkingMsg2
              src={ThinkingMsg2}
              isVisible={isVisible}
              isBlurred={isBlurred}
            />
            <S.ThinkingMsg3
              src={ThinkingMsg3}
              isVisible={isVisible}
              isBlurred={isBlurred}
            />

            {/* Second image appears with fade-in */}
            {isBlurred && <S.SecondMobileImg2 src={SecondMobileImg2} />}

            {/* HeartEyes image appears after SecondMobileImg2 */}
            {showHeartEyes && <S.HeartEyes src={HeartEyes} />}
            {showHeartEyes && <S.Heart src={Heart} />}
            {showHeartEyes && <S.HeartMsg src={HeartMsg} />}
            {showHeartEyes && <S.HeartMsg1 src={HeartMsg1} />}
            {showHeartEyes && <S.HeartMsg2 src={HeartMsg2} />}
          </S.MobileTextContainer>
          <S.expandImg src={expand} />
        </>
      )}
    </S.Container>
  );
};

export default SecondComponent;
