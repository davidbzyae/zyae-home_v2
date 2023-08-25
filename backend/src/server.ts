import "module-alias/register";

import config from "@/config";
import express from "express";
import http from "http";
import { loaders } from "@/loaders";

async function startServer() {
  const app = express();
  const httpServer = http.createServer(app);

  loaders({ app });

  httpServer
    .listen(config.port, () => {
      console.log(`Listening on port ${config.port}`);
    })
    .on("error", (err) => {
      console.log(`Error on server ${err}`);
    });
}
startServer();
