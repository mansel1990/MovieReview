import express from "express";

const router = express.Router();

const products = [
  {
    brand: "Apple",
    product: "Phone",
  },
  {
    brand: "Apple",
    product: "Laptop",
  },
];

router.get("/", (req, res) => {
  res.json(products);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  id == 1 ? res.json(products[0]) : res.json([]);
});

export default router;
