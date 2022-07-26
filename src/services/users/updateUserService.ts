import { AppDataSource } from "../../data-source";
import { User } from "../../models/User";
import AppError from "../../errors/AppError";

import * as bcrypt from "bcryptjs";

const updateUserService = async (
  userId: string,
  name: string,
  password: string
) => {
  const userRepo = AppDataSource.getRepository(User);

  const users = await userRepo.find();

  const foundUser = users.find((user) => user.id === userId);

  if (!foundUser) {
    throw new AppError("User not found");
  }

  const newPassword = await bcrypt.hash(password, 6);

  await userRepo.update(foundUser!.id, {
    name: name,
    password: newPassword,
  });

  return foundUser;
};

export default updateUserService;
