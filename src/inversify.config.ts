// declare metadata by @controller annotation
import "./controller/PublicationsController";

import { Container } from "inversify";
import { GoogleNewsService } from "./service/GoogleNewsService";
import TYPES from "./types";

const container = new Container();
container
  .bind<GoogleNewsService>(TYPES.GoogleNewsService)
  .to(GoogleNewsService);

export default container;
