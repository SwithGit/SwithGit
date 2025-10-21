import React from "react";
import * as S from "./PricingContainer.style";
import InfoIcon from "./InfoIcon";
import { useTranslation } from "react-i18next";

const VRContentDetails: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <S.CouponCodeWrapper>
        <S.Discount>{t("contentPrice")}</S.Discount>
        <S.Point>250,000 Point</S.Point>
      </S.CouponCodeWrapper>
      <S.CouponCodeWrapper>
        <S.Discount>{t("modelingAndAnimationPrice")}</S.Discount>
        <S.Point>0 Point</S.Point>
      </S.CouponCodeWrapper>
      <S.CouponCodeWrapper>
        <S.Discount>
          {t("discount")} <InfoIcon width={24} height={24} color="#454545" />
        </S.Discount>
        <S.DiscountPoint>-0 Point</S.DiscountPoint>
      </S.CouponCodeWrapper>
      <div style={{ marginBottom: "60px" }}></div>
      <S.TotalPricingWrapper>
        <S.TotalPricing>{t("totalPrice")}</S.TotalPricing>
        <S.TotalPricing>250,000 Point</S.TotalPricing>
      </S.TotalPricingWrapper>
    </>
  );
};

export default VRContentDetails;
