import { AppDataSource } from "./../../data-source";
import { Request, Response } from "express";
import "express-async-errors";

import deleteFavoriteCharacterService from "../../services/favoriteCharacters/deleteFavoriteCharacterService";

const deleteFavoriteCharacterController = async (
  request: Request,
  response: Response
) => {
  const { name } = request.body;
  const { userId } = request.params;

  const deleteFavorite = await deleteFavoriteCharacterService(name, userId);

  return response.json(deleteFavorite);
};

export default deleteFavoriteCharacterController;
