import React, { useState, createContext, useContext } from "react";
import * as S from "./Navbar.style";
import { useNavigate } from "react-router-dom";
import earth from "../../assets/vector/Vector.png";
import darkEarth from "../../assets/vector/darkEarth.png";
import mainLogo from "../../assets/vector/navLogo.png";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { logout } from "../../redux/authSlice";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";
import { useDeviceSize } from "../../hooks/useDeviceSize";
import { HiOutlineMenu, HiX, HiChevronRight } from "react-icons/hi";

const LogoutContext = createContext(() => {});
export const useLogout = () => useContext(LogoutContext);

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { isMobile } = useDeviceSize();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkEarth, setIsDarkEarth] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsDarkEarth(!isDropdownOpen);
  };

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setIsDropdownOpen(false);
  };

  const handleMenuClick = (menu: string, path: string) => {
    setActiveMenu(menu);
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <LogoutContext.Provider value={handleLogout}>
      <S.NavContainer>
        <S.NavTitle
          onClick={() => handleMenuClick("home", "/")}
          style={{
            fontWeight: activeMenu === "" ? "normal" : "normal",
          }}
        >
          <S.Logo src={mainLogo} />
        </S.NavTitle>
        {isMobile ? (
          <>
            {/* 모바일 메뉴: 햄버거 아이콘 */}
            <S.HamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <HiOutlineMenu size={28} />
            </S.HamburgerMenu>
            {/* 모바일 메뉴 열림 상태 */}
            {isMenuOpen && (
              <S.MobileNavMenu isOpen={isMenuOpen}>
                <S.CloseMenuButton>
                  <HiX onClick={() => setIsMenuOpen(!isMenuOpen)} />
                </S.CloseMenuButton>

                {/* 언어 선택 및 로그인/로그아웃 */}
                <S.LanguageLoginContainer>
                  <S.NavMenuItem onClick={toggleDropdown}>
                    <S.EarthImg
                      src={earth}
                      alt="Language Flag"
                      onClick={() => {
                        const newLanguage =
                          i18n.language === "ko" ? "en" : "ko";
                        changeLanguage(newLanguage);
                      }}
                    />
                    <S.LanguageText>{isMobile && t("Language")}</S.LanguageText>
                  </S.NavMenuItem>
                  <S.LanguageLoginText>
                    {isLoggedIn ? (
                      <S.NavMenuLogin
                        isEnglish={i18n.language === "en"} // 영어일 때 true로 설정
                        onClick={handleLogout}
                      >
                        {t("logout")}
                      </S.NavMenuLogin>
                    ) : (
                      <S.NavMenuLogin
                        onClick={() => handleMenuClick("login", "/signin")}
                      >
                        {t("login")}
                      </S.NavMenuLogin>
                    )}
                  </S.LanguageLoginText>
                </S.LanguageLoginContainer>
                <S.StyledloginHr />
                {isLoggedIn ? <></> : <></>}
                <S.NavMenuItem onClick={() => handleMenuClick("product", "/")}>
                  {t("pricing")}
                  <HiChevronRight size={18} style={{ color: "#eaeaea" }} />
                </S.NavMenuItem>
                <S.StyledHr />
                <S.NavMenuItem
                  onClick={() => handleMenuClick("download", "/download")}
                >
                  {t("download")}{" "}
                  <HiChevronRight size={18} style={{ color: "#eaeaea" }} />
                </S.NavMenuItem>
                <S.StyledHr />
                <S.NavMenuItem
                  onClick={() => handleMenuClick("support", "/cs")}
                >
                  {t("support")}
                  <HiChevronRight size={18} style={{ color: "#eaeaea" }} />
                </S.NavMenuItem>
                <S.StyledHr />
                {/* 하단 메뉴: 이용약관, 개인정보처리방침 */}
                <S.MobileNavMenuFooter>
                  <S.FooterNavMenuItem
                    onClick={() => handleMenuClick("terms", "/terms")}
                  >
                    {t("termsOfService")}{" "}
                    <HiChevronRight size={18} style={{ color: "#eaeaea" }} />
                  </S.FooterNavMenuItem>
                  <S.FooterNavMenuItem
                    onClick={() => handleMenuClick("privacy", "/privacy")}
                  >
                    {t("privacyPolicy")}{" "}
                    <HiChevronRight size={18} style={{ color: "#eaeaea" }} />
                  </S.FooterNavMenuItem>
                </S.MobileNavMenuFooter>
              </S.MobileNavMenu>
            )}
          </>
        ) : (
          <S.NavMenu>
            <S.NavMenuItem
              onClick={() => handleMenuClick("home", "/")}
              style={{
                fontWeight: activeMenu === "product" ? "bold" : "normal",
              }}
            >
              {t("product")}
            </S.NavMenuItem>
            <span>|</span>
            {/* <S.NavMenuItem
              onClick={() => handleMenuClick("pricing", "/pricing")}
              style={{
                fontWeight: activeMenu === "pricing" ? "bold" : "normal",
              }}
            >
              {t("pricing")}
            </S.NavMenuItem> */}
            {/* <span>|</span> */}
            <S.NavMenuItem
              onClick={() => handleMenuClick("download", "/download")}
              style={{
                fontWeight: activeMenu === "download" ? "bold" : "normal",
              }}
            >
              {t("download")}
            </S.NavMenuItem>
            <span>|</span>
            <S.NavMenuItem
              onClick={() => handleMenuClick("support", "/cs")}
              style={{
                fontWeight: activeMenu === "support" ? "bold" : "normal",
                marginRight: isLoggedIn ? "70px" : "-10px",
              }}
            >
              {t("support")}
            </S.NavMenuItem>
            <S.NavEarthContainer>
              <S.DropdownContainer onClick={toggleDropdown}>
                <S.EarthImg
                  src={isDarkEarth ? darkEarth : earth}
                  alt="Language Flag"
                  isDarkEarth={isDarkEarth}
                />
                <S.DropdownMenu isOpen={isDropdownOpen}>
                  <S.DropdownItem onClick={() => changeLanguage("ko")}>
                    한국어
                  </S.DropdownItem>
                  <S.DropdownItem onClick={() => changeLanguage("en")}>
                    English
                  </S.DropdownItem>
                </S.DropdownMenu>
              </S.DropdownContainer>
              {isLoggedIn ? (
                <>
                  <S.NavMenuItem
                    onClick={() => handleMenuClick("mypage", "/mypage")}
                    style={{
                      fontWeight: activeMenu === "mypage" ? "bold" : "normal",
                    }}
                  >
                    {t("mypage")}
                  </S.NavMenuItem>
                  <S.NavMenuItem
                    onClick={handleLogout}
                    style={{
                      fontWeight: activeMenu === "logout" ? "bold" : "normal",
                      marginLeft: "18px",
                    }}
                  >
                    {t("logout")}
                  </S.NavMenuItem>
                </>
              ) : (
                <S.NavMenuItem
                  onClick={() => handleMenuClick("login", "/signin")}
                  style={{
                    fontWeight: activeMenu === "login" ? "bold" : "normal",
                  }}
                >
                  {t("login")}
                </S.NavMenuItem>
              )}
            </S.NavEarthContainer>
          </S.NavMenu>
        )}
      </S.NavContainer>
    </LogoutContext.Provider>
  );
};

export default Navbar;
