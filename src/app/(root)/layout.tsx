"use client";

import { useIsMounted } from "@/hooks/use-is-mounted";
import Footer from "@/layout/footer/footer";
import Header from "@/layout/header/header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return <>
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className=" w-full space-y-12 flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  </>;
}
