import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { User } from "../../models/User";

const deleteUserService = async (userId: string) => {
  const userRepo = AppDataSource.getRepository(User);

  const users = await userRepo.find();

  const foundUser = users.find((user) => user.id === userId);

  if (!foundUser) {
    throw new AppError("User not found");
  }

  await userRepo.delete(foundUser!.id);

  return true;
};

export default deleteUserService;
