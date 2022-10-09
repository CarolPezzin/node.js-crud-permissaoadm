import express from "express";
import "dotenv/config";
import userRouter from "./routes/users.routes";
import { startDatabase } from "./database";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Olá, vamos nos cadastrar?");
});

app.use("/users", userRouter);



app.listen(3000, () => {
  console.log(`server is running at port ${3000}`);
  startDatabase()
});

export default app;
