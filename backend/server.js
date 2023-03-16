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
    const data = await BusModel.find(
      { from: { $eq: req.query.from }, to: { $eq: req.query.to } },
      { from: 1, to: 1, _id: 0, time: 1, name: 1, seat: 1, busno: 1 }
    );
    if (data) {
      res.json(data);
    }
  } catch (err) {
    console.log("error", err);
  }
});

app.post("/book-seat", async (req, res) => {
  var body = req.body;
  console.log("body: ", body);
  try {
    const data = await BusModel.find({ busno: { $eq: body.busno } });
    if (data) {
      data[0].seat.forEach((s) => {
        if (s.seatno === body.seatno) {
          s.isAvialable = !s.isAvialable;
          console.log("seats: ", data[0].seat);
          const status = BusModel.replaceOne(
            { busno: { $eq: body.busno } },
            data[0],
            { upsert: true }
          )
            .then((ans) => {
              res.json(data[0])
              console.log("data to be send: ", data[0]);
            })
            .then((err) => {
              console.log(err);
            });
        }
      });
    }
  } catch (err) {
    console.log("error", err);
  }
  // return res.json(data[0].seat);
});

app.listen(8000, () => {
  console.log("Server listening");
});
