import { Request, Response } from "express";
import "express-async-errors";
import createUserService from "../../services/users/createUserService";

const createUserController = async (request: Request, response: Response) => {
  const { name, password } = request.body;

  const newUser = await createUserService(name, password);

  return response.json(newUser);
};

export default createUserController;
