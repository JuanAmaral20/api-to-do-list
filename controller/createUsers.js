import { prisma } from "../lib/prisma.js";
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
