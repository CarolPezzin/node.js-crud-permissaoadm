import users from "../database";

const updateUserService = (id, name, email) => {
  const userUpdate = {
    id,
    name,
    email,
    updated_at: Date(),
  };

  const userIndex = users.findIndex((elem) => elem.id === id);

  if (userIndex === -1) {
    return "User not found";
  }

  users[userIndex] = { ...users[userIndex], ...userUpdate };
  return users[userIndex];
};

export default updateUserService;
