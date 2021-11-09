import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import DataContext from "./DataContext";
import env from "./Settings";

function Placeorder() {
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [pincode, setPincode] = useState("");
	const history = useHistory();
	const context = useContext(DataContext);
	let handleSubmit = async (e) => {
		e.preventDefault();
		try {
			let api = await axios.post(`${env.api}/orders`, {
				name,
				address,
				city,
				pincode,
				items: context.Data,
			});
			if (api.data.code) {
				setName("");
				setAddress("");
				setCity("");
				setPincode("");
				context.setData([]);
                history.push('/')
			} else {
                alert('Order could not be placed right now. Please try again after sometime.')
            }
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<form onSubmit={(e) => handleSubmit(e)} className="order">
				<h2 className="shipping">Shipping Details</h2>
				<label htmlFor="name" className="label">
					Name
					<sup className="red">*</sup>
				</label>
				<input
					type="text"
					name="name"
					id="name"
					className="input2"
					autoComplete="off"
					required
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<label htmlFor="address" className="label">
					Address
					<sup className="red">*</sup>
				</label>
				<input
					type="text"
					name="address2"
					id="address2"
					className="input2"
					autoComplete="off"
					required
					value={address}
					onChange={(e) => setAddress(e.target.value)}
				/>
				<label htmlFor="city" className="label">
					City
					<sup className="red">*</sup>
				</label>
				<input
					type="text"
					name="city"
					id="city"
					className="input2"
					autoComplete="off"
					required
					value={city}
					onChange={(e) => setCity(e.target.value)}
				/>
				<label htmlFor="pincode" className="label">
					Pincode
					<sup className="red">*</sup>
				</label>
				<input
					type="number"
					name="pincode"
					id="pincode"
					className="input2"
					autoComplete="off"
					required
					value={pincode}
					onChange={(e) => setPincode(e.target.value)}
				/>
				<input
					type="submit"
					value="Confirm Order"
					className="confirm"
				/>
				<input
					type="button"
					value="Cancel"
					className="confirm"
					onClick={() => history.push("/")}
				/>
			</form>
		</div>
	);
}

export default Placeorder;
