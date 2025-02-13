import { Project, knownTech } from "./projects";
import type { RichTextContent } from "@graphcms/rich-text-types";
import { WorkExperience } from "./workeExperince";

export type Social = {
  url: string;
  iconSvg: string;
};

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent;
  };
  profilePickter: {
    url: string;
  };
  social: Social[];

  technology: knownTech[];

  knownTechs: knownTech[];
  project: Project[];
};

export type ProjectsPageData = {
  projects: Project[];
};

export type ProjectPageInfo = {
  project: Project;
};

export type HomePageData = {
  page: HomePageInfo;
  workExperiences: WorkExperience[];
};
