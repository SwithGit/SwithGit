// src/components/GalleryPage.tsx
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { fetchGallerys } from "../../api/api";
import * as S from "./allgallery.style";

interface Gallery {
  nickname: string;
  Code: string;
  gallerynickname: string;
  date_time: string;
  Like: number;
}

const Allgallery: React.FC = () => {
  const [gallerys, setGallerys] = useState<Gallery[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const { page = "1", order = "Like" } = useParams<{
    page?: string;
    order?: string;
  }>();
  const navigate = useNavigate();

  useEffect(() => {
    // API 호출하여 데이터 가져오기
    const loadGallerys = async () => {
      setLoading(true);
      setError(null);
      try {
        const galleryData = await fetchGallerys(parseInt(page, 10), order);
        console.log("Fetched galleries data:", galleryData); // 받아온 데이터를 콘솔에 출력하여 확인
        setGallerys(galleryData.data);
        setTotalPages(galleryData.totalPages);
        setCurrentPage(galleryData.currentPage);
        console.log("Gallery state after setting:", galleryData); // 상태 설정 후 상태를 확인
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다.", error);
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      }
      setLoading(false);
    };

    loadGallerys();
  }, [page, order]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      navigate(`/allgallery/${page}/${order}`);
    }
  };

  return (
    <S.GalleryPage>
      <h1>모든 전시회</h1>
      {isLoading ? (
        <p>로딩 중...</p>
      ) : (
        <>
          <S.GalleryList>
            {gallerys && gallerys.length > 0 ? (
              gallerys.map((gallery) => (
                <Link to={`/gallery/${gallery.Code}`} key={gallery.Code}>
                  <S.GalleryCard>
                    <S.GalleryImage
                      src={`https://ddukddakpie.s3.ap-northeast-2.amazonaws.com/${gallery.nickname}/${gallery.gallerynickname}/Thumbnails/ThumbnailImage0.png`}
                      alt={gallery.gallerynickname}
                    />
                    <h2>{gallery.gallerynickname.split("_")[1]}</h2>
                    <p>{gallery.nickname}</p>
                    <p>Likes: {gallery.Like}</p>
                  </S.GalleryCard>
                </Link>
              ))
            ) : (
              <p>No galleries found.</p>
            )}
          </S.GalleryList>

          <S.Pagination>
            <S.PaginationButton
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              이전
            </S.PaginationButton>
            <span>
              {currentPage} / {totalPages}
            </span>
            <S.PaginationButton
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              다음
            </S.PaginationButton>
          </S.Pagination>
        </>
      )}
    </S.GalleryPage>
  );
};

export default Allgallery;
