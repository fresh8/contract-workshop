const database = require("../db");
const productClient = require("../client/product");

module.exports = function({ app, logger }) {
  app.get("/orders", (req, res, next) => {
    const { customerID } = req.query;

    let orders;
    if (customerID) {
      orders = database.getByCustomerID(customerID);
    } else {
      orders = database.getAll();
    }

    return res.json(orders);
  });

  app.get("/orders/:id", async (req, res, next) => {
    const { id } = req.params;

    if (!id) {
      res.json({ error: "Missing parameter 'id'" });
    }

    const order = database.getByID(id)
    const fullProducts = []
    if (order) {
      for (const productID of order.products) {
        try {
          product = await productClient.getByID(productID);
          fullProducts.push(product)
        } catch (e) {
          return next(e);
        }
      };

      order.products = fullProducts;

      return res.json(order);
    }

    res.json({ error: "Could not find order" });
  });
};
