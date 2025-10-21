import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getGalleryInfoAsync } from "../../api/api";
import GalleryTemplate from "../ChinchillaContent/Content";

interface GalleryInfo {
  nickname: string;
  gallerynickname: string;
}

const Gallery: React.FC<{ code: any }> = () => {
  const navigate = useNavigate();
  const [galleryInfo, setGalleryInfo] = useState<GalleryInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  if (error) {
    return <div style={{ margin: "100px" }}>Error: {error}</div>;
  }

  return (
    <div style={{ marginTop: "70px", textAlign: "center" }}>
      <GalleryTemplate />
    </div>
  );
};

export default Gallery;
