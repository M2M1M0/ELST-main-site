import React from "react";
import { Title, Text } from "@/components/ui/text";
import { PiXBold } from "react-icons/pi";
import { FaCircleArrowLeft } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { MdChevronRight } from "react-icons/md";
import { useDrawer } from "@/app/_shared/drawer-views/use-drawer";
import { useFetchData } from "@/hooks/useFetchData";
import { queryKeys } from "@/constants/query_keys";
import { CategoryResponse, SubCategory } from "@/types/category";

const MobileCategoryMenu = () => {
  const categoryData = useFetchData(
    [queryKeys.getCategoriesQuery],
    `course/browse_categories`
  );
  const data = categoryData?.data?.categories as CategoryResponse[];
  const [selectedCategory, setSelectedCategory] =
    React.useState<CategoryResponse | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] =
    React.useState<SubCategory | null>(null);
  const { closeDrawer } = useDrawer();
  return (
    <div className="flex h-full w-full flex-col bg-[#151515] p-5">
      <div className="flex items-center justify-between pb-3">
        <Title as="h5" className="text-white">
          Categories
        </Title>
        <button onClick={() => closeDrawer()}>
          <PiXBold className="h-auto w-5 text-white" />
        </button>
      </div>

      {selectedCategory && (
        <FaCircleArrowLeft
          onClick={() => {
            if (selectedSubCategory) {
              setSelectedSubCategory(null);
              return;
            }
            setSelectedCategory(null);
          }}
          className="h-auto w-8 text-[#888b96] cursor-pointer"
        />
      )}
      {!selectedCategory && (
        <div className="flex flex-col items-start space-y-6   w-full  pt-6 ">
          {data?.map((category) => (
            <div
              key={category.categoryName}
              className="flex items-center w-full justify-between cursor-pointer"
              onClick={() => setSelectedCategory(category)}
            >
              <h6 className="text-white !font-medium w-full ">
                {category.categoryName}
              </h6>
              <MdChevronRight size={20} className="text-white" />
            </div>
          ))}
        </div>
      )}
      {selectedCategory && !selectedSubCategory && (
        <div className="flex flex-col items-start space-y-6   w-full  pt-6">
          {selectedCategory?.subCategories?.map((submenu) => (
            <div
              key={submenu.categoryID}
              className="flex items-center w-full justify-between cursor-pointer"
              onClick={() => setSelectedSubCategory(submenu)}
            >
              <h6 className="text-white !font-medium w-full ">
                {submenu.categoryName}
              </h6>
              <MdChevronRight size={20} className="text-white" />
            </div>
          ))}
        </div>
      )}
      {selectedSubCategory && (
        <div className="flex flex-col items-start space-y-6   w-full  pt-6">
          {selectedSubCategory?.courses?.map((teacher) => (
            <Link
              href={"/en/detail"}
              className="flex items-center gap-2 w-full border-b border-white/20 pb-1"
              key={teacher.courseName}
            >
              <Image
                className="h-14 w-14 object-cover rounded-md "
                src={teacher?.courseBanner}
                height={500}
                width={500}
                quality={100}
                alt={teacher?.courseName}
              />

              <h6 className="text-white !font-medium w-full  pb-1">
                {teacher.courseName}
              </h6>
            </Link>
          ))}
          <Link href={"/en/categories"} className="w-full">
            <button className="bg-[#151515] border-2 rounded-md border-[#454647] p-3 w-full text-white font-medium mt-2 ">
              View All ({selectedSubCategory?.courses?.length}) Categories
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileCategoryMenu;
