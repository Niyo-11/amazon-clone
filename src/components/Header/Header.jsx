import React from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
import LowerHeader from "./LowerHeader";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";

const Header = () => {
	return (
		<>
			<section>
				<div className={classes.header__container}>
					{/* logo section*/}
					<div className={classes.logo__container}>
						<Link to="/">
							<img
								src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
								alt="amazon logo"
							/>
						</Link>
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
						<div className={classes.language}>
							<Link to="#">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg"
									alt=""
								/>
							</Link>
							<select name="" id="">
								<option value="">Amh</option>
							</select>
						</div>

						{/* three components  */}
						<Link to="/auth">
							<div>
								<p>Sign In</p>
								<span>Account & Lists</span>
							</div>
						</Link>
						{/* orders  */}
						<Link to="/orders">
							<p>returns</p>
							<span>& Orders</span>
						</Link>
						{/* cart */}
						<div>
							<Link to="/cart" className={classes.cart}>
								<BiCart size={40} />
								<span>0</span>
								<p className={classes.txt}>Cart</p>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<LowerHeader/>
		</>
	);
};

export default Header;
