import { prisma } from "../lib/prisma.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const createUsers = async (req, res) => {
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      password: await bcrypt.hash(req.body.password, 10),
    },
  });
  res.status(201).json(req.body);
};

export const deleteUser = async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.userId,
    },
  });
  res.status(204).send();
};

export const findAllUsers = async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
};

export const loginUser = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      email: req.body.email,
    },
  });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  if (await bcrypt.compare(req.body.password, user.password)) {
    const token = jwt.sign({ sub: user.id }, "secret");
    return res.status(200).json({ token });
  }
  return res.status(401).json({ message: "Invalid credentials" });
};
