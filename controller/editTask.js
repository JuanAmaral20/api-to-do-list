import { prisma } from "../lib/prisma.js";

export const editTask = async (req, res) => {
  await prisma.task.update({
    where: {
      id: req.params.taskId,
    },
    data: {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
    },
  });
  res.status(204).json({ message: "Task edited successfully" });
};
