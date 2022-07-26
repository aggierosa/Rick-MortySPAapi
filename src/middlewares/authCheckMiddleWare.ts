import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authCheckMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  let token = <string>request.headers["auth"];
  let jwtPayload;

  try {
    jwtPayload = <any>jwt.verify(token, "SECRET_KEY");
    response.locals.jwtPayload = jwtPayload;
  } catch (error) {
    response.status(401).send();
    return;
  }

  const { userId, username } = jwtPayload;
  const newToken = jwt.sign({ userId, username }, "SECRET_KEY", {
    expiresIn: "12h",
  });
  response.setHeader("token", newToken);

  next();
};

export default authCheckMiddleware;
