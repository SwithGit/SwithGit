import React, { useState, memo } from "react";
import * as S from "./ContentSelect.style";

const MENUS = ["콘텐츠 전체", "공간형 콘텐츠", "AR 콘텐츠", "VR 콘텐츠"];

const TypeSelect = ({
  onChange,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [selected, setSelected] = useState<string>("콘텐츠 종류");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (menu: string) => {
    setSelected(menu);
    setIsOpen(false);
    if (menu === "콘텐츠 종류") {
      onChange({
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>);
    } else {
      onChange({
        target: { value: menu },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const isPlaceholder = selected === "콘텐츠 종류";

  return (
    <S.DropdownWrapper>
      <S.SelectedOption
        isOpen={isOpen}
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
