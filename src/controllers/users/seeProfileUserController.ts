import { Request, Response } from "express";
import "express-async-errors";
import seeProfileUserService from "../../services/users/seeProfileUserService";

const seeProfileController = async (request: Request, response: Response) => {
  const { userId } = request.params;

  const userProfile = await seeProfileUserService(userId);

  return response.status(200).json(userProfile);
};

export default seeProfileController;
