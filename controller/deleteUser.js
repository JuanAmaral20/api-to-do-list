import { prisma } from "../lib/prisma.js";

export const deleteUser = async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.userId,
    },
  });
  res.status(204).send();
};
