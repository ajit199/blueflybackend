const express = require("express");
const Product = require("../Models/Product");

const productRouter = express.Router();

productRouter.post("/create", async (req, res) => {
  try {
    const products = await Product.create();
    return res.status(201).json(products);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

productRouter.get("/all", async (req, res) => {
  try {
    let products = await Product.find();
    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
module.exports = productRouter;
