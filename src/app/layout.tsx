import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ilter Kemal",
  description: "Personal portfolio site of Ilter Kemal",
  keywords: ['Ilter Kemal', 'Portfolio', 'Software Engineer', 'Machine Learning'],
  authors: [{ name: 'Ilter Kemal' }],
  creator: 'Ilter Kemal',

  openGraph: {
    title: "Ilter Kemal",
    description: "My personal portfolio",
    url: "https://ilter-kemal.vercel.app",
    siteName: "Ilter Kemal",
    images: [
      {
        url: "https://ilter-kemal.vercel.app/preview.png",
        width: 1200,
        height: 630,
        alt: "Ilter Kemal Portfolio Preview",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
