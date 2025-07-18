import User from "../models/user.model.js";

//update  user  cartData=: /api/cart/update

export const updateCart=async(req,res)=>{
  try {
      const userId=req.user
      const {cartItems}=req.body
      
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
  }
}