import { useLayoutEffect, useState } from "react";

const useIsMounted = () => {
  const [mounted, setMounted] = useState(false);
  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
};

export default useIsMounted;
