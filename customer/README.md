# Customer API

## Endpoints

### `/customers`

List of all customers.

Example response:

```json
[
  {
    "id":123456,
    "name":{
      "first":"John",
      "last":"Delong"
    },
    "age":55,
    "favourite_colour":"Blanched Almond",
    "favourite_shape":"Meridia's Beacon"
  }
]
```

### `/customers/{id}`

Single customer.

Example response:

```json
{
  "id":123456,
  "name":{
    "first":"John",
    "last":"Delong"
  },
  "age":55,
  "favourite_colour":"Blanched Almond",
  "favourite_shape":"Meridia's Beacon",
  "orders":{
    "customerID":123457,
    "products":[
      {
        "id":9,
        "name":"Printer",
        "lifeSpan":"1 – 2 years",
        "category":[
          "Disloyal",
          "Woeful"
        ],
        "weight":{
          "full":"3–4 kg",
          "empty":"2–3 kg"
        },
        "colours":[
          "Black",
          "Beige",
          "Black & Beige"
        ],
        "price":100
      }
    ],
    "total":10
  }
}
```
