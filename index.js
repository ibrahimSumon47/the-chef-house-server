const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const cors = require("cors");

const chefDetails = require("./data/chefDetails.json");

const foodDetails = require("./data/foodDetails.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Site is running");
});

app.get("/chef_details", (req, res) => {
  res.send(chefDetails);
});

app.get("/food_details", (req, res) => {
  res.send(foodDetails);
});

app.get("/chef_details/:id", (req, res) => {
  const id = req.params.id;
  const chefId = chefDetails.find((e) => e.id == id);
  res.send(chefId);
})

app.listen(port, () => {
  console.log(`site api is running port: ${port}`);
});
