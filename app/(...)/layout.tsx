import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#344D67" />
      <meta
        name="description"
        content="An example site to show how to use Cloudflare Page Functions to serve different HTML based on the device type."
      />
      <title>Device Split CF Function</title>
      <body className="app min-h-[100vh] bg-blue-800">{children}</body>
    </html>
  );
}
