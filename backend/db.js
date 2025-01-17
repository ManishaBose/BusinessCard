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

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const People = mongoose.model('People',peopleSchema);
const User = mongoose.model('User',userSchema);

module.exports = {
    People,
    User
}