import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { AppContext } from "../context/AppContext";

const Products = () => {
    const { products, searchQuery } = useContext(AppContext); // ✅ fixed here
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (searchQuery && searchQuery.length > 0) {
            setFilteredProducts(
                products.filter((product) =>
                    product.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                )
            );
        } else {
            setFilteredProducts(products);
        }
    }, [products, searchQuery]);

    return (
        <div className="mt-16">
            <h1 className="text-3xl lg:text-4xl font-medium">All Products</h1>
            <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 items-center justify-center">
                {
                    filteredProducts
                        .filter((product) => product.inStock)
                        .map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))
                }
            </div>
        </div>
    );
};

export default Products;