import type { Metadata } from "next";
import { Cinzel, Geist, Geist_Mono, UnifrakturMaguntia } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = UnifrakturMaguntia({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

const serif = Cinzel({
  weight: ["400", "600", "700"],
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Umbral Covenant | Grimdark 2D RPG",
  description:
    "Descend into the shadow-scarred realms of Umbral Covenant, a hand-painted 2D grimdark fantasy RPG where every choice reshapes the final light.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${display.variable} ${serif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
