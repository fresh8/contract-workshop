const orders = {
    1012: {
      customerID: 5000,
      products: [
        1,
        3
      ],
      total: 90,
    },
    1024: {
      customerID: 5005,
      products: [
        1
      ],
      total: 10,
    },
  };

module.exports = {
  getAll: function() {
      return orders
  },

  getByID: function(id) {
    if (orders[id]) {
      return orders[id];
    }
    return null;
  },

  getByCustomerID: function(customerID) {
    let customerOrders = [];

    for (const id in orders) {
      if (orders[id].customerID == customerID) {
        customerOrders.push(orders[id]);
      }
    };

    return customerOrders;
  }
};
