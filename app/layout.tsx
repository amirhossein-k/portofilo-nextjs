import {ThemeProvider} from "@/components/theme-provider";
import "./globals.css";
import type {Metadata} from "next";

import localFont from "next/font/local";
import {Manrope} from "next/font/google";
import {siteConfig} from "@/config/site-config";
const manrope = Manrope({subsets: ["latin"]});

const Myfont = localFont({
  src: [
    {
      path: "./fonts/Traffic.ttf",
      style: "normal",
      weight: "300",
    },
  ],
});

export const metadata: Metadata = {
  title: "AmirHossein Karimi",
  description: siteConfig.bio,
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`h-screen `} suppressHydrationWarning>
      <body className={` ${manrope.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <div className="flex flex-col h-full">{children}</div> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
