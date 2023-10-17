"use client";

import Mobile from "./Mobile";
import Desktop from "./Desktop";
import useIsMounted from "@/hooks/useIsMounted";
import useMediaQuery from "@/hooks/useMediaQuery";

const Fallback = () => {
  const isDesktop = useMediaQuery("(min-width: 900px)");
  const mounted = useIsMounted();

  if (!mounted) {
    return null;
  }

  if (isDesktop) {
    return <Desktop />;
  }
  return <Mobile />;
};

export default Fallback;
