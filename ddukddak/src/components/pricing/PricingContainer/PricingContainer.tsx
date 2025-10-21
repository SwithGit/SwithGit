import React from "react";
import * as S from "./PricingContainer.style";
import mainLogo from "../../../assets/vector/mainLogo.png";
import ARContentDetails from "./ARContentDetails";
import VRContentDetails from "./VRContentDetails";
import SpatialContentDetails from "./SpatialContentDetails";
import NoContentSelected from "./NoContentSelected";
import InfoIcon from "./InfoIcon";
import { useTranslation } from "react-i18next";

interface PricingContainerProps {
  customPricing: boolean;
  isARContent?: boolean;
  isVRContent?: boolean;
}

const PricingContainer: React.FC<PricingContainerProps> = ({
  customPricing,
  isARContent = false,
  isVRContent = false,
}) => {
  const { t } = useTranslation();
  const isDisabled = !customPricing;

  return (
    <>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.LogoWrapper>
          <S.Logo src={mainLogo} />
          <S.Title>{t("paymentAmount")}</S.Title>
          <InfoIcon width={30} height={29} color="#454545" />
        </S.LogoWrapper>

        {customPricing ? (
          isARContent ? (
            <ARContentDetails />
          ) : isVRContent ? (
            <VRContentDetails />
          ) : (
            <SpatialContentDetails />
          )
        ) : (
          <NoContentSelected />
        )}

        <S.RegisterBtn disabled={isDisabled} isDisabled={isDisabled}>
          {t("goToChargePoints")}
        </S.RegisterBtn>
      </S.ModalContent>
    </>
  );
};

export default PricingContainer;
