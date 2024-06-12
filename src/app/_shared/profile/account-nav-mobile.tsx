"use client";

import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { BiLogOut } from "react-icons/bi";
type Option = {
  name: string;
  slug: string;
  icon?: JSX.Element;
};

export default function AccountNavMobile({ options }: { options: Option[] }) {
  const router = useRouter();

  const pathname = usePathname();
  const pathnameSplit = pathname.split("/");
  const newPathname: string = `/${pathnameSplit
    .slice(2, pathnameSplit.length)
    .join("/")}`;

  const currentSelectedItem = newPathname
    ? options.find((o) => o.slug === newPathname)!
    : options[0];

  console.log({ currentSelectedItem, pathnameSplit });
  const [selectedItem, setSelectedItem] = useState<Option>(currentSelectedItem);
  useEffect(() => {
    setSelectedItem(currentSelectedItem ?? options[1]);
  }, [currentSelectedItem, options]);

  function handleItemClick(slugs: any) {
    setSelectedItem(slugs);
    router.push(`${slugs.slug}`);
  }

  return (
    <Listbox value={selectedItem} onChange={handleItemClick}>
      {({ open }) => (
        <div className="relative w-full font-body">
          <Listbox.Button className="relative justify-between flex items-center w-full p-4 border rounded cursor-pointer text-brand-dark md:p-5 ltr:text-left rtl:text-right focus:outline-none border-[#454647]/50">
            <div className="flex items-center gap-1 text-white">
              {selectedItem?.icon}
              <span className="flex truncate items-center text-sm md:text-15px font-medium ltr:pl-2.5 rtl:pr-2.5 relative">
                {selectedItem?.name}
              </span>
            </div>
            <span className="">
              <FaChevronDown
                className="w-3 md:w-3.5 h-3 md:h-3.5 text-brand-dark text-opacity-70"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              static
              className="absolute z-50 w-full py-2.5 mt-1.5 overflow-auto bg-[#222326] rounded-md shadow-xl max-h-72 focus:outline-none text-sm md:text-15px"
            >
              {options?.map((option, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `cursor-pointer relative py-3 px-4 md:px-5 ${
                      active
                        ? "text-white bg-fill-dropdown-hover"
                        : "border-[#454647]/50"
                    }`
                  }
                  value={option}
                >
                  {({ selected, active }) => (
                    <span className="flex items-center text-white capitalize gap-2">
                      {option?.icon}
                      <span
                        className={`block truncate ltr:pl-2.5 rtl:pr-2.5 md:ltr:pl-3 md:rtl:pr-3  ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option?.name}
                      </span>
                      {selected ? (
                        <span
                          className={`${active && "text-amber-600"}
                                 absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3`}
                        />
                      ) : null}
                    </span>
                  )}
                </Listbox.Option>
              ))}
              <button
                className="flex text-white gap-2 capitalize items-center w-full px-4 py-3 text-sm cursor-pointer lg:text-15px text-brand-dark md:px-5 focus:outline-none"
                onClick={() => {
                  signOut({ callbackUrl: "/" });
                }}
              >
                <span className="flex justify-center shrink-0">
                  <BiLogOut className="w-5 md:w-[22px] h-5 md:h-[22px] rotate-180" />
                </span>
                <span className="block truncate ltr:pl-2.5 rtl:pr-2.5 md:ltr:pl-3 md:rtl:pr-3">
                  {"logout"}
                </span>
              </button>
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
}
