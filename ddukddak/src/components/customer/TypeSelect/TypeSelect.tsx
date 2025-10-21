import React, { useState, memo } from "react";
import * as S from "./TypeSelect.style";
import { useTranslation } from "react-i18next"; // useTranslation 훅 import

const TypeSelect = ({
  onChange,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { t } = useTranslation(); // useTranslation 훅 사용
  const MENUS = [
    t("DetailedQuotationInquiry"),
    t("QuickClientError"),
    t("PaymentRelated"),
    t("AccountRelated"),
  ]; // 다국어 지원 적용
  const [selected, setSelected] = useState<string>(t("csType")); // 다국어 지원 적용
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (menu: string) => {
    setSelected(menu);
    setIsOpen(false);
    if (menu === t("csType")) {
      onChange({
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>);
    } else {
      onChange({
        target: { value: menu },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const isPlaceholder = selected === t("csType"); // 다국어 지원 적용

  return (
    <S.DropdownWrapper>
      <S.SelectedOption
        // isOpen={isOpen}
        isPlaceholder={isPlaceholder}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
        <S.Arrow isOpen={isOpen} />
      </S.SelectedOption>
      {isOpen && (
        <S.Options>
          {MENUS.map((menu, index) => (
            <S.Option
              key={index}
              onClick={() => handleSelect(menu)}
              isSelected={selected === menu}
            >
              {menu}
            </S.Option>
          ))}
        </S.Options>
      )}
    </S.DropdownWrapper>
  );
};

export default memo(TypeSelect);
