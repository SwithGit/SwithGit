import React from "react";
import * as S from "./CustomerService.style";
import Header from "../../components/common/Header/Header";
import CSForm from "../../components/customer/CSForm/CSForm";
import { useTranslation } from "react-i18next";

const CustomerService: React.FC = () => {
  const { t } = useTranslation();
  return (
    <S.Container>
      <Header
        title={t("customerServiceTitle")}
        text={t("customerServiceText")}
      />
      <CSForm />
    </S.Container>
  );
};

export default CustomerService;
