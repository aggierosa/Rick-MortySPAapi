import * as bcrypt from "bcryptjs";

import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { User } from "../../models/User";

const createUserService = async (name: string, password: string) => {
  const userRepo = AppDataSource.getRepository(User);

  const users = await userRepo.find();

  const existingUser = users.find((user) => user.name === name);

  if (existingUser) {
    throw new AppError("User already registered", 409);
  }

  const hashedPassword = await bcrypt.hash(password, 6);

  const now = new Date();

  const user = new User();
  user.name = name;
  user.password = hashedPassword;
  user.created_on = now;

  userRepo.create(user);
  await userRepo.save(user);

  return user;
};

export default createUserService;
