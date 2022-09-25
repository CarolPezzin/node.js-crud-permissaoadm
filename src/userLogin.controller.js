import userLoginService from "../services/userLogin.services";

const userLoginController = (request, response) => {
  const { email, password } = request.body;

  const userLogin = userLoginService(email, password);

  return response.json(userLogin);
};

export default userLoginController;
