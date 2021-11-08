import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import DataContext from "./DataContext";

function Cart() {
	const context = useContext(DataContext);
	const history = useHistory();
	let handleRemove = (id) => {
		let index = context.Data.findIndex((e) => e._id === id);
		context.Data.splice(index, 1);
		context.setData([...context.Data]);
	};
	let handleMinus = (id) => {
		let index = context.Data.findIndex((e) => e._id === id);
		context.Data[index].qty--;
		context.setData([...context.Data]);
	};
	let handlePlus = (id) => {
		let index = context.Data.findIndex((e) => e._id === id);
		context.Data[index].qty++;
		context.setData([...context.Data]);
	};
	return (
		<>
			{context.Data.length === 0 ? (
				<div className="empty">
					<h2>Your Cart is Empty</h2>
					<button
						type="submit"
						className="link"
						onClick={() => history.push("/")}
					>
						Home
					</button>
				</div>
			) : (
				<div className="cart-main">
					<h2>Shopping Cart</h2>
					<h2>
						Total: ₹{" "}
						{context.Data.map((e) => e.qty * e.price).reduce(
							(a, b) => a + b
						)}
						<button
							type="submit"
							className="link-4"
							onClick={() => history.push("/")}
						>
							Place Order
						</button>
					</h2>
					{context.Data.map((e) => (
						<div className="cart_list" key={e._id}>
							<img
								src={e.img}
								alt={e.head}
								className="cart_img"
							/>
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
					))}
				</div>
			)}
		</>
	);
}

export default Cart;
