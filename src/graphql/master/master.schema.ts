import { Model, Schema, connection, Document } from "mongoose";
import {
  IAbout,
  ICertificateDetails,
  ICertificates,
  IContact,
  IDescription,
  IEmployeeDetails,
  IExperience,
  IExperienceDetails,
  IHome,
  // ILiterals,
  IMaster,
  IMasterMethods,
  IProjectDetails,
  IProjects,
  ITheme,
} from "./master.interface";
import { CMaster } from "./master.classes";

type MasterModel = Model<IMaster, {}, IMasterMethods>;

const descriptionSchema = new Schema<IDescription>({
  values: {
    type: String,
  },
  literals: [
    [
      {
        type: String,
      },
    ],
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

// const literalsSchema = new Schema<ILiterals>({
//   label: {
//     type: String,
//   },
//   value: {
//     type: String,
//   },
//   link: {
//     type: String,
//   },
// });

const companySchema = new Schema<IExperienceDetails>({
  employerName: {
    type: String,
  },
  employerLocation: {
    type: String,
  },
  endingDate: {
    type: String,
  },
  joiningDate: {
    type: String,
  },
  overview: descriptionSchema,
  points: [descriptionSchema],
  position: {
    type: String,
  },
  techStackLearned: [{ type: String }],
});

const experienceSchema = new Schema<IExperience>({
  title: {
    type: String,
  },
  introduction: {
    type: String,
  },
  companies: [companySchema],
});

const certificateDetailsSchema = new Schema<ICertificateDetails>({
  name: {
    type: String,
  },
  overview: descriptionSchema,
  date: {
    type: String,
  },
  link: {
    type: String,
  },
  skills: [{ type: String }],
});

const certificateSchema = new Schema<ICertificates>({
  title: {
    type: String,
  },
  shortDescription: descriptionSchema,
  details: [certificateDetailsSchema],
});

const themeSchema = new Schema<ITheme>({
  primaryDark: {
    type: String,
  },
  primaryLight: {
    type: String,
  },
  onPrimary: {
    type: String,
  },
  secondaryDark: {
    type: String,
  },
  secondaryLight: {
    type: String,
  },
  onSecondary: {
    type: String,
  },
  hero: {
    type: String,
  },
});

const employeeDetailsSchema = new Schema<IEmployeeDetails>({
  name: {
    type: String,
  },
  introduction: descriptionSchema,
  dpUrl: {
    type: String,
  },
  userCode: {
    type: String,
    unique: true,
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
  certification: certificateSchema,
  theme: themeSchema,
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

masterSchema.loadClass(CMaster);

masterSchema.statics.findByCode = async (code: string) =>
  await Master.find({ "details.userCode": code });

export const Master = connection.model<IMaster, IMasterMethods>(
  "ruleEngine",
  masterSchema
);
