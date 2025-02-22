import React from "react";
import classes from "./category.module.css"
import { categoryInfos } from "./categoryFullInfos.js";
import CategoryCard from "./CategoryCard/CategoryCard.jsx";

const Category = () => {
	return (
		<section className={classes.category__container}>
			{categoryInfos?.map((infos) => {
				return <CategoryCard key={infos.id} data={infos} />;
			})}
		</section>
	);
};

export default Category;
