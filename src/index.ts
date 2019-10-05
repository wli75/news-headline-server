import app from "./app";
import logger from "./util/logger";

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), (): void => {
  /*eslint-disable */
  logger.info(`App is running at http://localhost:${app.get("port")} in ${app.get("env")} mode`);
  /*eslint-enable */
});

export default server;
