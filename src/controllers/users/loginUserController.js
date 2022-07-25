import loginUserService from "../../services/users/loginUserService";

const loginUserController = async (request, response) => {
  const { name, password } = request.body;

  try {
    const userLogin = await loginUserService(name, password);

    return response.status(200).json(userLogin);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default loginUserController;
