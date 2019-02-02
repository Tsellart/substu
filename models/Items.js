var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var itemsSchema = new Schema({
  userName: {
    type: String,
    unique: true
  },
  service: {
    type: String,
    },
  price: {
    type: Number,
    },
  rate: {
    type: String,
    },

  isSaved: {
    type: Boolean,
    default: false
  },
});

const Items = mongoose.model("Items", itemsSchema);

module.exports = Items;
