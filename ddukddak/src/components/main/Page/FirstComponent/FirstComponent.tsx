import React from "react";
import * as S from "./FirstComponent.style";
import mainLogo from "../../../../assets/vector/mainLogo.png";
import Slider from "../../../Slider/Slider";
import img1 from "../../../../assets/img/Client Main2.png";
import img2 from "../../../../assets/img/Client Main2 (1).png";
import img3 from "../../../../assets/img/Client Main2 (2).png";
import img4 from "../../../../assets/img/image 14 3.png";
import img5 from "../../../../assets/img/마이룸 - 마이룸 프리셋 7.png";
import expand from "../../../../assets/vector/expand_right.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDeviceSize } from "../../../../hooks/useDeviceSize";
import i18n from "../../../../i18n/i18n";

const images = [
  { id: 1, img: img1, name: "Image 1" },
  { id: 2, img: img2, name: "Image 2" },
  { id: 3, img: img3, name: "Image 3" },
  { id: 4, img: img4, name: "Image 4" },
  { id: 5, img: img5, name: "Image 5" },
];
const images2 = [
  { id: 1, img: img4, name: "Image 5" },
  { id: 2, img: img5, name: "Image 4" },
  { id: 3, img: img3, name: "Image 3" },
  { id: 4, img: img1, name: "Image 2" },
  { id: 5, img: img2, name: "Image 1" },
];

const FirstComponent: React.FC = () => {
  let navigate = useNavigate();
  const { t } = useTranslation();
  const { isMobile } = useDeviceSize();
  const isEnglish = i18n.language === "en";

  return (
    <S.Container>
      {!isMobile ? (
        // PC 버전
        <>
          <S.TextContainer>
            <S.Title>{t("title")}</S.Title>
            <S.Text>{t("subtitle")}</S.Text>
            <S.Content>
              <S.LeftAligned>
                <S.Logo src={mainLogo} />
              </S.LeftAligned>
              <S.CenterAligned>
                <S.Button
                  onClick={() => {
                    navigate("/download");
                  }}
                >
                  {t("quoteButton")} →
                </S.Button>
              </S.CenterAligned>
            </S.Content>
          </S.TextContainer>
          <Slider images={images} />
        </>
      ) : (
        // 모바일 버전
        <>
          <S.MobileTextContainer isEnglish={isEnglish}>
            <S.MobileTitle isEnglish={isEnglish}>
              {t("Mobiletitle")}
            </S.MobileTitle>
            <S.MobileText isEnglish={isEnglish}>
              {" "}
              {t("Mobilesubtitle")}
            </S.MobileText>
            <S.MobileContent>
              <S.MobileLogo src={mainLogo} />
            </S.MobileContent>
          </S.MobileTextContainer>
          <Slider images={images} />
          <Slider images={images2} />
          <S.MobileButton
            onClick={() => {
              navigate("/pricing");
            }}
          >
            {t("quoteButton")} →
          </S.MobileButton>
          <S.expandImg src={expand} />
        </>
      )}
    </S.Container>
  );
};

export default FirstComponent;
