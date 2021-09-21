const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true
    },
    password: {
      type: String,
      trim: true,
      minLength: 3,
      required: true
    }
},  
{
    timestamps: true,
    toJSON: {
    transform: function (doc, ret) {
      delete ret.password;
      return ret;
    }
  }
}
);

let User = mongoose.model('User', userSchema); // .model compiles the schema into a model
module.exports = User;  