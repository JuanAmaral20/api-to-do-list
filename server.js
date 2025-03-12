import express from "express";
import jwt from "jsonwebtoken";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./graphql/schema.js";
import { resolvers } from "./graphql/resolver.js";
import { PrismaClient } from "@prisma/client";

import { middleware as restMiddleware } from "./middleware/authenticated.js";
import {
  createUsers,
  deleteUser,
  findAllUsers,
  loginUser,
} from "./controller/userController.js";
import {
  createTask,
  deleteTask,
  editTask,
  findAllTask,
} from "./controller/taskController.js";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const authHeader = req.headers.authorization || "";
    let userId = null;
    if (authHeader) {
      const token = authHeader.replace("Bearer ", "");
      try {
        const { sub } = jwt.verify(token, "secret");
        userId = sub;
      } catch (error) {
        console.error("Token inválido", error);
      }
    }
    return { prisma, userId };
  },
});

server.start().then(() => {
  server.applyMiddleware({ app });
});

app.post("/users", createUsers);
app.post("/login", loginUser);
app.get("/users", restMiddleware, findAllUsers);
app.delete("/users/:userId", restMiddleware, deleteUser);

app.post("/task", restMiddleware, createTask);
app.delete("/task/:taskId", restMiddleware, deleteTask);
app.get("/task", restMiddleware, findAllTask);
app.put("/task/:taskId", restMiddleware, editTask);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
  console.log(`GraphQL endpoint: http://localhost:3000${server.graphqlPath}`);
});
