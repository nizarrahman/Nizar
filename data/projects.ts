import { ProjectType } from "@/types/project";
const js = {
  name: "javascript",
};
const react = {
  name: "react",
};
const nextjs = {
  name: "nextjs",
  url: "https://nextjs.org/",
};
const chakra = {
  name: "chakra-ui",
  url: "https://chakra-ui.com/",
};
const project: ProjectType[] = [
  {
    title: "PkDx",
    image: require("public/projects/smm.jpeg"),
    description:
      "Web Membeli Followers/subsribeer.",
    createdAt: "2021-12-02",
    technology: [js, react, { name: "graphql" }, { name: "emotion-css" }],
    url: "https://naistore.site",
    source: "https://wa.me/6281386945391",
  }
];

export default project;
