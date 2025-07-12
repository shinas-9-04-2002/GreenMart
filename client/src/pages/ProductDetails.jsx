import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Link, useParams } from "react-router-dom";
import { assets } from "../assets/assets";

const ProductDetails = () => {
    const { products, navigate, addToCart } = useContext(AppContext);
    const { id } = useParams();
    const [thumbnail, setThumbnail] = useState(null);
    const product = products.find((product) => product._id === id);

    useEffect(() => {
        setThumbnail(product?.image[0] ? product.image[0] : null);
    }, [product]);

    return (
        product && (
            <div className="max-w-6xl w-full px-6 mt-16">
                <p>
                    <Link to={"/"}>Home</Link> /
                    <Link to={"/products"}> Products</Link> /
                    <Link to={`/products/${product.category.toLowerCase()}`}>
                        {" "}
                        {product.category}
                    </Link>{" "}
                    /<span className="text-indigo-500"> {product.name}</span>
                </p>

                <div className="flex flex-col md:flex-row gap-16 mt-4">
                    <div className="flex gap-3">
                        <div className="flex flex-col gap-3">
                            {product.image.map((image, index) => (
                                <div
                                    key={index}
                                    onClick={() => setThumbnail(image)}
                                    className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer"
                                >
                                    <img
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
                            <img src={thumbnail} alt="Selected product" />
                        </div>
                    </div>

                    <div className="text-sm w-full md:w-1/2">
                        <h1 className="text-3xl font-medium">{product.name}</h1>

                        <div className="flex items-center gap-0.5 mt-1">
                            {Array(5)
                                .fill("")
                                .map(
                                    (_, i) =>
                                        product.rating >
                                        (
                                            <img
                                                src={
                                                    i < 4
                                                        ? assets.star_icon
                                                        : assets.star_dull_icon
                                                }
                                                alt="star"
                                                key={i}
                                                className="w-3.5 md:w-4"
                                            />
                                        )
                                )}
                            <p className="text-base ml-2">(4)</p>
                        </div>

                        <div className="mt-6">
                            <p className="text-gray-500/70 line-through">
                                MRP: ₹{product.price}
                            </p>
                            <p className="text-2xl font-medium">
                                MRP: ₹{product.offerPrice}
                            </p>
                            <span className="text-gray-500/70">
                                (inclusive of all taxes)
                            </span>
                        </div>

                        <p className="text-base font-medium mt-6">
                            About Product
                        </p>
                        <ul className="list-disc ml-4 text-gray-500/70">
                            {product.description.map((desc, index) => (
                                <li key={index}>{desc}</li>
                            ))}
                        </ul>

                        <div className="flex items-center mt-10 gap-4 text-base">
                            <button
                                onClick={() => addToCart(product._id)}
                                className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition"
                            >
                                Add to Cart
                            </button>
                            <button
                                onClick={() => {
                                    addToCart(product._id);
                                    navigate("/cart");
                                }}
                                className="w-full py-3.5 cursor-pointer font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition"
                            >
                                Buy now
                            </button>
                        </div>
                    </div>
                </div>
                {/* Customer Reviews */}
                {product.reviews && product.reviews.length > 0 && (
                    <div className="mt-16 mb-10">
                        <h2 className="text-xl font-semibold mb-4">
                            Customer Reviews
                        </h2>
                        <div className="space-y-4">
                            {product.reviews.map((review, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 border border-gray-200 rounded-lg p-4"
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="font-medium text-gray-800">
                                            {review.username}
                                        </span>
                                        <div className="flex items-center">
                                            {Array(5)
                                                .fill("")
                                                .map((_, i) => (
                                                    <img
                                                        key={i}
                                                        src={
                                                            i < review.rating
                                                                ? assets.star_icon
                                                                : assets.star_dull_icon
                                                        }
                                                        alt="star"
                                                        className="w-4 h-4"
                                                    />
                                                ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm mt-1">
                                        {review.comment}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        )
    );
};

export default ProductDetails;
