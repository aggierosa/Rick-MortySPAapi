import "reflect-metadata";
import express from "express";
import { Request, Response, NextFunction } from "express";
import "express-async-errors";
import routes from "./routes";
import AppError from "./errors/AppError";
import cors from "cors";

const app = express();

var corsOptions = {
  origin: "https://sparmapi.herokuapp.com",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

export default app;
