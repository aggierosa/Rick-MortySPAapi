import listFavoriteCharactersService from "../../services/favoriteCharacters/listFavoriteCharactersService";

const listFavoriteCharactersController = async (request, response) => {
  const { userId } = request.params;

  try {
    const favorites = await listFavoriteCharactersService(userId);

    return response.json(favorites);
  } catch (err) {
    return response.status(400).json(err);
  }
};

export default listFavoriteCharactersController;
