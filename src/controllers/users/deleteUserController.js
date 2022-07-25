import deleteUserService from "../../services/users/deleteUserService";

const deleteUserController = async (request, response) => {
  const { userId } = request.params;

  try {
    const deleteUser = await deleteUserService(userId);

    return response.status(200).json(deleteUser);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default deleteUserController;
