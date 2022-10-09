import userLoginService from "../services/userLogin.services";

const userLoginController = async (request, response) => {
  const { email, password } = request.body;

  try {
    const userToken = await userLoginService(email, password);
    return response.json(userToken);
  } catch (error) {
    return response.status(400).json(error.message);
  }
};

export default userLoginController;
