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

  res.status(201).json({ message: "Task created successfully" });
};

export const deleteTask = async (req, res) => {
  await prisma.task.delete({
    where: {
      id: req.params.taskId,
    },
  });
  res.status(204).json({ message: "Task deleted successfully" });
};

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

export const findAllTask = async (req, res) => {
  const tasks = await prisma.task.findMany({
    where: {
      userId: req.userId,
    },
  });
  return res.status(200).json(tasks);
};
