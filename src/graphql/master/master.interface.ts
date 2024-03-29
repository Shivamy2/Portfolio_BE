import { Model, Document } from "mongoose";

export enum ESkills {
  HTML = "html",
  CSS = "css",
  STYLING = "tailwindcss",
  MATERIALUI = "materialUI",
  JS = "javascript",
  TS = "typescript",
  REACT = "react",
  REACT_SIDEWAYS = "redux",
  SAGA = "thunk/saga",
  SEO = "seo",
  AWS = "serverless",
  BE = "nodejs",
  GRAPHQL = "graphql",
  DB_NO_SQL = "mongodb",
  DB_SQL = "postgres",
  STORYBOOK = "storybookjs",
  HOST = "git/github",
  TERMINAL = "terminal",
  SPRINGBOOT = "springboot",
  MOBILE = "flutter",
  AZURE = "azure",
  JAVA = "java",
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

export interface ICertificateDetails {
  name: string;
  overview: IDescription;
  link: string;
  date: string;
  skills: ESkills[];
}
export interface ICertificates {
  title: string;
  shortDescription: IDescription;
  details: ICertificateDetails[];
}

export interface IExperienceDetails {
  employerName: string;
  employerLocation: string;
  position: string;
  joiningDate: string;
  endingDate: string;
  overview: IDescription;
  points: IDescription[];
  techStackLearned: ESkills[];
}
export interface IExperience {
  title: string;
  introduction: string;
  companies: IExperienceDetails[];
}

export interface ITheme {
  primaryDark: string;
  primaryLight: string;
  onPrimary: string;
  secondaryDark: string;
  secondaryLight: string;
  onSecondary: string;
  hero: string;
}

export interface IEmployeeDetails {
  name: string;
  email: string;
  mobile: string;
  resumeLink: string;
  introduction: IDescription;
  dpUrl: string;
  userCode: string;
  home: IHome;
  about: IAbout;
  contact: IContact;
  projects: IProjects;
  experience: IExperience;
  certification: ICertificates;
  theme: ITheme;
}

export interface IMaster {
  headerOptions: string[];
  details: IEmployeeDetails[];
}

export interface IMasterMethods extends Model<Document> {
  findByCode(code: string): () => void;
}
