import { prisma } from "../lib/prisma.js";

export const deleteTask = async (req, res) => {
  await prisma.task.delete({
    where: {
      id: req.params.taskId,
    },
  });
  res.status(204).send();
};
