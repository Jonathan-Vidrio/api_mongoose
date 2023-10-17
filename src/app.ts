import express from "express";
import cors from "cors";
import { PORT } from "./config/config";
import "./config/database";
import { router } from "./api/routes";
import * as initial from "./api/libs/initialSetup";

// Initializations
const app = express();
initial.createRoles();
initial.createEducationLevels();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", router);

// Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});