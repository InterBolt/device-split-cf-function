import React from "react";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        name="description"
        content="An example site to show how to use Cloudflare Page Functions to serve different HTML based on the device type."
      />
      <title>Device Split CF Function</title>
      <body className="app min-h-[100vh]">{children}</body>
    </html>
  );
}
