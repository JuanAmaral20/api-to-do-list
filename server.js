import express from "express";
import { PrismaClient } from "@prisma/client";
import { middleware } from "./middleware/authenticated.js";
import { createUsers } from "./controller/createUsers.js";
import { loginUser } from "./controller/loginUser.js";
import { findAllUsers } from "./controller/findAllUsers.js";
import { deleteUser } from "./controller/deleteUser.js";
import { createTask } from "./controller/createTask.js";
import { deleteTask } from "./controller/deleteTask.js";
import { findAllTask } from "./controller/findAllTask.js";
import { editTask } from "./controller/editTask.js";

const app = express();
app.use(express.json());

app.post("/users", createUsers);

app.post("/login", loginUser);

app.get("/users", middleware, findAllUsers);

app.delete("/users/:userId", middleware, deleteUser);

app.post("/task", middleware, createTask);

app.delete("/task/:taskId", middleware, deleteTask);

app.get("/task", middleware, findAllTask);

app.put("/task/:taskId", middleware, editTask);

app.listen(3000, () => {
  console.log("Server running on port 3000! 🚀");
});
