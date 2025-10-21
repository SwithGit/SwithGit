import React from "react";
import * as S from "./PricingContainer.style";
import InfoIcon from "./InfoIcon";
import { useTranslation } from "react-i18next";

const SpatialContentDetails: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <S.CouponCodeWrapper>
        <S.Discount>{t("contentScaleAmount")}</S.Discount>{" "}
        <S.Point>150 Point</S.Point>
      </S.CouponCodeWrapper>
      <S.CouponCodeWrapper>
        <S.Discount>{t("maxDailyAccessFee")}</S.Discount>{" "}
        <S.Point>500 Point</S.Point>
      </S.CouponCodeWrapper>
      <S.CouponCodeWrapper>
        <S.Discount>{t("contentScheduleAmount")}</S.Discount>{" "}
        <S.Point>4450 Point</S.Point>
      </S.CouponCodeWrapper>
      <S.CouponCodeWrapper>
        <S.Discount>
          {t("discount")} <InfoIcon width={24} height={24} color="#454545" />{" "}
        </S.Discount>
        <S.DiscountPoint>-0 Point</S.DiscountPoint>
      </S.CouponCodeWrapper>
      <S.TotalPricingWrapper>
        <S.TotalPricing>{t("totalAmount")}</S.TotalPricing>{" "}
        <S.TotalPricing>5100 Point</S.TotalPricing>
      </S.TotalPricingWrapper>
    </>
  );
};

export default SpatialContentDetails;
