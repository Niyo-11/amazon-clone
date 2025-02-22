import React from "react";
import classes from "./header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
	return (
		<>
			<section>
				<div className={classes.header__container}>
					{/* logo section*/}
					<div className={classes.logo__container}>
						<a href="">
							<img
								src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
								alt="amazon logo"
							/>
						</a>
						<div className={classes.delivery}>
							<span>
								<SlLocationPin />
							</span>
							<div>
								<p>Delivered to</p>
								<span>Ehtiopia</span>
							</div>
						</div>
					</div>

					{/* search section*/}
					<div className={classes.search}>
						<select name="" id="">
							<option value="">All</option>
						</select>
						<input type="text" />
						<BsSearch size={25} />
					</div>
					{/* other section */}
					<div className={classes.order__container}>
						<a href="">
							{/* <img
								src="https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg"
								alt=""
							/> */}
						</a>

						<select name="" id="">
							<option value="">Amh</option>
						</select>

						{/* three components  */}
						<a href="">
							<div>
								<p>Sign In</p>
								<span>Account & Lists</span>
							</div>
						</a>
						{/* orders  */}
						<a href="">
							<p>returns</p>
							<span>& Orders</span>
						</a>
						{/* cart */}
						<a to={"/cart"}>
							<FiShoppingCart />
							<span>0</span>
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default Header;
