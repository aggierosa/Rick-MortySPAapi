import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { FavoriteList } from "../../models/Favorite";
import { User } from "../../models/User";

const createFavoriteCharacterService = async (
  name: string,
  photoUrl: string,
  userId: string
) => {
  if (!name || !photoUrl || !userId) {
    throw new AppError("You must send name, photo url and user id");
  }

  const favoritesRepo = AppDataSource.getRepository(FavoriteList);

  const favorites = await favoritesRepo.find();

  const existingFavorite = favorites.find((favorite) => favorite.name === name);

  console.log(existingFavorite);

  if (existingFavorite) {
    throw new AppError("This character is already a favorite");
  }

  const userRepo = AppDataSource.getRepository(User);

  const foundUser = await userRepo.findOneBy({ id: userId });

  if (!foundUser) {
    throw new AppError("User not found");
  }

  const favorite = new FavoriteList();

  favorite.name = name;
  favorite.photourl = photoUrl;
  favorite.user = foundUser;

  favoritesRepo.create(favorite);
  await favoritesRepo.save(favorite);

  return favorite;
};

export default createFavoriteCharacterService;
