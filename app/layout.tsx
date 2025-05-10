import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
    title: "cotora",
    description: "cotora's portfolio",
    icons: {
        icon: "/icon_cloud_face.png",
        shortcut: "/icon_cloud_face.png",
        apple: "/icon_cloud_face.png",
    },
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>
        {children}
      </body>
    </html>
  );
}
