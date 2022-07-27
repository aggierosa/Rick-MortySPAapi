import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import request from "supertest";
import app from "../../app";

describe("Testing success - Routes", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => console.error("Error during initialization", err));
  });

  afterAll(async () => {
    await connection.destroy();
  });

  let userData = {
    id: "",
    name: "John",
    password: "1234",
  };

  let secondUserData = {
    id: "",
    name: "Johanna",
    password: "1234",
  };

  let userLoginData = {
    name: "John",
    password: "1234",
  };

  let secondUserLoginData = {
    name: "Johanna",
    password: "1234",
  };

  let favoriteToAdd = {
    id: "",
    name: "Jonnas",
    photourl: "url1234",
  };

  test("Should be able to create a new user", async () => {
    const response = await request(app).post("/users").send(userData);

    expect(response.status).toBe(200);

    expect(response.body).toHaveProperty("id");
  });

  test("Should be able to login and return a token", async () => {
    const response = await request(app)
      .post("/users/login")
      .send(userLoginData);

    expect(response.body).toHaveProperty("token");
  });

  test("Should be able to create a new favorite", async () => {
    const response = await request(app).post("/users").send(secondUserData);

    let userId = response.body.id;

    const responseLogin = await request(app)
      .post("/users/login")
      .send(secondUserLoginData);

    let userToken = responseLogin.body.token;

    const responseFavorite = await request(app)
      .post(`/favorites/${userId}`)
      .send(favoriteToAdd)
      .set("Authorization", `${userToken}`);

    expect(responseFavorite.status).toBe(200);

    expect(response.body).toHaveProperty("id");
  });
});
