const mongoose = require('mongoose')
const dataSchema = mongoose.Schema({
    name: { type: String, required: true },
    code: { type: Number, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true }
},{timestamps: true,versionKey: false});
const foodModel = mongoose.model('foods', dataSchema);
module.exports = foodModel;