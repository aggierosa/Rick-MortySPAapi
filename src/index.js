import "dotenv/config";
import express from "express";
import { startDatabase } from "../src/database/index.js";
import userRouter from "./routes/users.routes.js";
import favoriteRouter from "./routes/favoriteCharacters.routes.js";

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/favorites", favoriteRouter);

app.get("/", (req, res) => {
  return res.send("Server running");
});

export default app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on 3000");
  startDatabase();
});
