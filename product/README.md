# Product API

## Endpoints

### `/products`

List of all products.

Example response:

```json
[
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
]
```

### `/products/{id}`

Single product.

Example response:

```json
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
```
