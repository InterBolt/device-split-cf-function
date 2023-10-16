import { getSelectorsByUserAgent } from "react-device-detect";
import { parse } from "cf-url";

const useNestedDir = (ogUrl: string, dir: "_mobile" | "_desktop") => {
  const { host, href } = parse(ogUrl);
  const modifiedUrl = href.replace(host, host + "/" + dir);
  return modifiedUrl;
};

export const onRequest: PagesFunction = async ({ next, request }) => {
  const headers = new Headers(request.headers);
  const { isMobile, isDesktop } = getSelectorsByUserAgent(
    headers.get("user-agent")
  );

  let nextRequest: Request = request;
  if (isMobile) {
    nextRequest = new Request(useNestedDir(request.url, "_mobile"));
  } else if (isDesktop) {
    nextRequest = new Request(useNestedDir(request.url, "_desktop"));
  }

  return next(nextRequest);
};
