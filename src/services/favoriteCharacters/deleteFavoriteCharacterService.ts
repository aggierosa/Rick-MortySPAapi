import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { FavoriteList } from "../../models/Favorite";

const deleteFavoriteCharacterService = async (name: string, userId: string) => {
  const favoritesRepo = AppDataSource.getRepository(FavoriteList);

  const foundFavorite = await favoritesRepo.find({
    relations: ["user"],
    where: {
      user: {
        id: userId,
      },
      name: name,
    },
  });

  if (!foundFavorite) {
    throw new AppError("Character not found");
  }

  await favoritesRepo.delete(name);

  return true;
};

export default deleteFavoriteCharacterService;
