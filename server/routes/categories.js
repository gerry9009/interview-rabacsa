const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  fs.readFile("./api/products_dummy.json", (err, data) => {
    if (err) {
      res.status(500);
      res.send({ error: "Data not found" });
    } else {
      const items = JSON.parse(data);
      const categories = [];
      items.products.forEach((item) => {
        if (!categories.includes(item.category)) categories.push(item.category);
      });
      res.send({ categories });
    }
  });
});

module.exports = router;
