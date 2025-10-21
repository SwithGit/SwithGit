import React from "react";
import * as S from "./Download.style";
import mainLogo from "../../assets/vector/mainLogo.png";
import downloadImg from "../../assets/img/downloadImg.png";
import appleLogo from "../../assets/vector/appleLogo.png";
import windowLogo from "../../assets/vector/windowLogo.png";
import { useTranslation } from "react-i18next";

const Download: React.FC = () => {
  const { t } = useTranslation();

  const handleWindowsDownload = () => {
    window.location.href =
      "https://www.dropbox.com/scl/fi/wksuqbmn1hokxd10ip9m7/DdookddakSetup.exe?rlkey=wyylfqung49j95xigrftjr5ib&st=p49sjas0&dl=1";
  };

  return (
    <S.Container>
      <S.TextContainer>
        <S.Title>{t("platformTitle")}</S.Title>
        <S.Text>{t("platformSubtitle")}</S.Text>
        <S.Content>
          <S.LeftAligned>
            <S.Logo src={mainLogo} />
          </S.LeftAligned>
        </S.Content>
        <S.ContentWrapper>
          <S.DownloadContent>
            <S.DownloadText>
              {t("editorGuestMode")} <span>{t("downloadPCClient")}</span>
            </S.DownloadText>
            <S.ButtonWrapper>
              <S.DownloadBtn onClick={handleWindowsDownload}>
                <S.DownloadBtnLogo src={windowLogo} /> {t("windowsDownload")}
              </S.DownloadBtn>

              <S.DownloadBtn
                onClick={() => {
                  alert(t("comingSoon"));
                }}
              >
                <S.DownloadBtnLogo src={appleLogo} /> {t("macOSDownload")}
              </S.DownloadBtn>
            </S.ButtonWrapper>
            <S.Specification>{t("recommendedSpecsWindows")}</S.Specification>
            <div>
              <S.SpecificationDetail>
                {t("os")} : <span>Windows 10 {t("orLater")}</span> · {t("cpu")}{" "}
                : <span>Dual Core {t("orHigher")}</span> · {t("ram")} :{" "}
                <span>2G {t("orMore")}</span>
              </S.SpecificationDetail>
              <S.SpecificationDetail>
                VGA : <span>{t("directXGraphicsCard")}</span> · HDD :{" "}
                <span>{t("freeSpace4G")}</span>
              </S.SpecificationDetail>
              <S.SpecificationDetail>
                Direct X : <span>Direct X 9.0c {t("orHigher")}</span> ·{" "}
                {t("sound")} : <span>{t("directXCompatibleSoundCard")}</span>
              </S.SpecificationDetail>
            </div>
            <S.Specification>{t("recommendedSpecsMac")}</S.Specification>
            <div>
              <S.SpecificationDetail>
                {t("os")} : <span>macOS 10.13.6 {t("orLater")}</span> ·{" "}
                {t("cpu")} : <span>Intel Core i5-750 {t("orHigher")}</span>
              </S.SpecificationDetail>
              <S.SpecificationDetail>
                {t("ram")} : <span>2GB {t("orMore")}</span> · VGA :{" "}
                <span>{t("amdIntelGraphics")}</span>
              </S.SpecificationDetail>
              <S.SpecificationDetail>
                HDD : <span>{t("freeSpace4G")}</span>
              </S.SpecificationDetail>
            </div>
          </S.DownloadContent>
          <S.DownloadLogo src={downloadImg} />
        </S.ContentWrapper>
      </S.TextContainer>
    </S.Container>
  );
};

export default Download;
