import createUserService from "../services/createUser.services";

const createUserController = async (request, response) => {
  const { email, name, password } = request.body;
  console.log(request.body);

  try {
    const user = await createUserService(email, name, password);

    return response.status(201).json(user);
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
};

export default createUserController;
