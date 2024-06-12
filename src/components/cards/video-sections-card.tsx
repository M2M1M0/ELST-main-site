import React from "react";
import Image from "next/image";
import { Title, Text } from "@/components/ui/text";
import { FaPlay } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
interface Props {
  name: string;
  desc: string;
  isLocked?: boolean;
}
const VideoSectionCard = ({ name, desc, isLocked }: Props) => {
  return (
    <div className="flex  w-full items-center gap-2 bg-[#171718] border border-[#454647]/50 p-3  rounded-md ">
      <div className="min-w-10 w-10 h-10 bg-primary flex items-center justify-center rounded-full whitespace-nowrap">
        {isLocked ? (
          <FaLock size={17} className="text-white" />
        ) : (
          <FaPlay size={17} className="text-white" />
        )}
      </div>
      <div className="flex flex-col items-start space-y-1  w-full">
        <Title as="h6" className="text-white ">
          {name}
        </Title>
        <Text as="p" className="text-white/70 text-sm">
          {desc}
        </Text>
      </div>
    </div>
  );
};

export default VideoSectionCard;
