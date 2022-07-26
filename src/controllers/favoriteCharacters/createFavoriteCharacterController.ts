import { AppDataSource } from "./../../data-source";
import { Request, Response } from "express";
import "express-async-errors";

import createFavoriteCharacterService from "../../services/favoriteCharacters/createFavoriteCharacterService";

const createFavoriteCharacterController = async (
  request: Request,
  response: Response
) => {
  const { name, photoUrl } = request.body;
  const { userId } = request.params;

  const newFavorite = await createFavoriteCharacterService(
    name,
    photoUrl,
    userId
  );

  return response.status(201).json(newFavorite);
};

export default createFavoriteCharacterController;
