// src/hooks/useDeviceSize.ts
import useMediaQuery from "./useMediaQuery ";
import { MEDIA_QUERIES } from "../style/mediaQueries";

function useDeviceSize() {
  const isMobile = useMediaQuery(MEDIA_QUERIES.mobile);
  const isTablet = useMediaQuery(MEDIA_QUERIES.tablet);
  const isPC = useMediaQuery(MEDIA_QUERIES.pc);
  return { isMobile, isTablet, isPC };
}

export { useDeviceSize };
