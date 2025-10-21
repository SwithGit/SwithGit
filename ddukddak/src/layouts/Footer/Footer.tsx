import React, { useEffect, useState } from "react";
import * as S from "./Footer.style";
import ddukddakLogo from "../../assets/img/Frame 8644.png";
import swithfactoryLogo from "../../assets/img/swithfactory_Logo.png";
import instagramLogo from "../../assets/img/instagram_Logo.png";
import youtubeLogo from "../../assets/img/youtube_Logo.png";
import { useTranslation } from "react-i18next";

// Text 컴포넌트
const Text = ({
  color,
  size,
  weight,
  children,
}: {
  color: string;
  size: number;
  weight?: number | string;
  children: React.ReactNode;
}) => (
  <span style={{ color, fontSize: size, fontWeight: weight }}>{children}</span>
);

// Info 컴포넌트
const Info = ({ label, value }: { label: string; value: string }) => (
  <S.InfoContainer>
    <Text color="#CECECE" size={14}>
      {label}
    </Text>
    <Text color="#000" size={14}>
      {value}
    </Text>
  </S.InfoContainer>
);

// Divider 컴포넌트
const Divider = () => (
  <Text color="#CECECE" size={14}>
    |
  </Text>
);

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const isEnglish = i18n.language === "en"; // 영어 감지

  // 모바일 환경 감지
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 모바일 감지
    };

    handleResize(); // 컴포넌트 로드 시 초기 설정
    window.addEventListener("resize", handleResize); // 창 크기 변경 감지

    return () => {
      window.removeEventListener("resize", handleResize); // 이벤트 해제
    };
  }, []);

  const navigateTo = (url: string) => {
    window.location.href = url;
  };

  return (
    <S.Wrapper>
      <S.ContentContainer>
        <S.LogoContainerDetail>
          <S.LogoContainer>
            <div>
              <img
                src={ddukddakLogo}
                alt="ddukddak Logo"
                width={56.25}
                height={30.92}
              />
              <img
                src={swithfactoryLogo}
                alt="swithfactory"
                width={33.32}
                height={32}
                onClick={() => navigateTo("https://www.swithfactory.com/")}
              />
            </div>
          </S.LogoContainer>
          <S.LogoSecindContainer>
            <img
              src={instagramLogo}
              alt="instagram"
              width={32}
              height={32}
              onClick={() => {
                alert(t("comingSoon"));
              }}
              style={{ marginRight: "20px" }}
            />
            <img
              src={youtubeLogo}
              alt="youtube"
              width={32}
              height={32}
              onClick={() => {
                alert(t("comingSoon"));
              }}
            />
          </S.LogoSecindContainer>
        </S.LogoContainerDetail>

        {/* 모바일과 데스크탑에서 서로 다른 UI 렌더링 */}
        {isMobile ? (
          <>
            {/* 모바일 전용 UI */}
            <S.Row>
              <Info
                label={t("representative")}
                value={t("representativeName")}
              />
            </S.Row>
            <S.Row>
              <Info label={t("address")} value={t("MaddressValue")} />
            </S.Row>
            <S.Row>
              <Info
                label={t("businessRegistrationNumber")}
                value="559-87-01759"
              />
            </S.Row>
            <S.Row>
              <Info label={t("contactPhone")} value="1522-1876" />
            </S.Row>
            <S.Row>
              <Info label={t("contactEmail")} value="Shake923@gmail.com" />
            </S.Row>
            <S.Row>
              <Text color="#484848" size={12} weight="200">
                {t("copyright")}
              </Text>
            </S.Row>

            {/* 약관 및 개인정보 처리방침 */}
            <S.Row>
              <S.StyledLink href="/policy/term">
                <Text color="#AAA" size={14} weight="200">
                  {t("termsOfService")}
                </Text>
              </S.StyledLink>
              <Text color="#AAA" size={14} weight="200">
                |
              </Text>
              <S.StyledLink href="/policy/privacy">
                <Text color="#AAA" size={14} weight="200">
                  {t("privacyPolicy")}
                </Text>
              </S.StyledLink>
            </S.Row>
          </>
        ) : (
          <>
            {/* 데스크탑 전용 UI */}
            <S.Row className="first">
              <Info
                label={t("representative")}
                value={t("representativeName")}
              />
              <Divider />
              <Info label={t("address")} value={t("addressValue")} />
              <div className="last-child">
                <Divider />
                <Info
                  label={t("businessRegistrationNumber")}
                  value="559-87-01759"
                />
              </div>
            </S.Row>
            <S.Row className="second">
              <div className="first-child">
                <Info
                  label={t("businessRegistrationNumber")}
                  value="559-87-01759"
                />
                <Divider />
              </div>
              <Info label={t("contactPhone")} value="1522-1876" />
              <div className="last-child">
                <Divider />
                <Info label={t("contactEmail")} value="Shake923@gmail.com" />
              </div>
            </S.Row>
            <S.Row>
              <Text color="#484848" size={12} weight="200">
                {t("copyright")}
              </Text>
            </S.Row>

            {/* 약관 및 개인정보 처리방침 */}
            <S.Row>
              <S.StyledLink href="/policy/term">
                <Text color="#AAA" size={14} weight="200">
                  {t("termsOfService")}
                </Text>
              </S.StyledLink>
              <Text color="#AAA" size={14} weight="200">
                |
              </Text>
              <S.StyledLink href="/policy/privacy">
                <Text color="#AAA" size={14} weight="200">
                  {t("privacyPolicy")}
                </Text>
              </S.StyledLink>
            </S.Row>
          </>
        )}
      </S.ContentContainer>
    </S.Wrapper>
  );
};

export default Footer;
