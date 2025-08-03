const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
  cart: [
    {
      productId: {
        type: Number,
        required: true
      },
      quantity: {
        type: Number,
        default: 1,
      }
    }
  ],
    date:{
        type: Date, 
        default: Date.now
    }
})

module.exports = mongoose.model("User", userSchema);