const dotenv = require('dotenv');
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const peopleSchema = new mongoose.Schema({
    name: String,
    description: String,
    interests: Array,
    linkedin: String,
    twitter: String
})

const People = mongoose.model('People',peopleSchema);

module.exports = {
    People
}