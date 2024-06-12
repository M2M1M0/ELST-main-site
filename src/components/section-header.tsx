import React from "react";
import Container from "./container";
import { Title, Text } from "@/components/ui/text";
import Link from "next/link";
interface Props {
  title: string;
  rightText?: string;
  hasMore?: boolean;
  href?: string;
  rightComp?: React.ReactNode;
}
const SectionHeader = ({
  title,
  rightText,
  hasMore = false,
  href = "/",
  rightComp,
}: Props) => {
  return (
    <div className="flex items-center justify-between w-full">
      <Title
        as="h2"
        className="text-left text-lg lg:text-xl xl:text-[22px] xl:leading-8 font-bold text-white"
      >
        {title}
      </Title>
      {rightText && (
        <Link href={href}>
          <Text as="span" className="text-sm text-white/70">
            {rightText}
          </Text>
        </Link>
      )}
      {rightComp && rightComp}
    </div>
  );
};

export default SectionHeader;
