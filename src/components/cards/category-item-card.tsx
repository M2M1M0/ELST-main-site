"use client";
import React from "react";
import Image from "next/image";
import { Text } from "@/components/ui/text";
import cn from "@/utils/class-names";
import { usePathname, useSearchParams } from "next/navigation";
import useQueryParam from "@/utils/use-query-params";
interface Props {
  img: any;
  name: string;
  className?: string;
}
const CategoryItemCard = ({ img, name, className }: Props) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { getParams, updateQueryparams, setQueryparams, clearQueryParam } =
    useQueryParam(pathName);
  return (
    <div
      className={cn(
        "flex min-w-32 w-full items-center gap-2 bg-[#171718] border-2 p-3  rounded-md ",
        className,
        name === searchParams.get("category")
          ? "border-primary"
          : "border-[#454647]"
      )}
      onClick={() => {
        if (searchParams.get("category")) {
          updateQueryparams("category", name);
        } else {
          setQueryparams(name);
        }
      }}
    >
      <Image src={img} alt="name" className="h-5 w-5 object-contain" />
      <Text as="p" className="text-white ">
        {name}
      </Text>
    </div>
  );
};

export default CategoryItemCard;
