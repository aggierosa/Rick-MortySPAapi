import { AppDataSource } from "../../data-source";
import { FavoriteList } from "../../models/Favorite";
import { User } from "../../models/User";

const listFavoriteCharactersService = async (userId: string) => {
  const favoritesRepo = AppDataSource.getRepository(FavoriteList);

  const favorites = await favoritesRepo.find({
    relations: ["user"],
    where: {
      user: {
        id: userId,
      },
    },
  });

  return favorites;
};

export default listFavoriteCharactersService;
