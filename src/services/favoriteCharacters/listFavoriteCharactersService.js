import database from "../../database";

const listFavoriteCharactersService = async (userId) => {
  try {
    const response = await database.query(
      "SELECT * FROM favorite_characters WHERE user_id = $1",
      [userId]
    );

    const favoriteCharacters = response.rows.map((row) => {
      const { name, photourl } = row;

      return {
        name,
        photourl,
      };
    });

    return favoriteCharacters;
  } catch (err) {
    throw new Error(err);
  }
};

export default listFavoriteCharactersService;
