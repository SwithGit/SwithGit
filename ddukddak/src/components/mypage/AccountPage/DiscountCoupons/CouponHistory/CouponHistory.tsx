import React, { useState } from "react";
import * as S from "./CouponHistory.style";
import Pagination from "../../../../common/Pagination/Pagination";
import CouponTableHeader from "./CouponTableHeader";

interface CouponHistoryProps {
  data: Array<{
    id: number;
    title: string;
    issued_at: string;
    expiration_date: string;
    status: string;
  }>;
  columns: Array<{
    header: string;
    accessor: keyof {
      id: number;
      title: string;
      issued_at: string;
      expiration_date: string;
      status: string;
    };
  }>;
  rowsPerPage?: number;
}

const CouponHistory: React.FC<CouponHistoryProps> = ({
  data,
  columns,
  rowsPerPage = 5,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  // 현재 페이지에 표시할 데이터 계산
  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <S.Table>
        {/* 분리한 CouponTableHeader 컴포넌트 사용 */}
        <CouponTableHeader columns={columns} />
        <tbody>
          {currentItems.map((item) => (
            <S.Tr key={item.id}>
              {columns.map((column, index) =>
                column.accessor === "status" ? (
                  <S.Td key={index} status={item.status}>
                    {item[column.accessor]}
                  </S.Td>
                ) : (
                  <S.Td key={index}>{item[column.accessor]}</S.Td>
                )
              )}
            </S.Tr>
          ))}
        </tbody>
      </S.Table>
      {data.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default CouponHistory;
