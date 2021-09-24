const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const weeklySchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: Schema.Types.ObjectId, ref: 'Contestant' },
    admin: { type: Schema.Types.ObjectId, ref: 'User' },
    league: { type: Schema.Types.ObjectId, ref: 'League' }
})


let Weekly = mongoose.model('Weekly', weeklySchema); 
module.exports = Weekly; 