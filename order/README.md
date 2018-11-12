# Order API

## Endpoints

### `/orders`

List of all orders.

Example response:

```json
{
  "50210":{
    "customerID":123456,
    "products":[
      9,
      9,
      9
    ],
    "total":300
  },
  "50012":{
    "customerID":123457,
    "products":[
      1
    ],
    "total":10
  }
}
```

### `/products/{id}`

Single product.

Example response:

```json
{
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
```
