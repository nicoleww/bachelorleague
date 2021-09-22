const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const teamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})


let Team = mongoose.model('Team', teamSchema); 
module.exports = Team;  