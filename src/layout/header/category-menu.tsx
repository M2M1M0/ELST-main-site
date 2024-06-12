"use client";
import React from "react";
import {
  Menu as MenuInner,
  MenuItem as MenuItemInner,
  SubMenu as SubMenuInner,
  MenuButton,
  MenuDivider,
} from "@szhsin/react-menu";
import { FaBars } from "react-icons/fa";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import Image from "next/image";
import Link from "next/link";
import { useFetchData } from "@/hooks/useFetchData";
import { queryKeys } from "@/constants/query_keys";
import { CategoryResponse } from "@/types/category";
const CategoryMenu = () => {
  const categoryData = useFetchData(
    [queryKeys.getCategoriesQuery],
    `course/browse_categories`
  );
  const data = categoryData?.data?.categories as CategoryResponse[];
  const menuClassName = ({ state }: { state: string }) =>
    `box-border z-50 text-sm !bg-[#151515]  border rounded-md shadow-lg select-none focus:outline-none !p-3 !w-96 ${
      state === "opening" && "animate-fadeIn"
    } ${state === "closing" && "animate-fadeOut"}`;

  const menuItemClassName = ({
    hover,
    disabled,
    submenu,
  }: {
    hover: boolean;
    disabled: boolean;
    submenu: boolean;
  }) =>
    `rounded-md px-3 !py-3 focus:outline-none text-white ${
      hover && " !bg-white/10"
    } ${disabled && "text-gray-400"} ${submenu && "flex items-center"}`;

  const Menu = (props: any) => (
    <MenuInner {...props} menuClassName={menuClassName} />
  );

  const MenuItem = (props: any) => (
    <MenuItemInner {...props} className={menuItemClassName} />
  );

  const SubMenu = (props: any) => (
    <SubMenuInner
      {...props}
      shift={-7}
      className="relative"
      menuClassName={menuClassName}
      itemProps={{ className: menuItemClassName }}
    />
  );
 
  return (
    <div className="hidden lg:flex">
      <Menu
        transition
        menuClassName={"!bg-[#151515] !p-2 m-0 !w-96"}
        menuButton={
          <MenuButton>
            {" "}
            <button className="text-white hover:!text-white/80 !m-0 whitespace-nowrap !p-0 flex items-center gap-2 text-sm">
              <FaBars className="text-white " />
              <span>Categories</span>
            </button>
          </MenuButton>
        }
      >
        {data?.map((category) => (
          <SubMenu
            label={category.categoryName}
            key={category.categoryName}
            className={
              "text-white font-medium  py-1.5 rounded-md   hover:bg-[#222326]"
            }
            itemProps={{
              className: "hover:bg-transparent",
            }}
          >
            {category?.subCategories.map((submenu) => (
              <SubMenu
                label={submenu.categoryName}
                key={submenu.categoryID}
                className={
                  "text-white font-medium !w-96 py-1.5 rounded-md bg-[#151515]  hover:bg-[#222326]"
                }
                itemProps={{
                  className: "hover:bg-transparent ",
                }}
              >
                {submenu?.courses.map((teacher) => (
                  <MenuItem key={teacher.courseName}>
                    <div className="flex items-center gap-2">
                      <Image
                        className="h-11 w-11 object-cover rounded-md border border-[#454647]"
                        src={teacher?.courseBanner}
                        height={500}
                        width={500}
                        quality={100}
                        alt={teacher?.courseName}
                      />
                      {teacher.courseName}
                    </div>
                  </MenuItem>
                ))}
                <Link href={"/en/categories"}>
                  <button className="bg-[#151515] border-2 rounded-md border-[#454647] p-3 w-full text-white font-medium mt-2">
                    View All ({submenu?.courses?.length}) Categories
                  </button>
                </Link>
              </SubMenu>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </div>
  );
};

export default CategoryMenu;
