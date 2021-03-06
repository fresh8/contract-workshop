const Express = require("express");
const bunyan = require("bunyan");

const expressConfig = require("./lib/express");
const api = require("./api");

const app = Express();
const logger = bunyan.createLogger({ name: "orderAPI" });

// Configurer Express
logger.info("✅  Configuring Express.");
expressConfig({ app });

// Configuring API
api({ app, logger });

app.listen(3001, listenError => {
  if (listenError) {
    logger.error(listenError);
  } else {
    logger.info(`🌎  Listening on port ${3001}`);
  }
});
