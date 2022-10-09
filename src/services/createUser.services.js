import database from "../database";
import * as bcrypt from "bcryptjs";

const createUserService = async (email, name, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const res = await database.query(
      "INSERT INTO users(email, name, password) VALUES($1, $2, $3) RETURNING *",
      [email, name, hashedPassword]
    );
    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }

  // const newUser = {

  //   id: uuidv4(),
  //   email,
  //   name,
  //   isAdmin,
  //   password: hashedPassword,
  //   created_at: Date(),
  // };
  // users.push(newUser);
  // return newUser;
};

export default createUserService;
