import type { Metadata } from "next";
import { Inter, Spectral_SC } from "next/font/google";
import "./globals.css";

const spectral = Spectral_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Pardo",
  description: "Daniel Pardo - Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spectral.className + " bg-black-ligthest"}>{children}</body>
    </html>
  );
}
