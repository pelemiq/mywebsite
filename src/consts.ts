import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Pepe Lemos",
  EMAIL: "pelemiq@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Explore My Portfolio and Discover My Projects",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked including roles and responsibilities.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links and descriptions.",
};

export const SOCIALS: Socials = [
  /*{ 
    NAME: "twitter-x",
    HREF: "https://twitter.com/markhorn_dev",
  },*/
  { 
    NAME: "github",
    HREF: "https://github.com/pelemiq"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/pelemiq/",
  }
];
