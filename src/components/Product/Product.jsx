import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./Products/ProductCard";
import classes from "./product.module.css"

const Product = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		axios.get("https://fakestoreapi.com/products")
			.then((res) => {
				setProducts(res.data);
			})
			.catch((err) => {
				console.log("Error:", err);
			});
	}, []);
	return (
		<section className={classes.products__container}>
			{products?.map((singleProduct) => {
				return <ProductCard product={singleProduct} key={singleProduct.id} />;
			})}
		</section>
	);
};

export default Product;
