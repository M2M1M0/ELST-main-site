"use client";
import React from "react";
import { HiChevronDown } from "react-icons/hi";
import Link from "next/link";
import MobileCategoryMenu from "./mobile-category-menu";
import { useDrawer } from "@/app/_shared/drawer-views/use-drawer";
import { signOut, useSession } from "next-auth/react";
import { useModal } from "@/app/_shared/modal-views/use-modal";
import Login from "@/app/_shared/auth/login-form";
const HeaderMenuRight = () => {
  const { data: session } = useSession();
  const { openDrawer } = useDrawer();
  const { openModal } = useModal();
  return (
    <div className="flex items-center gap-5">
      <Link
        href={"/en/articles"}
        className="hidden lg:flex text-white hover:!text-white/90 !m-0 whitespace-nowrap text-sm"
      >
        Articles
      </Link>
      <p
        onClick={() =>
          openModal({
            view: <Login login />,
          })
        }
        className="hidden lg:flex text-white hover:!text-white/90 !m-0 whitespace-nowrap text-sm"
      >
        Sign In
      </p>
      <button
        className="text-white hover:!text-white/60 !m-0 whitespace-nowrap !p-0 flex lg:hidden"
        onClick={() =>
          openDrawer({
            view: <MobileCategoryMenu />,
            placement: "right",
          })
        }
      >
        <span>Browse</span>
        <HiChevronDown size={22} />
      </button>
      {session ? (
        <p onClick={() => signOut()} className="text-white">
          Logout
        </p>
      ) : (
        <button
          onClick={() =>
            openModal({
              view: <Login />,
            })
          }
          className="px-6 text-sm whitespace-nowrap hidden lg:flex bg-primary text-white rounded-full p-3 hover:opacity-95 font-medium "
        >
          Sign Up
        </button>
      )}
    </div>
  );
};

export default HeaderMenuRight;
