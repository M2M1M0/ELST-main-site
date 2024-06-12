import Container from "@/components/container";
import { routes } from "@/configs/routes";
import { FaRegUserCircle } from "react-icons/fa";
import { RiHotelLine } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import AccountNavMobile from "@/app/_shared/profile/account-nav-mobile";
import AccountNav from "@/app/_shared/profile/account-nav";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";

const accountMenu = [
  {
    slug: "",
    name: "account settings",
    icon: <FaRegUserCircle className="w-5 md:w-[22px] h-5 md:h-[22px]" />,
  },
  {
    slug: "",
    name: "my Courses",
    icon: <RiHotelLine className="w-5 md:w-[22px] h-5 md:h-[22px]" />,
  },

  {
    slug: "",
    name: "my wishlist",
    icon: <MdFavoriteBorder className="w-5 md:w-[22px] h-5 md:h-[22px]" />,
  },
];

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Container className="  w-full">
        <div className="  w-full gap-5">
          <div className="pt-10 2xl:pt-12 pb-12 lg:pb-14 xl:pb-16 2xl:pb-20 xl:max-w-screen-xl 2xl:max-w-[1300px] mx-auto w-full">
            <div className="flex flex-col w-full lg:flex-row gap-5">
              <div className="lg:hidden">
                <AccountNavMobile options={accountMenu} />
              </div>
              <div className="hidden lg:block shrink-0 w-56 xl:w-72 2xl:w-[385px] ltr:mr-7 rtl:ml-7 xl:ltr:mr-8 xl:rtl:ml-8">
                <AccountNav options={accountMenu} />
              </div>

              <div className="w-full p-4 mt-4 overflow-x-auto border rounded-md lg:mt-0 border-[#454647]/50 sm:p-5 lg:py-8 2xl:py-10 lg:px-7 2xl:px-12">
                {children}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
