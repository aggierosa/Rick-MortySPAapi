import { AppDataSource } from "./../../data-source";
import { Request, Response } from "express";
import "express-async-errors";

import listFavoriteCharactersService from "../../services/favoriteCharacters/listFavoriteCharactersService";

const listFavoriteCharactersController = async (
  request: Request,
  response: Response
) => {
  const { userId } = request.params;

  const favorites = await listFavoriteCharactersService(userId);

  return response.status(200).json(favorites);
};

export default listFavoriteCharactersController;
