import { Request, Response } from "express";
import "express-async-errors";
import { json } from "stream/consumers";
import loginUserService from "../../services/users/loginUserService";

const loginUserController = async (request: Request, response: Response) => {
  const { name, password } = request.body;

  const userLogin = await loginUserService(name, password);

  return response.status(200).json(userLogin);
};

export default loginUserController;
