"use client";

import Mobile from "./mobile";
import Desktop from "./desktop";
import useIsMounted from "@/hooks/useIsMounted";
import useMediaQuery from "@/hooks/useMediaQuery";

const Home = () => {
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

export default Home;
