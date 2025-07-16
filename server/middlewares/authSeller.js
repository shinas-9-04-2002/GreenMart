import jwt from "jsonwebtoken";

export const authSeller = (req, res, next) => {
    try {
        const { sellerToken } = req.cookies;
        if (!sellerToken) {
            return res
                .status(401)
                .json({ message: "Unauthorized", success: false });
        }

        const decode = jwt.verify(sellerToken, process.env.JWT_SECRET);
        if (decode.email === process.env.SELLER_EMAI) {
            next();
        }
    } catch (error) {
        console.error("Authentication error", error);
        return res
            .status(401)
            .json({ message: "Unauthorized", success: false });
    }
};
