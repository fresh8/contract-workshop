const methodOverride = require("method-override");
const morgan = require("morgan");
const bodyParser = require("body-parser");

module.exports = function({ app, properties, logger }) {
  // Set the express logger
  app.use(
    morgan(":method :url :status :response-time ms - :res[content-length]")
  );
  // add REST getters
  app.use(methodOverride());
  // Set up passport sessions
  app.use(bodyParser.json());
};
