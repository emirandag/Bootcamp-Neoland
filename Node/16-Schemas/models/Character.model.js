const mongoose = require("mongoose")

const Schema = mongoose.Schema

const CharacterSchema = new Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        image: { type: String, required: false}
    }, 
    {
        timestamps: true
    }
)

const Character = mongoose.model("Character", CharacterSchema)

module.exports = Character