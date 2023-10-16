import env from "@/env";
import React from "react";
import Mobile from "@/screens/Mobile";
import Desktop from "@/screens/Desktop";
import Fallback from "@/screens/Fallback";

const Page = () => {
  if (env.DEVICE === "mobile") {
    return <Mobile />;
  }
  if (env.DEVICE === "desktop") {
    return <Desktop />;
  }
  return <Fallback />;
};

export default Page;
