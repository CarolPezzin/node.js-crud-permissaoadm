import database from "../database";

const updateUserService = async (id, name, email) => {

  try {
    const res = await database.query(
      "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
      [name, email, id]
    )

    if(res.rows.length === 0){
      throw "Ups, wrong user."
    }
    return {message: "User Updated", user: res.rows[0]}
  
  } catch (error) {
    throw new Error(error)
  }
  // const userUpdate = {
  //   id,
  //   name,
  //   email,
  //   updated_at: Date(),
  // };

  // const userIndex = users.findIndex((elem) => elem.id === id);

  // if (userIndex === -1) {
  //   return "User not found";
  // }

  // users[userIndex] = { ...users[userIndex], ...userUpdate };
  // return users[userIndex];
};

export default updateUserService;
