import { Public_Sans, Open_Sans } from "next/font/google";

export const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public",
});
