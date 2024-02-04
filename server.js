import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import "express-async-errors";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { validateTest } from "./middleware/validationMiddleware.js";

dotenv.config();
const app = express();

//routers
import jobRouter from "./routes/jobRouter.js";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post(
  "/api/v1/test",
  
  validateTest,
  (req, res) => {
    const { name } = req.body;
    res.json({ message: `hello ${name}` });
  }
);

app.use("/api/v1/jobs", jobRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server is running on port ${port} ...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
