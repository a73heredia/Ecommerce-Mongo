import mongoose from "mongoose";

const product = new mongoose.Schema({
    name: { type: String, require: true },
    price: { type: Number, require: true },
    code: { type: String, require: true, unique: true },
    description: { type: String, require: true },
    stock: { type: Number, require: true },
    status: { type: String, require: true },
    category: { type: String, require: true },

}, {timestamps: true});

export default mongoose.model('Products', product);