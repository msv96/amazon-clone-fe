import React from "react";

function Cartproduct({ e, handlePlus, handleMinus, handleRemove }) {
	return (
		<div className="cart_list">
			<img src={e.img} alt={e.head} className="cart_img" />
			<div className="cart_head">{e.head}</div>
			<div className="cart_rate">
				<h3>Price: ₹ {e.price}</h3>
				<button
					type="submit"
					className="cart_btn"
					onClick={() => handleRemove(e._id)}
				>
					Remove item
				</button>
			</div>
			<div className="cart_qty">
				Quantity:
				<button
					type="submit"
					className="cart_btn"
					onClick={() => handleMinus(e._id)}
					disabled={e.userqty <= 1}
				>
					-
				</button>
				{e.userqty}
				<button
					type="submit"
					className="cart_btn"
					onClick={() => handlePlus(e._id)}
					disabled={e.qty <= 0}
				>
					+
				</button>
				<h3> Sub-total: ₹ {e.userqty * e.price}</h3>
			</div>
		</div>
	);
}

export default Cartproduct;
