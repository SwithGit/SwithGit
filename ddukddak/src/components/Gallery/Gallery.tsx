import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getGalleryInfoAsync } from "../../api/api";
import GalleryTemplate from "./GalleryTemplate";

interface GalleryInfo {
  Code: string;
  nickname: string;
  gallerynickname: string;
}

const Gallery: React.FC<{ code: string }> = ({ code }) => {
  const navigate = useNavigate();
  const [galleryInfo, setGalleryInfo] = useState<GalleryInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGalleryInfo = async (code: string) => {
      setLoading(true);
      setError(null);
      try {
        const result = await getGalleryInfoAsync(code);
        // console.log("API Result:", result);
        if (result && result.Code) {
          setGalleryInfo(result);
        } else {
          setError("Failed to load gallery information.");
        }
      } catch (error) {
        console.error("Error fetching gallery info:", error);
        setError("An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

    if (code) {
      fetchGalleryInfo(code);
    }
  }, [code]);

  if (loading) {
    return <div style={{ margin: "100px" }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ margin: "100px" }}>Error: {error}</div>;
  }

  if (!galleryInfo) {
    return (
      <div style={{ margin: "100px" }}>No gallery information available.</div>
    );
  }

  const handleViewContent = () => {
    navigate(`/ddookddak/${galleryInfo.Code}`);
  };

  return (
    <div style={{ marginTop: "70px", textAlign: "center" }}>
      <GalleryTemplate
        galleryInfo={galleryInfo}
        showGallery={handleViewContent}
      />
    </div>
  );
};

export default Gallery;
