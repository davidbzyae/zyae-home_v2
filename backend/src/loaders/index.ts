import { Express } from "express";
import { Server } from "http";
import { expressLoader } from "./express";

export const loaders = async ({ app }: { app: Express }) => {
  expressLoader({ app });
};
