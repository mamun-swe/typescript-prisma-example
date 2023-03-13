import express, { Express, NextFunction, Response, Request } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();
import { router } from "./routes";

export const app: Express = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Root route */
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json("Welcome to Typescript & Prisma ORM example app.");
});

app.use("/api/posts", router);
