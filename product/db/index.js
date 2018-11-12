const products = [
  {
    id: 1,
    name: "Kettle",
    lifeSpan: "9 – 13 years",
    category: [
      "Loyal",
      "Obebdient",
      "Curious",
      "Alert",
      "Confident",
      "Intelligent",
      "Watchful",
      "Courageous"
    ],
    weight: {
      full: "30–40 kg",
      empty: "22–32 kg"
    },
    colours: [
      "Black",
      "Black & Tan",
      "Red & Black",
      "Black & Silver",
      "Sable",
      "Grey"
    ],
    price: 10
  },
  {
    id: 3,
    name: "Washer Dryer",
    lifeSpan: "10 – 14 years",
    category: [
      "Kind",
      "Outgoing",
      "Agile",
      "Gentle",
      "Intelligent",
      "Even Tempered",
      "Trusting"
    ],
    weight: {
      full: "29–36 kg",
      empty: " 25–32 kg"
    },
    colours: ["Black", "Chocolate", "Yellow"],
    price: 80
  }
];

module.exports = {
    getAll: function() {
        return products
    },

    getByID: function(id) {
      for (const product of products) {
        if (product.id == id) {
          return product;
        }
      }

      return null;
    }
};
