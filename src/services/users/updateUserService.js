import database from "../../database";

import * as bcrypt from "bcryptjs";

const updateUserService = async (userId, name, password) => {
  try {
    const response = await database.query("SELECT * FROM users WHERE id = $1", [
      userId,
    ]);

    if (!response.rows.length) {
      throw new Error("User not found");
    }

    const newPassword = await bcrypt.hash(password, 8);

    const updatedUser = await database.query(
      "UPDATE users SET name = $1, password = $2 WHERE id = $3 RETURNING *",
      [name, newPassword, userId]
    );

    return updatedUser.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default updateUserService;
