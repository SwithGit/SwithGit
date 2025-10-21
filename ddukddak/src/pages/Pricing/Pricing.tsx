import React from "react";
import * as S from "./Pricing.style";
import Header from "../../components/common/Header/Header";
import PricingForm from "../../components/pricing/PricingForm/PricingForm";
import { useTranslation } from "react-i18next";

const Pricing: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <Header title={t("pricingTitle")} text={t("pricingSubtitle")} />
      <PricingForm />
    </S.Container>
  );
};

export default Pricing;
