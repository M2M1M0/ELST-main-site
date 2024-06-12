import LogoImage from "@public/logo.svg";
import Image, { StaticImageData } from "next/image";
import cn from "@/utils/class-names";

export default function Logo({
  className,
  image,
}: {
  className?: string;
  image?: StaticImageData;
}) {
  return (
    <Image
      src={image ?? LogoImage}
      alt="logo"
      quality={100}
      priority
      className={cn("h-12 object-contain w-full", className)}
    />
  );
}
