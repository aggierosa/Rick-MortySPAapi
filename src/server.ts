import app from "./app";
import { AppDataSource } from "./data-source";

(async () => {
  await AppDataSource.initialize().catch((err) =>
    console.error("Error during initialization", err)
  );

  const swaggerUi = require("swagger-ui-express");
  const swaggerFile = require("../swagger_output.json");

  app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

  app.listen(process.env.PORT || 3000, () => {
    console.log("Server running at port 3000");
  });
})();
