import { prisma } from "../lib/prisma.js";

export const findAllUsers = async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
};
