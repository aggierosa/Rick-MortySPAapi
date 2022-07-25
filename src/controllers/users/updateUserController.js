import updateUserService from "../../services/users/updateUserService";

const updateUserController = async (request, response) => {
  const { userId } = request.params;
  const { name, password } = request.body;

  try {
    const updatedUser = await updateUserService(userId, name, password);

    return response.status(200).json(updatedUser);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default updateUserController;
