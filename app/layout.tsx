import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { KindeAuthProvider } from "@/components/layout/KindeAuthProvider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "Next 15 Blog App",
  description: "Simple app for New Next 15 Test",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased mx-auto md:px-0 sm:px-4 lg:px-8`}>
      <KindeAuthProvider>{children}</KindeAuthProvider>
    </body>
  </html>
);

export default RootLayout;
