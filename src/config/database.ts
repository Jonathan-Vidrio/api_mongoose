import mongoose from "mongoose";
import { MONGO_URI } from "./config";

const main = async () => {
    await mongoose.connect(MONGO_URI)
    .then(db => console.log("DB is connected"))
    .catch(err => console.log(err));
}

main();
