import listUserService from "../services/listUser.services";

const listUserController = (request, response) => {
  const user = listUserService();

  return response.json(user);
};

export default listUserController;
