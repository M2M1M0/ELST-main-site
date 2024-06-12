import Container from "@/components/container";

const year = new Date().getFullYear();
const Copyright = () => {
  const data = {
    name: "Eagle Legends",
    websiteUrl: "https://www.eaglelionsystems.com/",
  };

  return (
    <div className="pb-7">
      <Container>
        <div className="flex justify-center pt-6 text-center border-t border-white/50 lg:pt-3">
          <p className="text-white/60 text-xs">
            Copyright&nbsp;
            &copy;&nbsp;Eagle Lion System Technology. {year}&nbsp;
            <a
              className="transition-colors duration-200 ease-in-out text-white/60 hover:text-brand"
              href={data.websiteUrl}
            >
              {data.name}
            </a>
            &nbsp; All rights reserved
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Copyright;
