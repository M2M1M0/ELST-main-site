import type { Metadata } from "next";
import GlobalDrawer from "./_shared/drawer-views/container";

import { publicSans, openSans } from "@/app/fonts";
import localFont from "next/font/local";
import cn from "@/utils/class-names";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/auth-options";
import AuthProvider from "./api/auth/[...nextauth]/auth-provider";
import GlobalModal from "./_shared/modal-views/container";
import { Toaster } from "sonner";
import LogoIcon from "@public/elst_logo.png"
import Image from "next/image";

export const metadata: Metadata = {
  title: "EagleLion System Technology",
  description: "",
};
const landSans = localFont({
  src: [
    {
      path: "./Landasans_demo01-Regular.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-landsans",
});
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={cn(
          publicSans.variable,
          openSans.variable,
          landSans.variable,
          "font-sans"
        )}
      >
        <AuthProvider session={session}>
          <Toaster richColors position="top-right" closeButton />
          <GlobalDrawer />
          <GlobalModal />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
