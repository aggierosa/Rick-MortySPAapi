import { Request, Response } from "express";
import "express-async-errors";
import updateUserService from "../../services/users/updateUserService";

const updateUserController = async (request: Request, response: Response) => {
  const { userId } = request.params;
  const { name, password } = request.body;

  const updatedUser = await updateUserService(userId, name, password);

  return response.status(200).json(updatedUser);
};

export default updateUserController;
