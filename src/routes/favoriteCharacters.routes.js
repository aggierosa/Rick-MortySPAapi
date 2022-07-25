import { Router } from "express";

import createFavoriteCharacterController from "../controllers/favoriteCharacters/createFavoriteCharacterController";
import deleteFavoriteCharacterController from "../controllers/favoriteCharacters/deleteFavoriteCharacterController";
import listFavoriteCharactersController from "../controllers/favoriteCharacters/listFavoriteCharactersController";
import authCheckMiddleware from "../middlewares/authCheckMiddleWare";

const favoriteRouter = Router();

favoriteRouter.post(
  "/:userId",
  authCheckMiddleware,
  createFavoriteCharacterController
);

favoriteRouter.get(
  "/:userId",
  authCheckMiddleware,
  listFavoriteCharactersController
);

favoriteRouter.delete(
  "/:userId",
  authCheckMiddleware,
  deleteFavoriteCharacterController
);

export default favoriteRouter;
