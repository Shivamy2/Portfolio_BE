import { Model, Schema, connection, Document } from "mongoose";
import {
  IAbout,
  IContact,
  IDescription,
  IEmployeeDetails,
  IHome,
  IMaster,
  IMasterMethods,
  IProjectDetails,
  IProjects,
} from "./master.interface";

type MasterModel = Model<IMaster, {}, IMasterMethods>;

const descriptionSchema = new Schema<IDescription>({
  values: {
    type: String,
  },
  literals: [
    {
      type: String,
    },
  ],
});

const aboutSchema = new Schema<IAbout>({
  title: {
    type: String,
  },
  knowMeDescription: descriptionSchema,
  myIntroduction: descriptionSchema,
  skills: [
    {
      type: String,
    },
  ],
});

const homeSchema = new Schema<IHome>({
  typewriterText: {
    type: String,
  },
  description: {
    type: descriptionSchema,
  },
  socialLinks: {
    type: Object,
  },
});

const projectDetailsSchema = new Schema<IProjectDetails>({
  title: {
    type: String,
  },
  longDescription: descriptionSchema,
  shortDescription: descriptionSchema,
  stackUsed: [
    {
      type: String,
    },
  ],
  points: [descriptionSchema],
  overview: descriptionSchema,
  imageUrl: {
    type: String,
  },
  hostedUrl: {
    type: String,
  },
  pocUrl: {
    type: String,
  },
});

const projectSchema = new Schema<IProjects>({
  title: {
    type: String,
  },
  introduction: descriptionSchema,
  personalProjectsDetails: [projectDetailsSchema],
  professionalProjectsDetails: [projectDetailsSchema],
});

const contactSchema = new Schema<IContact>({
  title: {
    type: String,
  },
  introduction: descriptionSchema,
  name: {
    type: String,
  },
  message: {
    type: String,
  },
  email: {
    type: String,
  },
});

const employeeDetailsSchema = new Schema<IEmployeeDetails>({
  name: {
    type: String,
  },
  userCode: {
    type: Number,
  },
  about: {
    type: aboutSchema,
  },
  home: {
    type: homeSchema,
  },
  projects: [
    {
      type: projectSchema,
    },
  ],
  contact: contactSchema,
});

const masterSchema = new Schema<IMaster, MasterModel, IMasterMethods>({
  headerOptions: [
    {
      type: String,
    },
  ],
  details: [
    {
      type: employeeDetailsSchema,
    },
  ],
});

masterSchema.statics.findByCode = async (code: number) => {
  const data = await Master.find({ "details.userCode": code });
  console.log("Entered into findbycode", data);
  return data;
};

export const Master = connection.model<IMaster, IMasterMethods>(
  "ruleEngine",
  masterSchema
);
