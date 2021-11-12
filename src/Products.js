import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Oneproduct from "./components/Oneproduct";
import DataContext from "./DataContext";
import env from "./Settings";

function Products() {
	const { Data, setData } = useContext(DataContext);
	const [datas, setDatas] = useState([]);
	useEffect(() => {
		let fetch = async () => {
			try {
				let api = await axios.get(`${env.api}/products`);
				setDatas([...api.data]);
			} catch (error) {
				console.log(error);
			}
		};
		fetch();
	}, []);
	let handleCart = (id) => {
		let index = Data.findIndex((e) => e._id === id);
		if (index >= 0) {
			Data[index].qty--;
			Data[index].userqty += 1;
		} else {
			let filteredData = datas.filter((e) => e._id === id);
			filteredData[0].qty--;
			filteredData[0].userqty = 1;
			setData([...Data, filteredData[0]]);
		}
	};
	return (
		<>
			<h2 className="empty">Product List</h2>
			<div className="prod">
				{datas.map((el) => (
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
