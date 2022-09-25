import users from "../database";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs"

const createUserService = async ({ email, name, password, isAdmin}) => {
  const hashedPassword = await bcrypt.hash(password, 10)

  const newUser = {
    
    id: uuidv4(),
    email,
    name,
    isAdmin,
    password: hashedPassword,
    created_at: Date(),
  };
  users.push(newUser);
  return newUser;
};

export default createUserService;
