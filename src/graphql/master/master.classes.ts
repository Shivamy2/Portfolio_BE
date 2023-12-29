import moment from "moment";
import { IMaster } from "./master.interface";

export class CMaster {
  totalExperiece(this: IMaster) {
    let count = {
      years: 0,
      months: 0,
    };
    this.details?.map((data) => {
      const experiences = data.experience?.companies;
      experiences?.map((experience) => {
        const joiningDate = experience.joiningDate;
        const endingDate = experience.endingDate;
        let diff;
        if (endingDate === "Present") {
          diff = moment(moment().format("DD/MM/YYYY"), "DD/MM/YYYY").diff(
            moment(joiningDate, "DD/MM/YYYY")
          );
        } else {
          diff = moment(endingDate, "DD/MM/YYYY").diff(
            moment(joiningDate, "DD/MM/YYYY")
          );
        }
        const duration = moment.duration(diff);
        count.years += duration.years();
        count.months += duration.months();
      });
    });
    return count;
  }
}
