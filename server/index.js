require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 8088;

app.use(bodyParser.json());
app.use(cors());

const categoriesRouters = require("./routes/categories");
const productsRouters = require("./routes/products");

app.use("/api/categories", categoriesRouters);
app.use("/api/", productsRouters);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
