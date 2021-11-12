import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Cartproduct from "./components/Cartproduct";
import DataContext from "./DataContext";

function Cart() {
	const { Data, setData } = useContext(DataContext);
	const history = useHistory();
	let handleRemove = (id) => {
		let index = Data.findIndex((e) => e._id === id);
		Data.splice(index, 1);
		setData([...Data]);
	};
	let handleMinus = (id) => {
		let index = Data.findIndex((e) => e._id === id);
		Data[index].qty++;
		Data[index].userqty -= 1;
		setData([...Data]);
	};
	let handlePlus = (id) => {
		let index = Data.findIndex((e) => e._id === id);
		Data[index].qty--;
		Data[index].userqty += 1;
		setData([...Data]);
	};
	return (
		<div className="cart-main">
			<h2>Shopping Cart</h2>
			{Data.length === 0 ? (
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
							{Data.map((e) => e.userqty * e.price).reduce(
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
						<button
							type="submit"
							className="link-4"
							onClick={() => history.push("/")}
						>
							Back
						</button>
					</div>
					{Data.map((e) => (
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
