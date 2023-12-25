import { Model, Document } from "mongoose";

export interface IDescription {
  values: string;
  literals: string[];
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
  skills: string[];
}

export interface IProjectDetails {
  title: string;
  shortDescription: IDescription;
  longDescription: IDescription;
  overview: IDescription;
  points: IDescription[];
  stackUsed: string[];
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
  email: string;
  name: string;
  message: string;
}

export interface IEmployeeDetails {
  name: string;
  userCode: number;
  home: IHome;
  about: IAbout;
  contact: IContact;
  projects: IProjects;
}

export interface IMaster {
  headerOptions: string[];
  details: IEmployeeDetails[];
}

export interface IMasterMethods extends Model<Document> {
  findByCode(code: number): () => void;
}
