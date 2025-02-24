import React, { useState, useEffect } from "react";
import classes from "./results.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../components/Product/Products/ProductCard";

const Results = () => {
	const [results, setResults] = useState([]);
	const { categoryName } = useParams();
	// console.log(categoryName);
	useEffect(() => {
		axios
			.get(`${productUrl}/products/category/${categoryName}`)
			.then((res) => {
				// console.log(res.data);
				setResults(res.data);
			})
			.catch((err) => {
				console.log("Error:", err);
			});
	}, [categoryName]);

	// console.log(categoryName);
	return (
		<LayOut>
			<section>
				<h1 style={{ padding: "30px" }}>Results</h1>
				<p style={{ padding: "30px" }}>Category/{categoryName}</p>
				<hr />
				<div className={classes.products__container}>
					{results?.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</section>
		</LayOut>
	);
};

export default Results;
