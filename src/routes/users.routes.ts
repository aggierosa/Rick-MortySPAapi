import { Router } from "express";

import createUserController from "../controllers/users/createUserController";
import updateUserController from "../controllers/users/updateUserController";
import deleteUserController from "../controllers/users/deleteUserController";
import seeProfileController from "../controllers/users/seeProfileUserController";
import loginUserController from "../controllers/users/loginUserController";
import authCheckMiddleware from "../middlewares/authCheckMiddleWare";

const userRouter = Router();

userRouter.post("/", createUserController);
userRouter.post("/login", loginUserController);

userRouter.get("/:userId", authCheckMiddleware, seeProfileController);

userRouter.patch("/:userId", authCheckMiddleware, updateUserController);
userRouter.delete("/:userId", authCheckMiddleware, deleteUserController);

export default userRouter;
