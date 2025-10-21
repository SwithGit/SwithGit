import React from "react";
import * as S from "./PricingContainer.style";
import InfoIcon from "./InfoIcon";
import { useTranslation } from "react-i18next";

const NoContentSelected: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <S.CouponCodeWrapper>
        <S.Discount>
          {t("discount")} <InfoIcon width={24} height={24} color="#454545" />{" "}
        </S.Discount>
        <S.DiscountPoint>-0 Point</S.DiscountPoint>
      </S.CouponCodeWrapper>
      <div style={{ marginBottom: "180px" }}></div>
      <S.TotalPricingWrapper>
        <S.TotalPricing>{t("totalAmount")}</S.TotalPricing>{" "}
        <S.TotalPricing>0 Point</S.TotalPricing>
      </S.TotalPricingWrapper>
    </>
  );
};

export default NoContentSelected;
