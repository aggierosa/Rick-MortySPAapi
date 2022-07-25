import database from "../../database";

const createFavoriteCharacterService = async (name, photoUrl, userId) => {
  if (!name | !photoUrl | !userId) {
    throw new Error(err);
  }

  try {
    const response = await database.query(
      "SELECT * FROM favorite_characters WHERE name = $1 AND user_id = $2",
      [name, userId]
    );

    if (response.rows.length) {
      throw new Error("Character is already a favorite");
    }

    const insertion = await database.query(
      "INSERT INTO favorite_characters(name, photoUrl, user_id) VALUES($1, $2, $3) RETURNING *",
      [name, photoUrl, userId]
    );

    return insertion.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default createFavoriteCharacterService;
