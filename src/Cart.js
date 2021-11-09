import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Cartproduct from "./components/Cartproduct";
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
		<div className="cart-main">
			<h2>Shopping Cart</h2>
			{context.Data.length === 0 ? (
				<div className="empty">
					<h3>Your Cart is Empty</h3>
					<button
						type="submit"
						className="link-4"
						onClick={() => history.push("/")}
					>
						Continue Shopping
					</button>
				</div>
			) : (
				<>
					<div>
						<span className="header">
							Total: ₹{" "}
							{context.Data.map((e) => e.qty * e.price).reduce(
								(a, b) => a + b
							)}
						</span>
						<button
							type="submit"
							className="link-5"
							onClick={() => history.push("/order")}
						>
							Place Order
						</button>
					</div>
					{context.Data.map((e) => (
						<Cartproduct
							key={e._id}
							e={e}
							handlePlus={handlePlus}
							handleMinus={handleMinus}
							handleRemove={handleRemove}
						/>
					))}
				</>
			)}
		</div>
	);
}

export default Cart;
