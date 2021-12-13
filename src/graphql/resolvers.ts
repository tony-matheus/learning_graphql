import { IResolvers } from "graphql-tools";
import { Link } from "../entities";
import {
  createLink,
  updateLink,
  deleteLink,
  getAllLink,
  findLink,
} from "../data/linkData";
import LinkModel from "../models/link";

export const resolvers: IResolvers = {
  Query: {
    feed(_: void, args: void): Promise<Link[]> {
      return getAllLink();
    },
    link(_: void, args): Promise<Link | null> {
      return findLink(args._id);
    },
  },
  Mutation: {
    post(parent, args): Promise<Link> {
      return createLink(args);
    },
    updateLink(parent, args): Promise<Link | null> {
      return updateLink(args._id, args);
    },
    deleteLink(parent, args): string {
      const d = deleteLink(args._id);
      return "Deleted";
    },
  },
};
