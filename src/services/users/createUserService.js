import * as bcrypt from "bcryptjs";

import dateNow from "../../utils/getDateUtil";
import database from "../../database";

const createUserService = async (name, password) => {
  if (!name.length) {
    throw new Error(err);
  }
  if (!password.length) {
    throw new Error(err);
  }

  const hashedPassword = await bcrypt.hash(password, 8);

  try {
    const response = await database.query(
      "SELECT * FROM users WHERE name = $1",
      [name]
    );

    if (response.rows.length) {
      throw new Error("User already exists");
    }

    const insertion = await database.query(
      "INSERT INTO users(name, password, created_on) VALUES($1, $2, $3) RETURNING *",
      [name, hashedPassword, dateNow()]
    );

    return insertion.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default createUserService;
