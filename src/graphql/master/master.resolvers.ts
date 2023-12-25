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
};
