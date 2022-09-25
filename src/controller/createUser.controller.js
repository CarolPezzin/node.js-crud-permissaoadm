import createUserService from "../services/createUser.services";

const createUserController = async (request, response) => {
  const { email, name, password, isAdmin } = request.body;

  const user = await createUserService({email, name, password, isAdmin});

  return response.json(user);
};

export default createUserController;
