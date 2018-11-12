const database = require("../db");

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

  app.get("/orders/:id", (req, res, next) => {
    const { id } = req.params;

    if (!id) {
      res.json({ error: "Missing parameter 'id'" });
    }

    const order = database.getByID(id)
    if (order) {
      return res.json(order);
    }

    res.json({ error: "Could not find order" });
  });
};
