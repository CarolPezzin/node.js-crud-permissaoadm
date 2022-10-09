import listUserService from "../services/listUser.services";

const listUserController = async (request, response) => {
  try {
    const user = await listUserService();

    return response.json(user);
  } catch (error) {
    return response.status(400).json(error.message);
  }
};

export default listUserController;
