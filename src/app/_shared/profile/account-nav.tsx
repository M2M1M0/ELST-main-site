"use client";

import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { BiLogOut } from "react-icons/bi";
type Option = {
  name: string;
  slug: string;
  icon?: JSX.Element;
};

export default function AccountNav({ options }: { options: Option[] }) {
  const pathname = usePathname();
  const newPathname = pathname.split("/").slice(3, 4);
  const mainPath = `/${newPathname[0]}`;

  return (
    <>
      <nav className="flex flex-col pb-2 overflow-hidden border rounded-md md:pb-6 border-[#454647]/50">
        {options.map((item) => {
          const menuPathname = item.slug.split("/").slice(2, 3);
          const menuPath = `/${menuPathname[0]}`;

          return (
            <Link
              key={item.slug}
              href={`${item.slug}`}
              className={`flex capitalize items-center cursor-pointer text-sm lg:text-15px  py-3.5 px-3.5 xl:px-4 2xl:px-5 mb-1 ${
                mainPath === menuPath
                  ? "bg-[#222326] font-medium text-white"
                  : "font-normal text-white"
              }`}
            >
              <span className="flex justify-center w-9 xl:w-10 shrink-0">
                {item.icon}
              </span>
              <span className="ltr:pl-1 lg:rtl:pr-1.5">{item.name}</span>
            </Link>
          );
        })}
        <button
          className="flex items-center text-sm capitalize lg:text-15px text-white  py-3.5 px-3.5 xl:px-4 2xl:px-5 mb-1 cursor-pointer focus:outline-none"
          onClick={() => {
            signOut({ callbackUrl: "/" });
          }}
        >
          <span className="flex justify-center w-9 xl:w-10 shrink-0">
            <BiLogOut className="w-5 md:w-[22px] h-5 md:h-[22px] rotate-180" />
          </span>
          <span className="ltr:pl-1 lg:rtl:pr-1.5">{"logout"}</span>
        </button>
      </nav>
    </>
  );
}
