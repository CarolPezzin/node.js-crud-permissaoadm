import listProfileUserService from "../services/listProfileUser.services";

const listProfileUserController = (request, response) => {
  const user = listProfileUserService();

  return response.json(user);
};

export default listProfileUserController;
