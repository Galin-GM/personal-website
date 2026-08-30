import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Galin Mihaylov — Software Developer",
  description:
    "Portfolio of Galin Mihaylov, a London-based software developer building thoughtful full-stack applications and data systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
