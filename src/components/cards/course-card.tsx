import Image from "next/image";
import React from "react";
import { Title, Text } from "@/components/ui/text";
import Link from "next/link";
import Fot from "@public/font.png";
import { Course } from "@/types/course";
interface Props {
  course: Course;
  variant?: "square" | "normal";
}
const CourseCard = ({ course, variant = "normal" }: Props) => {
  // if (variant === "square") {
  //   return (
  //     <Link href={"/detail"}>
  //       <div className={`relative overflow-hidden  w-full h-56 md:h-[300px]`}>
  //         <Image
  //           src={item?.img}
  //           alt="Product Image"
  //           fill
  //           placeholder="blur"
  //           quality={100}
  //           className="rounded-md object-cover transition-all duration-300 ease-in-out z-20"
  //         />
  //         <div className="absolute rounded-md inset-0 bg-gradient-to-b from-black/70 to-transparent z-30" />
  //         <div className="absolute top-4 right-0 left-4 z-40">
  //           <div className="w-full flex flex-col  items-start justify-start">
  //             {/* <Text as="p" className="line-clamp-1 text-white font-normal">
  //                 President
  //               </Text> */}
  //             <h6 className="text-white text-[30px] md:text-[36px] leading-[28.4px] text-center !font-landsans">
  //               {item?.name ?? "SAHLE WERK ZEWDE"}
  //             </h6>
  //             {/* <Text as="p" className="line-clamp-2 text-center text-white">
  //               Teaches the Art of strength and resilience
  //             </Text> */}
  //           </div>
  //         </div>
  //       </div>
  //     </Link>
  //   );
  // }
  return (
    <Link href={`/detail/${course?.slug}`}>
      <div className="group cursor-pointer">
        <div className="relative overflow-hidden  w-full h-[366px]">
          <Image
            src={course?.instructorPhoto}
            alt={course?.instructorName}
            fill
            quality={100}
            placeholder="blur"
            blurDataURL={course?.blurHash}
            className="rounded-lg object-cover transition-all duration-300 ease-in-out z-20 group-hover:scale-105  "
          />
          <div className="absolute rounded-lg inset-0 bg-gradient-to-t from-black/80 to-transparent z-30 transition-all duration-300 ease-in-out group-hover:scale-105" />
          <div className="absolute bottom-5 right-2 left-2 z-40">
            <div className="w-full flex flex-col  items-center justify-center space-y-1">
              <Image
                src={Fot}
                alt="font"
                className="h-10 lg:h-11 object-contain lg:object-cover w-full text-center"
                priority
                loading="eager"
              />

              <Text
                as="p"
                className="line-clamp-2 text-center text-white text-xs"
              >
                {course?.instructorTag}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
