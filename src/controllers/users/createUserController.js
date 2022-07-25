import createUserService from "../../services/users/createUserService";

const createUserController = async (request, response) => {
  const { name, password } = request.body;

  try {
    const newUser = await createUserService(name, password);

    return response.status(201).json(newUser);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default createUserController;
