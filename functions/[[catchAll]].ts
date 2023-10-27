import { getSelectorsByUserAgent } from "react-device-detect";
import { parse } from "npm-url";

const useNestedDir = (
  parsedUrl: { host: string; href: string },
  dir: "_mobile" | "_desktop"
) => {
  const { host, href } = parsedUrl;
  const modifiedUrl = href.replace(host, host + "/" + dir);
  return modifiedUrl;
};

export const onRequest: PagesFunction = async ({ next, request }) => {
  const headers = new Headers(request.headers);
  const { isMobile, isDesktop, isTablet } = getSelectorsByUserAgent(
    headers.get("user-agent")
  );

  const parsedUrl = parse(request.url);

  let nextRequest: Request = request;
  if (isMobile && !request.url.includes("/_mobile/")) {
    nextRequest = new Request(useNestedDir(parsedUrl, "_mobile"));
  } else if (isDesktop && !request.url.includes("/_desktop/")) {
    nextRequest = new Request(useNestedDir(parsedUrl, "_desktop"));
  }

  return next(nextRequest);
};
