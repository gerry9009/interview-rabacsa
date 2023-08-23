const express = require("express");
const router = express.Router();
const fs = require("fs");
const randomID = require("./utils");

// get all products
router.get("/", (req, res) => {
  fs.readFile("./api/products_dummy.json", (err, data) => {
    if (err) {
      res.status(500);
      res.send({ error: "Data not found" });
    } else {
      const items = JSON.parse(data);
      res.status(200);
      res.send(items);
    }
  });
});

// add new product
router.post("/", (req, res) => {
  fs.readFile("./api/products_dummy.json", (err, data) => {
    if (err) {
      res.status(500);
      res.send({ error: "Data not found" });
    } else {
      let items = JSON.parse(data);

      const ids = [];
      items.products.forEach((item) => ids.push(item.id));
      const id = randomID(ids);

      const newItem = { id, ...req.body.data };

      items.products.push(newItem);

      fs.writeFile("./api/products_dummy.json", JSON.stringify(items), () => {
        res.status(200);
        res.send(newItem);
      });
    }
  });
});

router
  .route("/:id")
  // get product by id
  .get((req, res) => {
    const id = req.params.id;

    fs.readFile("./api/products_dummy.json", (err, data) => {
      if (err) {
        res.status(500);
        res.send({ error: "Data not found" });
      } else {
        const items = JSON.parse(data);
        const products = items.products;
        const productsID = products.filter(
          (product) => product.id === Number(id)
        );
        res.status(200);
        res.send(...productsID);
      }
    });
  })
  // edit product by id
  .patch((req, res) => {
    const id = req.params.id;
    const modifiedItem = req.body.data;

    fs.readFile("./api/products_dummy.json", (err, data) => {
      if (err) {
        res.status(500);
        res.send({ error: "Data not found" });
      } else {
        let items = JSON.parse(data);

        const modifyProduct = items.products.map((item) => {
          return item.id === Number(id) ? { ...item, ...modifiedItem } : item;
        });

        const newProducts = { products: modifyProduct };

        fs.writeFile(
          "./api/products_dummy.json",
          JSON.stringify(newProducts),
          () => {
            res.status(200);
            res.send(newProducts);
          }
        );
      }
    });
  })
  // delete product by id
  .delete((req, res) => {
    const id = req.params.id;

    fs.readFile("./api/products_dummy.json", (err, data) => {
      if (err) {
        res.status(500);
        res.send({ error: "Data not found" });
      } else {
        const items = JSON.parse(data);
        const products = items.products;
        const filteredProducts = products.filter(
          (product) => product.id !== Number(id)
        );

        const newProducts = { products: filteredProducts };

        fs.writeFile(
          "./api/products_dummy.json",
          JSON.stringify(newProducts),
          () => {
            res.status(200);
            res.send(newProducts);
          }
        );
      }
    });
  });

module.exports = router;
