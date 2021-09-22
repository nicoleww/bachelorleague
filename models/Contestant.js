const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const contestantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: String },
    occupation: { type: String },
    hometown: { type: String },
    photo: { type: String },
    points: { type: Number }    
})


let Contestant = mongoose.model('Contestant', contestantSchema); 