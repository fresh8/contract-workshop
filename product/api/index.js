const database = require("../db");

module.exports = function({ app, logger }) {
  app.get("/products", (req, res, next) => {
    const products = database.getAll()
    return res.json(products);
  });

  app.get("/products/:id", (req, res, next) => {
    const { id } = req.params;

    if (!id) {
      res.json({ error: "Missing parameter 'id'" });
    }

    const product = database.getByID(id)
    if (product) {
      return res.json(product);
    }

    res.json({ error: "Could not find product" });
  });
};
