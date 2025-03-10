import { prisma } from "../lib/prisma.js";

export const findAllTask = async (req, res) => {
  const tasks = await prisma.task.findMany({
    where: {
      userId: req.userId,
    },
  });
  return res.status(200).json(tasks);
};
