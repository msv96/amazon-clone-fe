import React from "react";

function Oneproduct({ data, handleCart }) {
	return (
		<div className="prod_list">
			<div className="prod_img_div">
				<img src={data.img} alt={data.head} className="prod_img" />
			</div>
			<div className="prod_head">{data.head}</div>
			<div className="prod_grid">
				<span className="prod_mrp">M.R.P.:</span>
				<span className="prod_mrp_1">₹{data.mrp}</span>
				<span className="prod_price">Price:</span>
				<span className="prod_price_1">₹{data.price}</span>
				<span className="prod_save">You Save:</span>
				<span>
					₹{data.mrp - data.price} (
					{Math.round((1 - data.price / data.mrp) * 100)}%)
				</span>
				<button
					type="submit"
					className="prod_btn"
					onClick={() => handleCart(data._id)}
				>
					Add to Cart
				</button>
			</div>
		</div>
	);
}

export default Oneproduct;
