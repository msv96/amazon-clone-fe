import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "./DataContext";

function Cart() {
	const context = useContext(DataContext);
	let handleRemove = (id) => {
		let removedData = context.Data.filter((e) => e._id !== id);
		context.setData([...removedData]);
	};
	return (
		<>
			{context.Data.length === 0 ? (
				<div>
					<h2>Your Cart is Empty</h2>
				</div>
			) : (
				<div>
					{context.Data.map((e) => (
						<div className="cart_list">
							<div className="cart_head">{e.head}</div>
							<div className="cart_img_div">
								<img
									src={e.img}
									alt={e.head}
									className="cart_img"
								/>
							</div>
							<div>
								Price:
								<span className="cart_price_1">₹{e.price}</span>
							</div>
							<div>
								Quantity:<span>{e.qty}</span>
							</div>
							<button
								type="submit"
								className="cart_btn"
								onClick={() => handleRemove(e._id)}
							>
								Remove
							</button>
						</div>
					))}
				</div>
			)}
			<Link to="/" className="link">
				Home
			</Link>
		</>
	);
}

export default Cart;
