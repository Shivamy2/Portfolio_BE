import { Model, Document } from "mongoose";

export enum ESkills {
  HTML = "html",
  CSS = "css",
  STYLING = "tailwindcss/bootstrap/materialui",
  JS = "javascript",
  TS = "typescript",
  REACT = "react",
  REACT_SIDEWAYS = "redux/thunk/saga",
  SEO = "seo",
  AWS = "aws lambda/serverless/sqs",
  BE = "nodejs/expressjs",
  GRAPHQL = "graphql",
  DB_NO_SQL = "mongodb/mongoose",
  DB_SQL = "postgres/sequelize",
  STORYBOOK = "storybookjs",
  HOST = "git/github",
  TERMINAL = "terminal",
  SPRINGBOOT = "springboot",
  MOBILE = "flutter",
  AZURE = "azure"
}

export enum ELiterals {
  LINK = "l",
  BOLD = "b",
  ITALIC = "i",
}
export interface IDescription {
  values: string;
  literals?: string[][];
}

export interface ISocialLinks {
  [social: string]: string;
}

export interface IHome {
  typewriterText: string;
  description: IDescription;
  socialLinks: ISocialLinks;
}

export interface IAbout {
  title: string;
  myIntroduction: IDescription;
  knowMeDescription: IDescription;
  skills: ESkills[];
}

export interface IProjectDetails {
  title: string;
  shortDescription: IDescription;
  longDescription?: IDescription;
  overview: IDescription;
  points: IDescription[];
  stackUsed: ESkills[];
  imageUrl: string;
  pocUrl: string;
  hostedUrl: string;
}

export interface IProjects {
  title: string;
  introduction: IDescription;
  personalProjectsDetails: IProjectDetails[];
  professionalProjectsDetails: IProjectDetails[];
}

export interface IContact {
  title: string;
  introduction: IDescription;
  email?: string;
  name?: string;
  message?: string;
}

export interface ICertificates {
  title: string;
  description: IDescription;
  link: string;
  date: Date;
}

export interface IExperienceDetails {
  employerName: string;
  employerLocation: string;
  position: string;
  joiningDate: Date;
  endingData: Date | "Present";
  overview: IDescription;
  points: IDescription[];
  techStackLearned: ESkills[];
}
export interface IExperience {
  title: string;
  introduction: string;
  companies: IExperienceDetails[];
}

export interface IEmployeeDetails {
  name: string;
  dpUrl: string;
  userCode: number;
  home: IHome;
  about: IAbout;
  contact: IContact;
  projects: IProjects;
  experience: IExperience;
  certification: ICertificates;
}

export interface IMaster {
  headerOptions: string[];
  details: IEmployeeDetails[];
}

export interface IMasterMethods extends Model<Document> {
  findByCode(code: number): () => void;
}
