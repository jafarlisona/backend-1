const express = require("express");
const app = express();
const port = 3000;
let counter = 5;
app.use(express.json());
let data = [
  {
    id: 1,
    title: "Leather Straps Wristwatch",
    price: 110,
    quantity: 1,
    total: 120,
    discountPercentage: 7.14,
    discountedPrice: 111,
    thumbnail: "https://i.dummyjson.com/data/products/61/thumbnail.jpg",
  },
  {
    id: 2,
    title: "Chain Pin Tassel Earrings",
    price: 45,
    quantity: 2,
    total: 90,
    discountPercentage: 17.75,
    discountedPrice: 74,
    thumbnail: "https://i.dummyjson.com/data/products/80/thumbnail.jpg",
  },
  {
    id: 3,
    title: "American Vintage Wood Pendant Light",
    price: 46,
    quantity: 3,
    total: 138,
    discountPercentage: 8.84,
    discountedPrice: 126,
    thumbnail: "https://i.dummyjson.com/data/products/99/thumbnail.jpg",
  },
  {
    id: 4,
    title: "Non-Alcoholic Concentrated Perfume Oil",
    price: 120,
    quantity: 1,
    total: 120,
    discountPercentage: 15.6,
    discountedPrice: 101,
    thumbnail: "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
  },
  {
    id: 5,
    title: "Women Strip Heel",
    price: 40,
    quantity: 3,
    total: 120,
    discountPercentage: 10.83,
    discountedPrice: 107,
    thumbnail: "https://i.dummyjson.com/data/products/48/thumbnail.jpg",
  },
];
app.get("/", function (req, res) {
  res.send(data);
});
app.get("/:id", function (req, res) {
  const { id } = req.params;
  const result = data.find((x) => x.id === +id);
  res.send(result);
});

app.post("/", function (req, res) {
  counter++;
  const { title } = req.body;
  data.push({ title, id: counter });
  res.send("Got a POST request");
});

app.put("/:id", function (req, res) {
  const { id } = req.params;
  const { title, price, total } = req.body;
  const index = data.findIndex((x) => x.id === +id);
  data[index] = { id: +id, title, price, total };
  res.send("Got a PUT request ");
});

app.delete("/:id", function (req, res) {
  const { id } = req.params;
  data = data.filter((x) => x.id !== +id);
  res.send("Got a DELETE request");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
