const mongoose = require("mongoose");

const schema = mongoose.Schema({
  busno: {
    type: Number,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  seat: [
    {
      seatno: {
        type: Number,
        required: true,
      },
      isAvialable: {
        type: Boolean,
        required: true,
      },
    },
  ],
});

const BusModel = mongoose.model("busdata", schema);
module.exports = BusModel;
