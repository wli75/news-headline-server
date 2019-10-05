import "reflect-metadata"; // Removing this line will cause error

import express from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import morgan = require("morgan");
import { stream } from "./util/logger";
import container from "./inversify.config";

const server = new InversifyExpressServer(container);
server.setConfig((app: express.Application): void => {
  app.set("port", process.env.PORT || 3000);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan("tiny", stream));
});

const app = server.build();

export default app;
