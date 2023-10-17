import RoleModel from "../models/role";
import EducationLevelModel from "../models/educationLevel";

 const createRoles = async () => {
    try {
        const count = await RoleModel.estimatedDocumentCount();
        if (count > 0) return;

        const values = await Promise.all([
            new RoleModel({ name: "user" }).save(),
            new RoleModel({ name: "moderator" }).save(),
            new RoleModel({ name: "admin" }).save()
        ]);
    } catch (error) {
        console.error(error);
    }
 }

 const createEducationLevels = async () => {
     try {
         const count = await EducationLevelModel.estimatedDocumentCount();
         if (count > 0) return;

         const values = await Promise.all([
             new EducationLevelModel({ name: "Primary", description: "Primary Education", status: true }).save(),
             new EducationLevelModel({ name: "Secondary", description: "Secondary Education", status: true }).save(),
             new EducationLevelModel({ name: "High School", description: "High School Education", status: true }).save(),
             new EducationLevelModel({ name: "Undergraduate", description: "Undergraduate Education", status: true }).save(),
             new EducationLevelModel({ name: "Postgraduate", description: "Postgraduate Education", status: true }).save(),
             new EducationLevelModel({ name: "Doctorate", description: "Doctorate Education", status: true }).save(),
            ]);
        } catch (error) {
            console.error(error);
     }
 }

 export {
     createRoles,
     createEducationLevels
 }