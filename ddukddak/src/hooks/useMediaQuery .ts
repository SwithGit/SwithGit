import { useState, useEffect } from "react";

function useMediaQuery(query: string) {
  const getMatches = (query: string) => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [isMatched, setIsMatched] = useState(getMatches(query));

  const handleChange = () => {
    setIsMatched(getMatches(query));
  };

  useEffect(() => {
    const matchMediaList = window.matchMedia(query);

    handleChange();
    matchMediaList.addEventListener("change", handleChange);

    return () => {
      matchMediaList.removeEventListener("change", handleChange);
    };
  }, [query]);

  return isMatched;
}

export default useMediaQuery;
