import deleteFavoriteCharacterService from "../../services/favoriteCharacters/deleteFavoriteCharacterService";

const deleteFavoriteCharacterController = async (request, response) => {
  const { name } = request.body;
  const { userId } = request.params;

  try {
    const deleteFavorite = await deleteFavoriteCharacterService(name, userId);

    return response.status(200).json(deleteFavorite);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default deleteFavoriteCharacterController;
