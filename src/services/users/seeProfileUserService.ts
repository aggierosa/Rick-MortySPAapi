import { User } from "./../../models/User";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";

const userShowService = async (userId: string) => {
  const userRepo = AppDataSource.getRepository(User);

  const users = await userRepo.find();

  const foundUser = users.find((user) => user.id === userId);

  if (!foundUser) {
    throw new AppError("User not found");
  }

  return foundUser;
};

export default userShowService;
