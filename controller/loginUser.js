import { prisma } from "../lib/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
