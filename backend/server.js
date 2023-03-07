const express = require("express");
const mongoose = require("mongoose");
const app = express();
const BusModel = require("./models/Bus");
const cors = require("cors");

mongoose
  .connect(
    "mongodb+srv://das:dasismass@cluster0.j7nrcsd.mongodb.net/taskbusinfo?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  });

app.use(express.json());
app.use(cors());

app.get("/getInfo", async (req, res) => {
  try {
    const data = await BusModel.find({ from: { $eq: req.query.from }, to:  { $eq: req.query.to }});
    if (data) {
      console.log("data", data);
      res.send(data);
    } else {
      console.log("No data found");
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(8000, () => {
  console.log("Server listening");
});
