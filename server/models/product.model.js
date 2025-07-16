import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: "String",
        required: true,
    },
    description: {
        type: "String",
        required: true,
    },
    price: {
        type: "Number",
        required: true,
    },
    offerPrice: {
        type: "Number",
        required: true,
    },
    image: {
        type: Array,
        required: true,
    },
        category: {
        type: "string",
        required: true,
    },
        inStock: {
        type: Boolean,
        required: true,
        default:true
    },
});

const Product=mongoose.Model("product",productSchema)
export default Product
