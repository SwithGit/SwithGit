import React, { useState, memo, useEffect } from "react";
import * as S from "./EmailSelect.style";
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n/i18n";

const EmailSelect = ({
  onChange,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { t } = useTranslation();

  const MENUS = [
    t("manualInput"), // "직접 입력"
    "naver.com",
    "hanmail.com",
    "daum.net",
    "gmail.com",
  ];

  const [selected, setSelected] = useState<string>(t("manualInput"));
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // 언어가 변경될 때마다 선택값 업데이트
  useEffect(() => {
    setSelected(t("manualInput"));
  }, [t]);

  const handleSelect = (menu: string) => {
    setSelected(menu);
    setIsOpen(false);
    if (menu === t("manualInput")) {
      onChange({
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>);
    } else {
      onChange({
        target: { value: menu },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <S.DropdownWrapper>
      <S.SelectedOption onClick={() => setIsOpen(!isOpen)}>
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

export default memo(EmailSelect);
