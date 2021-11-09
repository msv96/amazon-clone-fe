import React from "react";

function Cartproduct({ e, handlePlus, handleMinus, handleRemove }) {
	return (
		<div className="cart_list" key={e._id}>
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
					disabled={e.qty < 2}
				>
					-
				</button>
				{e.qty}
				<button
					type="submit"
					className="cart_btn"
					onClick={() => handlePlus(e._id)}
				>
					+
				</button>
				<h3> Sub-total: ₹ {e.qty * e.price}</h3>
			</div>
		</div>
	);
}

export default Cartproduct;
