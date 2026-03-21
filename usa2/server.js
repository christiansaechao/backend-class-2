import express from "express";
import { Shoes } from "./shoes.js";

const App = express(); // express server initialized

// endpoints
// HTTP Methods: GET, POST, PUT/PATCH/UPDATE, DELETE

// GET ALL SHOES BY BRAND | Nike
// REQ: BODY, PARAMS, QUERY | localhost:3000/shoes?brand=query

// GET ALL SHOES || RETURN BY QUERY
// http://localhost:8080/shoes?brand=nike => adidas => reebok

/**
 {
    id: 1,
    name: "Air Zoom Runner",
    brand: "Nike",
    price: 120,
    size: [7, 8, 9, 10, 11],
    color: "Black",
    category: "Running",
    inStock: true,
    rating: 4.5
  }
*/

// brand = req.query = nike
// current shoe object in db == shoe.brand == "Nike"
// http://localhost:8080/shoes?brand=nike&color=red&size=9

App.get("/shoes", (req, res) => {
  const { brand, color, size } = req.query;
  //   console.log(brand);
  if (!req.query) return res.status(200).send({ data: Shoes, error: null });

  let findShoe = Shoes;
  for (const field in req.query) {
    findShoe = findShoe.filter((shoe) =>
      shoe[field].toLowerCase().includes(req.query[field].toLowerCase()),
    );
  }

  if (findShoe.length === 0) {
    return res.send("<h1>No shoe found</h1>");
  }

  return res.status(200).send({ data: findShoe, error: null });
});

// GET SHOE BY ID
App.get("/shoes/:id", (req, res) => {
  const { id } = req.params;
  const shoeFound = Shoes.filter((item) => item.id === Number(id));
  if (!shoeFound || shoeFound.length === 0) {
    return res
      .status(401)
      .send({ success: false, data: null, error: "can't find the shoe" });
  }

  return res.status(200).send({ success: true, data: shoeFound, error: null });
});

// GET SHOES IF SIZE INCLUDES ?SIZE

App.listen(8080, () => console.log("Server Running: " + 8080));
