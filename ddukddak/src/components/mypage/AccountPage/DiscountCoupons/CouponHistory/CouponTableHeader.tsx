import React from "react";
import * as S from "./CouponHistory.style";

interface CouponTableHeaderProps {
  columns: Array<{
    header: string;
  }>;
}

const CouponTableHeader: React.FC<CouponTableHeaderProps> = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column, index) => (
          <S.Th key={index}>{column.header}</S.Th>
        ))}
      </tr>
    </thead>
  );
};

export default CouponTableHeader;
