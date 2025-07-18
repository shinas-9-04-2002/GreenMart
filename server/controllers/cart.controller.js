import User from "../models/user.model.js";

//update  user  cartData=: /api/cart/update

export const updateCart = async (req, res) => {
    try {
        const userId = req.user;
        const { cartItems } = req.body;
        const updateUser = await User.findByIdAndUpdate(
            userId,
            { cartData: cartItems },
            { new: true }
        );
        if (!updateUser) {
            return res
                .status(404)
                .json({ message: "User not found", success: false });
        }
        res.status(200).json({updateUser,success:true,message:"Cart updated successfully"})
    } catch (error) {
        res.status(500).json({ message: "server error", error: error.message });
    }
};
