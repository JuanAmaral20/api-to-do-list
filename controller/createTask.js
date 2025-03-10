import { prisma } from "../lib/prisma.js";

export const createTask = async (req, res) => {
  await prisma.task.create({
    data: {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      userId: req.userId,
    },
  });
};
