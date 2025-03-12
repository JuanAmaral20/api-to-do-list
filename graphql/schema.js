import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    task(id: ID!): Task
  }

  type Task {
    id: ID!
    title: String!
    description: String
    status: String!
    userId: String!
  }

  input CreateTaskInput {
    title: String!
    description: String
    status: String!
  }

  type Mutation {
    createTask(data: CreateTaskInput!): Task!
  }
`;
