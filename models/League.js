const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const leagueSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    admin: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})


let League = mongoose.model('League', leagueSchema); 
module.exports = League;  