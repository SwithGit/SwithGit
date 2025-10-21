import React from "react";
import * as S from "./PricingContainer.style";
import InfoIcon from "./InfoIcon";
import { useTranslation } from "react-i18next";

const ARContentDetails: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* AR 콘텐츠 선택 시 */}
      <S.CouponCodeWrapper>
        <S.Discount>{t("encodingLengthPrice")}</S.Discount>{" "}
        <S.Point>150,000 Point</S.Point>
      </S.CouponCodeWrapper>
      <S.CouponCodeWrapper>
        <S.Discount>{t("encodingQualityPrice")}</S.Discount>{" "}
        <S.Point>200,000 Point</S.Point>
      </S.CouponCodeWrapper>
      <S.CouponCodeWrapper>
        <S.Discount>{t("modelingAndAnimationPrice")}</S.Discount>{" "}
        <S.Point>0 Point</S.Point>
      </S.CouponCodeWrapper>
      <S.CouponCodeWrapper>
        <S.Discount>
          {t("discount")} <InfoIcon width={24} height={24} color="#454545" />{" "}
        </S.Discount>
        <S.DiscountPoint>-0 Point</S.DiscountPoint>
      </S.CouponCodeWrapper>
      <S.TotalPricingWrapper>
        <S.TotalPricing>{t("totalPrice")}</S.TotalPricing>{" "}
        <S.TotalPricing>350,000 Point</S.TotalPricing>
      </S.TotalPricingWrapper>
    </>
  );
};

export default ARContentDetails;
