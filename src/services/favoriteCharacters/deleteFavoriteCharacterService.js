import database from "../../database";

const deleteFavoriteCharacterService = async (name, userId) => {
  try {
    const response = await database.query(
      "SELECT * FROM favorite_characters WHERE name = $1 AND user_id = $2",
      [name, userId]
    );

    if (!response.rows.length) {
      throw new Error("Favorite character not found");
    }

    await database.query(
      "DELETE FROM favorite_characters WHERE name = $1 AND user_id = $2",
      [name, userId]
    );
  } catch (err) {
    throw new Error(err);
  }
};

export default deleteFavoriteCharacterService;
