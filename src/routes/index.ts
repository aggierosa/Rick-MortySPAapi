import { Router } from "express";
import favoriteRouter from "./favoriteCharacters.routes";
import userRouter from "./users.routes";

const routes = Router();

routes.use("/favorites", favoriteRouter);
routes.use("/users", userRouter);

export default routes;
