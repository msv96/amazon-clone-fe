import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "./DataContext";

function Homepage() {
	const context = useContext(DataContext);
	return (
		<header className="main-nav">
			<Link to="/">
				<div className="logo text-white">
					<span className="nav"></span>
					<span className="in">.in</span>
				</div>
			</Link>
			<div className="address text-white">
				<span className="loc"></span>
				<span className="hello">Hello</span>
				<br />
				<span className="select">Select your address</span>
			</div>
			<div className="search-flex">
				<select name="url" id="dropdown">
					<option value="all">All</option>
				</select>
				<input type="text" className="inp" />
				<div className="srch"></div>
			</div>
			<div className="signin text-white">
				<span className="hello">Hello, Sign in</span>
				<br />
				<span className="select">Accounts &amp; Lists</span>
			</div>
			<div className="signin text-white">
				<span className="hello">Returns</span>
				<br />
				<span className="select">&amp; Orders</span>
			</div>
			<Link to="/cart">
				<div className="signin text-white">
					<span className="count">{context.Data.length}</span>
					<span className="cart-icon"></span>
					<span className="cart">Cart</span>
				</div>
			</Link>
		</header>
	);
}

export default Homepage;
