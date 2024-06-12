import React from "react";
import { FiSearch } from "react-icons/fi";
import cn from "@/utils/class-names";
const SearchBar = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "xl:max-w-2xl xl:mx-auto  bg-[#151515]  disabled:text-gray-500 flex items-center justify-between xl:w-full flex-grow p-1 rounded-md border border-[#454647]/50",
        className
      )}
    >
      <input
        type="text"
        placeholder="Search for expert thought and teaching"
        className="bg-transparent border-none flex flex-grow w-full text-sm focus:ring-0 text-white"
      />
      <FiSearch className="h-5 w-5 text-white/70 mr-2" />
    </div>
  );
};

export default SearchBar;
