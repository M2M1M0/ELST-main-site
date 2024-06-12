import React from "react";
import { Metadata } from "next";
import { CourseDetail } from "@/types/course";
import { dynamicBlurDataUrl } from "@/utils/generate-blur-image";
import Container from "@/components/container";
import dynamic from "next/dynamic";
import { Title, Text } from "@/components/ui/text";
import FaqList from "../../_shared/faq";
import VideoPlayerLoader from "@/components/loaders/video-player-loading";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
const VideoPlayLists = dynamic(
  () => import("../../_shared/detail/video-sections"),
  {
    ssr: false,
    loading: () => <VideoPlayerLoader />,
  }
);
interface Props {
  params: {
    slug: string;
  };
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}course/browse_course_by_slug/${params.slug}`,
    {
      cache: "no-store",
    }
  );

  const course: CourseDetail = await res.json();
  return {
    title: course?.courseName + "Ethiopian Masterclass",
    description: course?.courseDescription,
    openGraph: {
      images: [
        {
          url: course?.courseBanner,
          height: 600,
          width: 800,
        },
      ],
    },
  };
}
const getData = async ({ params }: Props) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}course/browse_course_by_slug/${params.slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};
const Detail = async ({ params }: Props) => {
  const data: CourseDetail = await getData({ params });
  //generate blur data url
  const blurredBanner = await dynamicBlurDataUrl(data?.courseBanner);

  return (
    <>
      <Header />
      <div className=" w-full space-y-4">
        {/*  */}
        <VideoPlayLists />
        <Container className="flex flex-col items-center justify-center w-full space-y-3">
          <Title as="h2" className=" text-white ">
            What You’ll Gain
          </Title>
          <div className="flex flex-col items-start justify-center max-w-4xl mx-auto space-y-1">
            <li className="text-white/70 text-sm w-full">
              Insight into the rich tapestry of Ethiopian flavors and how they
              can be adapted to contemporary dishes.
            </li>
            <li className="text-white/70 text-sm">
              Hands-on guidance to perfect cooking techniques that bring out the
              best in every ingredient.
            </li>
            <li className="text-white/70 text-sm">
              A behind-the-scenes look at the creativity and business acumen
              needed to run world-class restaurants.
            </li>
            <li className="text-white/70 text-sm">
              An enriched understanding of how to create and present dishes that
              not only taste divine but also tell a compelling story.
            </li>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <Text as="p" className="text-white">
              Price
            </Text>
            <Title as="h1" className=" text-white ">
              199 Birr
            </Title>
            {/* <Button
          rounded="pill"
          color="primary"
          size="lg"
          className="px-10 whitespace-nowrap"
        >
          Watch Now
        </Button> */}
          </div>
        </Container>
        <FaqList />
      </div>
      <Footer />
    </>
  );
};

export default Detail;
