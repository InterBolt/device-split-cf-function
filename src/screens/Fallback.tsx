"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const useMediaQuery = (query: string): boolean => {
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
};

const Fallback = () => {
  const [mounted, setMounted] = useState(false)
  const matches = useMediaQuery("(min-width: 768px)");

  useLayoutEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  if (matches) {
    return <Desktop />;
  }
  return <Mobile />;
};

export default Fallback;
