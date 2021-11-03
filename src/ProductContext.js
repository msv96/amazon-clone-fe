import React, { useState } from "react";

let ProductContext = React.createContext();

export default ProductContext;

export let ProductProvider = ({ children }) => {
	const [Product, setProduct] = useState([]);
	return (
		<ProductContext.Provider value={{ Product, setProduct }}>
			{children}
		</ProductContext.Provider>
	);
};
