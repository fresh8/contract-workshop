const fetch = require("node-fetch");

module.exports = {
  getByID: async function(id) {
    const options = {
      headers: { "Content-Type": "application/json" }
    };

    const fetchResponse = await fetch(
      `http://product:3002/products/${id}`,
      options
    );
    const parsedJson = await fetchResponse.json();

    return parsedJson;
  }
}
