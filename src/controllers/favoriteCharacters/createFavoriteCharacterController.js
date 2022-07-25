import createFavoriteCharacterService from "../../services/favoriteCharacters/createFavoriteCharacterService";

const createFavoriteCharacterController = async (request, response) => {
  const { name, photoUrl } = request.body;
  const { userId } = request.params;

  try {
    const newFavorite = await createFavoriteCharacterService(
      name,
      photoUrl,
      userId
    );

    return response.status(201).json(newFavorite);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default createFavoriteCharacterController;
