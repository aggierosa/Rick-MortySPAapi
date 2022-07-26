import { Request, Response } from "express";
import "express-async-errors";
import deleteUserService from "../../services/users/deleteUserService";

const deleteUserController = async (request: Request, response: Response) => {
  const { userId } = request.params;

  const deleteUser = await deleteUserService(userId);

  return response.status(200).json(deleteUser);
};

export default deleteUserController;
