import database from "../../database";

const seeProfileUserService = async (userId) => {
  try {
    const response = await database.query("SELECT * FROM users WHERE id = $1", [
      userId,
    ]);

    if (!response.rows.length) {
      throw new Error("User not found");
    }

    const { id, name, created_on } = response.rows[0];

    const user = {
      id,
      name,
      created_on,
    };

    return user;
  } catch (err) {
    throw new Error(err);
  }
};

export default seeProfileUserService;
