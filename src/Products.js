import React, { useContext, useEffect } from "react";
import el from "./roducts";
import Homepage from "./Homepage";
import DataContext from "./DataContext";

function Products() {
	const context = useContext(DataContext);
	useEffect(() => {
		context.setData([...el]);
	}, []);

	return (
		<>
			<Homepage />
		</>
	);
}

export default Products;
