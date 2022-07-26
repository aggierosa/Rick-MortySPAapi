import Jwt from "jsonwebtoken";

import { AppDataSource } from "../../data-source";
import { User } from "../../models/User";

import * as bcrypt from "bcryptjs";
import AppError from "../../errors/AppError";

const loginUserService = async (name: string, password: string) => {
  const userRepo = AppDataSource.getRepository(User);

  const users = await userRepo.find();

  const foundUser = users.find((user) => user.name === name);

  if (!foundUser) {
    throw new AppError("User not found");
  }

  const passwordMatch = await bcrypt.compare(password, foundUser.password);

  if (!passwordMatch) {
    throw new Error("Invalid email or password");
  }

  const token = Jwt.sign({ name: name }, "SECRET_KEY", { expiresIn: "24h" });

  return { token };
};

export default loginUserService;
