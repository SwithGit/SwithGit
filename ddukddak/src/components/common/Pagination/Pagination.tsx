import React from "react";
import * as S from "./Pagination.style";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  return (
    <S.Pagination>
      <S.PaginationButton
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
      >
        &laquo;&laquo;
      </S.PaginationButton>
      <S.PaginationButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &laquo;
      </S.PaginationButton>
      {[...Array(totalPages)].map((_, index) => (
        <S.PaginationButton
          key={index}
          onClick={() => handlePageChange(index + 1)}
          active={index + 1 === currentPage}
        >
          {index + 1}
        </S.PaginationButton>
      ))}
      <S.PaginationButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &raquo;
      </S.PaginationButton>
      <S.PaginationButton
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        &raquo;&raquo;
      </S.PaginationButton>
    </S.Pagination>
  );
};

export default Pagination;
