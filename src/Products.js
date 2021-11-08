import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Oneproduct from "./components/Oneproduct";
import DataContext from "./DataContext";
import env from "./Settings";

function Products() {
	const context = useContext(DataContext);
	const [data, setData] = useState([]);
	useEffect(() => {
		let fetch = async () => {
			let api = await axios.get(`${env.api}`);
			setData([...api.data]);
		};
		fetch();
	}, []);
	let handleCart = (id) => {
		let index = context.Data.findIndex((e) => e._id === id);
		if (index >= 0) {
			context.Data[index].qty++;
		} else {
			let filteredData = data.filter((e) => e._id === id);
			filteredData[0].qty++;
			context.setData([...context.Data, filteredData[0]]);
		}
	};
	return (
		<>
			<h2 className="empty">Product List</h2>
			<div className="prod">
				{data.map((el) => (
					<Oneproduct
						key={el._id}
						data={el}
						handleCart={handleCart}
					/>
				))}
			</div>
		</>
	);
}

export default Products;
