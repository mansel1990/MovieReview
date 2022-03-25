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

const getProducts = (req, res) => {
  res.json(products);
};

const getProductById = (req, res) => {
  const id = req.params.id;
  id == 1 ? res.json(products[0]) : res.json([]);
};

export { getProducts, getProductById };
