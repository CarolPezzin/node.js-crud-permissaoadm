import { Router } from "express";

import createUserController from "../controller/createUser.controller";
import deleteUserController from "../controller/deleteUser.controller";
import listUserController from "../controller/listUser.controller";
import updateUserController from "../controller/updateUser.controller";
import userLoginController from "../controller/userLogin.controller";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middlewares";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";

const route = Router();

route.post("", verifyEmailAvailabilityMiddleware, createUserController);
route.post("/login", userLoginController);
route.get("", verifyAuthMiddleware, listUserController);
// route.get("/profile", verifyAuthTokenMiddleware, listUserController);
route.put("/:id", verifyAuthTokenMiddleware, updateUserController);
route.delete("/:id", verifyAuthTokenMiddleware, deleteUserController);

export default route;
