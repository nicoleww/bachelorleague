const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
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
    },
    contestants: [{ type: Schema.Types.ObjectId, ref: 'Contestant' }],
    team: {
      type: Schema.Types.ObjectId, ref: 'Team'
    },
    isAdmin: { type: Boolean, required: true },
    weeklyAnswer: { type: Schema.Types.ObjectId, ref: 'Contestant' }
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

let User = mongoose.model('User', userSchema); 
module.exports = User;  