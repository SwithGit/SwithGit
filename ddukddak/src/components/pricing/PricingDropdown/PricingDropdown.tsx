import React, { useState, memo } from "react";
import * as S from "./PricingDropdown.style";

interface PricingDropdownProps {
  menus: string[];
  title: string;
  placeholder: string;
  selected: string; // 부모로부터 전달된 선택된 값
  onChange: (value: string) => void;
}

const PricingDropdown: React.FC<PricingDropdownProps> = ({
  menus,
  title,
  placeholder,
  selected,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (menu: string) => {
    onChange(menu);
    setIsOpen(false);
  };

  const displayText = selected || placeholder; // 선택된 값이 없으면 placeholder 표시

  return (
    <S.DropdownWrapper>
      <S.DropDownTitle>{title}</S.DropDownTitle>
      <S.SelectedOption
        isOpen={isOpen}
        isPlaceholder={!selected}
        onClick={() => setIsOpen(!isOpen)}
      >
        {displayText}
        <S.Arrow isOpen={isOpen} />
      </S.SelectedOption>
      {isOpen && (
        <S.Options>
          {menus.map((menu, index) => (
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

export default memo(PricingDropdown);
