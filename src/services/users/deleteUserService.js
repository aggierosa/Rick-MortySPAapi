import database from "../../database";

const deleteUserService = async (userId) => {
  try {
    const response = await database.query("SELECT * FROM users WHERE id = $1", [
      userId,
    ]);

    if (!response.rows.length) {
      throw new Error("User not found");
    }

    await database.query("DELETE FROM users WHERE id = $1", [userId]);
  } catch (err) {
    throw new Error(err);
  }
};

export default deleteUserService;
