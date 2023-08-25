import express, { Express, NextFunction, Request, Response } from "express";

import path from "path";

export const expressLoader = ({ app }: { app: Express }) => {
  app.disable("x-powered-by");
  app.enable("trust proxy");

  // serve static assets
  app.use(express.static(path.join(__dirname, "../../../", "/client/dist/")));

  // serve app
  app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../../../", "/client/dist/index.html"));
  });
};
