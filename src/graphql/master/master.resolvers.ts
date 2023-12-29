import mongoose from "mongoose";
import myData from "../../shivamResume";
import { IMaster } from "./master.interface";
import { Master } from "./master.schema";

export const queries = {
  getAllData: async () => await Master.find(),

  getCurrectEmployeeData: async (_parent: any, payload: Record<string, any>) =>
    await Master.findByCode(payload.code),
};

export const mutations = {
  employeePortfolioEntry: async (_parent: any, payload: { input: IMaster }) => {
    const result = new Master(payload.input);
    return await result.save();
  },

  updateEmployeePortfolio: async (
    _parent: any,
    payload: Record<string, any>
  ) => {
    const result = await Master.findOneAndUpdate(
      {
        "details.userCode": payload.code,
      },
      { $set: payload.input }
    );
    console.log("updated result", result);
    return "Successfully Updated!";
  },

  deleteEmployeePortfolio: async (
    _parent: any,
    payload: Record<string, any>
  ) => {
    const result = await Master.deleteOne({
      "details.userCode": payload.code,
    });
    if (result.deletedCount) return "Successfully deleted!";
    return "Not found";
  },

  insertEmployeeData: async () => {
    await Master.create(myData);
    return "Successfully Inserted!";
  },

  getProjectsBySkill: async (_parent: any, payload: Record<string, any>) => {
    const personalProjectData = await Master.aggregate([
      {
        $match: {
          "details.userCode": payload.input.code,
        },
      },
      {
        $unwind: "$details",
      },
      {
        $unwind: "$details.projects",
      },
      {
        $unwind: "$details.projects.personalProjectsDetails",
      },
      {
        $group: {
          _id: "$_id",
          personalProjects: {
            $push: {
              $cond: {
                if: {
                  $in: [
                    payload.input.skill,
                    "$details.projects.personalProjectsDetails.stackUsed",
                  ],
                },
                then: "$details.projects.personalProjectsDetails",
                else: null,
              },
            },
          },
        },
      },
      {
        $project: {
          personalProjects: {
            $filter: {
              input: "$personalProjects",
              as: "p",
              cond: {
                $ne: ["$$p", null],
              },
            },
          },
        },
      },
    ]);
    const professionalProjectData = await Master.aggregate([
      {
        $match: {
          "details.userCode": payload.input.code,
        },
      },
      {
        $unwind: "$details",
      },
      {
        $unwind: "$details.projects",
      },
      {
        $unwind: "$details.projects.professionalProjectsDetails",
      },
      {
        $group: {
          _id: "$_id",
          professionalProjects: {
            $push: {
              $cond: {
                if: {
                  $in: [
                    payload.input.skill,
                    "$details.projects.professionalProjectsDetails.stackUsed",
                  ],
                },
                then: "$details.projects.professionalProjectsDetails",
                else: null,
              },
            },
          },
        },
      },
      {
        $project: {
          professionalProjects: {
            $filter: {
              input: "$professionalProjects",
              as: "p",
              cond: {
                $ne: ["$$p", null],
              },
            },
          },
        },
      },
    ]);
    return {
      personal: personalProjectData[0]?.personalProjects,
      professional: professionalProjectData[0]?.professionalProjects,
    };
  },

  getProjects: async (_parent: any, payload: Record<string, any>) => {
    const { id, code, type } = payload.input;
    const aggregateString = [
      {
        $match: {
          "details.userCode": code,
        },
      },
      {
        $unwind: "$details",
      },
      {
        $unwind: "$details.projects",
      },
      {
        $unwind: `$details.projects.${
          type === "personal"
            ? "personalProjectsDetails"
            : "professionalProjectsDetails"
        }`,
      },
      {
        $group: {
          _id: "$_id",
          projects: {
            $push: {
              $cond: {
                if: {
                  $eq: [
                    `$details.projects.${
                      type === "personal"
                        ? "personalProjectsDetails"
                        : "professionalProjectsDetails"
                    }._id`,
                    new mongoose.Types.ObjectId(id),
                  ],
                },
                then: `$details.projects.${
                  type === "personal"
                    ? "personalProjectsDetails"
                    : "professionalProjectsDetails"
                }`,
                else: null,
              },
            },
          },
        },
      },
      {
        $project: {
          projects: {
            $filter: {
              input: "$projects",
              as: "p",
              cond: {
                $ne: ["$$p", null],
              },
            },
          },
        },
      },
    ];
    const projects = await Master.aggregate(aggregateString);
    console.dir(projects[0]?.projects[0], { depth: null });
    return projects[0]?.projects[0];
  },
};
