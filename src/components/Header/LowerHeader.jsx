import React from "react";
import classes from "./header.module.css";
import { AiOutlineMenu } from "react-icons/ai";

const LowerHeader = () => {
	return (
		<div className={classes.lower__container}>
			<ul>
				<li>
					<AiOutlineMenu size={20} />
					<p>All</p>
				</li>
				<li>Today's Deals</li>
				<li>Customer Service</li>
				<li>Registry</li>
				<li>Gift Cards</li>
				<li>Sell</li>
			</ul>
		</div>
	);
};

export default LowerHeader;
