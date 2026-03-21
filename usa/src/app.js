// const express = require('express');
import express from "express";

import { foods } from "./database/foods.js";

// endpoint: localhost:3000/1
// request => JSON string
// parse() => javascript

// initializing server
const app = express();

// middleware: function that
app.use(express.json()); // JSON string => back into javascript

// get request 200 ok request 201 created new resource, 203, 204 no content
// 300 requests status
// 400 bad requests => 400, 401, 402, 404
// { success: true, data: foods, error: null | "Error occurred when trying to get foods" }

app.get("/", (req, res) => {
  res.status(200).send({ success: true, data: foods, error: null });
});

// get food by id: 1 return pizza object "1"
app.get("/:id", (req, res) => {
  // id is type string
  const { id } = req.params; // string => number
  const idNum = Number(id);

  // get pizza, comparing string === number || false strict comparison
  const food = foods.filter((food) => food.id === idNum);

  // conditional
  if (food.length === 0) {
    return res
      .status(404)
      .send({ success: false, data: null, error: "No food found" });
  }

  const responseObject = {
    success: true,
    data: food,
    error: null,
  };

  return res.status(200).send(responseObject);
});

/**
 * 1. id is required and can't be less 0
 * 2. Pizza - not unique required
 * 3. type - required not unique
 * 4. toppings - optional
 */

app.post("/addFood", (req, res) => {
  // { id: 21, name: "Noodles", type: "Mama", toppings: ["green onion", "egg"]}
  const { id } = req.body;

  // unifying response type to JSON, object, array, string
  // auto convert send(""); string, buffer, {}, [] => json

  if (!id || id < 0) {
    return res.json({ success: false, data: null, error: "Not valid Id" });
  }

  const pizza = foods.filter((food) => food.id === id);

  foods.push({
    id: 21,
    name: "Noodles",
    type: "Mama",
    toppings: ["green onion", "egg"],
  });
});

/**
 * What is this route supposed to do?
 * 1. Update a food item in our database (foods) => [ food obj, food obj ]
 * What variables do I need from the client? params, body, query
 * 2. Grab them from the request.
 * 3. Actually update my food;
 */

app.put("/updateFoodName/:id", (req, res) => {
  const id = req.params.id;
  const name = req.params.body;

  if (!id || id <= 0) {
    return res.status(400).send({ messsage: "error" });
  }

  if (!name || name === "") {
    return res.status(400).send({ message: "error" });
  }

  // Success: if a food.id matches the id we pass in
  // Failure: if we don't an food.id to the id we pass in
  const foodItem = foods.filter((food) => food.id === id)[0];

  if (!foodItem) {
    return res.status(400).send({ message: "error" });
  }

  const updatedItem = { ...foodItem, name: name };
  const updatedList = foods.map((food) => {
    if (food.id === id) {
      return updatedItem;
    } else {
      return food;
    }
  });

  foods = updatedList;

  res.json({ success: true, data: foods, error: null });
});

// exporting out server
export default app;
