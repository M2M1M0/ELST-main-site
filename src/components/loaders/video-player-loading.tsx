import React from "react";
import ContentLoader from "react-content-loader";
import Container from "../container";

const VideoPlayerLoader = () => (
  <Container className="grid grid-cols-1 lg:grid-cols-12 gap-5">
    <div className="lg:col-span-8 flex flex-col items-start space-y-2 w-full">
      <ContentLoader
        speed={2}
        width={"100%"}
        height={350}
        viewBox="0 0 100% 350"
        backgroundColor="#373739"
        foregroundColor="#404042"
      >
        <rect x="0" y="0" rx="0" ry="0" width="100%" height="350" />
      </ContentLoader>
      <ContentLoader
        speed={2}
        width={"100%"}
        height={15}
        viewBox="0 0 100% 15"
        backgroundColor="#373739"
        foregroundColor="#404042"
      >
        <rect x="0" y="0" rx="0" ry="0" width="100%" height="15" />
      </ContentLoader>
      <ContentLoader
        speed={2}
        width={"70%"}
        height={10}
        viewBox="0 0 70% 10"
        backgroundColor="#373739"
        foregroundColor="#404042"
      >
        <rect x="0" y="0" rx="0" ry="0" width="70%" height="10" />
      </ContentLoader>
    </div>
    <div className="lg:col-span-4 flex flex-col items-start space-y-2">
      {Array.from({ length: 6 }).map((_, index) => (
        <ContentLoader
          key={index}
          speed={2}
          width={"100%"}
          height={50}
          viewBox="0 0 100% 50"
          backgroundColor="#373739"
          foregroundColor="#404042"
        >
          <rect x="0" y="0" rx="3" ry="3" width="100%" height="50" />
        </ContentLoader>
      ))}
    </div>
  </Container>
);

export default VideoPlayerLoader;
