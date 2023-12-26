import { Model, Schema, connection, Document } from "mongoose";
import {
  IAbout,
  IContact,
  IDescription,
  IEmployeeDetails,
  IExperience,
  IExperienceDetails,
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

const companySchema = new Schema<IExperienceDetails>({
  employerName: {
    type: String,
  },
  employerLocation: {
    type: String,
  },
  endingData: {
    type: String,
  },
  joiningDate: {
    type: Date,
  },
  overview: {
    type: String,
  },
  points: [descriptionSchema],
  position: {
    type: String,
  },
  techStackLearned: [
    {
      type: String,
    },
  ],
});

const experienceSchema = new Schema<IExperience>({
  title: {
    type: String,
  },
  introduction: {
    type: String,
  },
  companies: companySchema,
});

const employeeDetailsSchema = new Schema<IEmployeeDetails>({
  name: {
    type: String,
  },
  dpUrl: {
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
  projects: projectSchema,
  experience: experienceSchema,
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
