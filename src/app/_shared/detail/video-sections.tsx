"use client";
import { useRef, useEffect } from "react";
import { Title, Text } from "@/components/ui/text";
import VideoSectionCard from "@/components/cards/video-sections-card";
import Container from "@/components/container";

//videojs
import videojs from "video.js";
import "@/videojs/plugins/es/nuevo";
import "@/videojs/plugins/es/vroll";
import "@/videojs/skins/treso/videojs.min.css";

const VideoPlayLists = () => {
  const mockAboutData = [
    {
      id: 1,
      name: "Trailer",
      desc: "Get a taste of the culinary excellence you're about to experience.",
      isLocked: false,
    },
    {
      id: 2,
      name: "Introduction",
      desc: "Meet Marcus Samuelsson and learn about his culinary philosophy.",
      isLocked: true,
    },
    {
      id: 3,
      name: "The Essence of Flavor",
      desc: "Exploring Spices and Seasonings.",
      isLocked: true,
    },
    {
      id: 4,
      name: "From Market to Plate",
      desc: "Selecting Quality Ingredients.",
      isLocked: true,
    },
    {
      id: 5,
      name: "Techniques of the Trade",
      desc: "Cooking Methods That Make a Difference.",
      isLocked: true,
    },
    {
      id: 6,
      name: "Signature Dishes",
      desc: "Step-by-Step Guides to Marcus' Classics.",
      isLocked: true,
    },
  ];
  const videoRef = useRef(null);
  const nuevoOptions = {
    logo: "//cdn.nuevodevel.com/img/logo_small.png",
    logourl: "//www.nuevodevel.com",
  };
  useEffect(() => {
    // videojs.Vhs.xhr.beforeRequest = function (options) {
    //   const header = {
    //     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.j4Uv5sBHe2jrvsaAdekuzQI8rOBrInihLXYUWauUtO8`,
    //   };
    //   options.headers = header;
    //   console.log("before", options);

    //   return options;
    // };
    if (videoRef.current) {
      // Initialize player

      const player = videojs(videoRef.current, {
        fluid: true,
        poster: "//cdnzone.nuevodevel.com/images/coffee.jpg",
        techOrder: ["html5"],
        sources: [
          {
            src: "https://cdnzone.nuevodevel.com/video/hls/tears/playlist.m3u8",
            type: "application/x-mpegURL",
          },
        ],
        tracks: [
          {
            kind: "captions",
            src: "//cdnzone.nuevodevel.com/video/hls/tears/captions/steal_en.vtt",
            srlang: "en",
            label: "English",
            default: "1",
          },
          {
            kind: "captions",
            src: "//cdnzone.nuevodevel.com/video/hls/tears/captions/steal_de.vtt",
            srlang: "de",
            label: "German",
          },
          {
            kind: "captions",
            src: "//cdnzone.nuevodevel.com/video/hls/tears/captions/steal_fr.vtt",
            srlang: "fr",
            label: "French",
          },
          {
            kind: "captions",
            src: "//cdnzone.nuevodevel.com/video/hls/tears/captions/steal_es.vtt",
            srlang: "es",
            label: "Spanish",
          },
        ],
      });
      player.on("ready", function () {
        console.log("Player ready!");
      });

      // Initialize Nuevo plugin
      (player as any).nuevo(nuevoOptions);
      // player.on("loadeddata", function () {
      //   var track = {
      //     kind: "metadata",
      //     src: "https://nvd.nuevodevel.com/media/coffee.vtt",
      //   };
      //   this.loadTracks(track);
      // });
      // player.vroll([
      //   {
      //     src: "https://cdnzone.nuevodevel.com/pub/preroll_480.mp4",
      //     type: "video/mp4",
      //     href: "//www.nuevodevel.com/nuevo",
      //     offset: "8",
      //     skip: "5",
      //   },
      //   {
      //     src: "https://cdnzone.nuevodevel.com/pub/midroll_480.mp4",
      //     type: "video/mp4",
      //     href: "//www.nuevodevel.com/nuevo",
      //     offset: "25",
      //     skip: "5",
      //   },
      // ]);
    }
  });
  return (
    <>
      <Container className="flex flex-col items-center justify-center space-y-2">
        <div className="flex flex-col items-center justify-center pb-5 gap-2">
          <Title as="h2" className=" text-white ">
            Start This Class
          </Title>
          <Text as="p" className="text-white/50 text-center w-full text-sm">
            Embark on a Culinary Odyssey with Marcus Samuelsson
          </Text>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-8 flex flex-col items-start space-y-2 w-full">
            <video controls ref={videoRef} className="video-js" />
            <Title as="h5" className="text-white">
              Trailer
            </Title>
            <Text as="p" className="text-white/50 text-sm">
              Join Marcus Samuelsson, the acclaimed Ethiopian-Swedish-American
              chef and restaurateur, as he guides you through a gastronomic
              journey that transcends borders. In this class, Marcus shares his
              expertise in blending traditional Ethiopian cooking techniques
              with a contemporary twist, offering you the unique opportunity to
              master dishes that celebrate his heritage and his globally
              renowned culinary style. From the comfort of your kitchen, learn
              how to craft signature dishes that have graced the tables of his
              famous restaurants, including the vibrant Red Rooster in Harlem,
              the eclectic MARCUS Montreal, and the chic Marcus B&P.
            </Text>
            <div className="flex flex-col items-start space-y-1 w-full">
              <Text as="p" className="text-white/50 text-sm">
                Instructor:{" "}
                <span className="text-white">Marcus Samuelsson</span>
              </Text>
              <Text as="p" className="text-white/50 text-sm">
                Class length:{" "}
                <span className="text-white">
                  10 Video Lessons (Total Duration: 20 Hours 4 Minutes)
                </span>
              </Text>
              <Text as="p" className="text-white/50 text-sm">
                Category: <span className="text-white">Culinary Arts</span>
              </Text>
              <Text as="p" className="text-white/50 text-sm">
                Price:{" "}
                <span className="text-white font-bold text-lg">199 Birr</span>
              </Text>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start space-y-2">
            {mockAboutData.map((item) => (
              <VideoSectionCard
                key={item.id}
                name={item.name}
                desc={item.desc}
                isLocked={item.isLocked}
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default VideoPlayLists;
