import mongoose from "mongoose";

const cart = new mongoose.Schema({
  products: [{
  product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
        require: true
     },
     quantity: {
        type: Number,
        default: 1
     }}],
},{ timestamps: true });

export default mongoose.model('Carts', cart);
