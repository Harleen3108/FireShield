import type { Metadata } from "next";
import { Poppins, Rajdhani } from "next/font/google";
import "./globals.css";

// Body font — matches Classic Infotech
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Display / heading font — matches Classic Infotech
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FireShield — AI-Powered Fire Response Platform",
  description:
    "End-to-end fire detection, drone deployment & suppression platform built for India's fire departments. Developed in partnership with Goa Fire & Emergency Services.",
  keywords: [
    "fire detection",
    "drone deployment",
    "emergency response",
    "AI fire prediction",
    "Goa Fire Services",
    "Make in India",
  ],
  openGraph: {
    title: "FireShield — AI-Powered Fire Response",
    description:
      "Faster. Smarter. Safer. AI fire detection, drone deployment & suppression for India's fire departments.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} ${rajdhani.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
