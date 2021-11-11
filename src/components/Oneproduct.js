import React, { useContext } from "react";
import DataContext from "../DataContext";

function Oneproduct({ data, handleCart }) {
	const { Data } = useContext(DataContext);
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
					disabled={
						data.qty < 1 || Data.some((e) => e._id === data._id)
					}
				>
					{data.qty < 1 || Data.some((e) => e.userqty === data.qty)
						? "Out of Stock"
						: "Add to Cart"}
				</button>
			</div>
		</div>
	);
}

export default Oneproduct;
