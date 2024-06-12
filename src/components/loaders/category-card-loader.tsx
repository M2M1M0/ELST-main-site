import ContentLoader from "react-content-loader";

const CategoryCardLoader = (props: any) => (
  <ContentLoader
    speed={2}
    width={226}
    height={320}
    viewBox="0 0 226 320"
    backgroundColor="#373739"
    foregroundColor="#404042"
    className="w-full h-auto shadow-card rounded-md overflow-hidden"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="226" height="285" />
    {/* <rect x="0" y="203" rx="3" ry="1" width="79" height="8" />
    <rect x="0" y="236" rx="3" ry="0" width="195" height="5" />
    <rect x="0" y="258" rx="3" ry="0" width="100" height="5" /> */}
  </ContentLoader>
);

export default CategoryCardLoader;
