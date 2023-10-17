import { config } from "dotenv";
config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/express-mongo";

const SECRET = process.env.JWT_SECRET || "secret";

export { 
    PORT, 
    MONGO_URI,
    SECRET
}