export const resolvers = {
  Query: {
    task: async (_, { id }, { prisma }) => {
      return await prisma.task.findUnique({
        where: { id },
      });
    },
  },

  Mutation: {
    createTask: async (_, { data }, { prisma, userId }) => {
      if (!userId) {
        throw new Error("Você precisa estar autenticado para criar uma task.");
      }
      const newTask = await prisma.task.create({
        data: {
          title: data.title,
          description: data.description,
          status: data.status,
          userId,
        },
      });
      return newTask;
    },
  },
};
