import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        ref: "User",
    },
    items: [
        {
            product: { type: String, required: true, ref: "Product" },
            quantity: { type: Number, required: true },
        },
    ],
    amount: { type: Number, require: true },
    address: { type: String, required: true, ref: "Address" },
    status: { type: String, default: "order Placed" },
    paymentTypes: { type: String, require: true },
    isPaid: { type: Boolean, required: true, default: false },
},{timestamps:true});

const Order = mongoose.model("Order", orderSchema);

export default Order;
