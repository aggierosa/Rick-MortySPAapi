import seeProfileUserService from "../../services/users/seeProfileUserService";

const seeProfileController = async (request, response) => {
  const { userId } = request.params;

  try {
    const userProfile = await seeProfileUserService(userId);

    return response.status(200).json(userProfile);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default seeProfileController;
