const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    },
    contestantOne: {
      type: Schema.Types.ObjectId, ref: 'Contestant'
    },
    contestantTwo: {
      type: Schema.Types.ObjectId, ref: 'Contestant'
    },
    contestantThree: {
      type: Schema.Types.ObjectId, ref: 'Contestant'
    },
    contestantFour: {
      type: Schema.Types.ObjectId, ref: 'Contestant'
    },
    contestantFive: {
      type: Schema.Types.ObjectId, ref: 'Contestant'
    },
    contestantSix: {
      type: Schema.Types.ObjectId, ref: 'Contestant'
    },
    contestantSeven: {
      type: Schema.Types.ObjectId, ref: 'Contestant'
    },
    contestantEight: {
      type: Schema.Types.ObjectId, ref: 'Contestant'
    },
    Team: {
      type: Schema.Types.ObjectId, ref: 'Team'
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

let User = mongoose.model('User', userSchema); 
module.exports = User;  