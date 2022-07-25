import Jwt from "jsonwebtoken";

import database from "../../database";

import * as bcrypt from "bcryptjs";

const loginUserService = async (name, password) => {
  try {
    const response = await database.query(
      "SELECT * FROM users WHERE name = $1",
      [name]
    );

    if (!response.rows.length) {
      throw new Error("Invalid email or password");
    }

    const [user] = response.rows;

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Invalid email or password");
    }

    const token = Jwt.sign({ name: name }, "SECRET_KEY", { expiresIn: "24h" });

    return { token };
  } catch (err) {
    throw new Error(err);
  }
};

export default loginUserService;
