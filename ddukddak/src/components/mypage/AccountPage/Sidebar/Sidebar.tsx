import React from "react";
import * as S from "./Sidebar.style";
import { useLocation, Link } from "react-router-dom";
import mainLogo from "../../../../assets/vector/mainLogo.png";
import { useTranslation } from "react-i18next";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const sidebarItems = [
    { label: t("mypage"), path: "/mypage" },
    { label: t("passwordChange"), path: "/mypage/password" },
    { label: t("points"), path: "/mypage/points" },
    { label: t("coupons"), path: "/mypage/coupons" },
    { label: t("withdraw"), path: "/mypage/withdraw" },
  ];

  return (
    <S.Sidebar>
      <S.LogoWrapper>
        <S.Logo src={mainLogo} />
        <S.Title>{t("mypage")}</S.Title>
      </S.LogoWrapper>
      {sidebarItems.map((item, index) => (
        <Link to={item.path} key={index} style={{ textDecoration: "none" }}>
          <S.SidebarItem isActive={location.pathname === item.path}>
            {item.label}
          </S.SidebarItem>
        </Link>
      ))}
    </S.Sidebar>
  );
};

export default Sidebar;
