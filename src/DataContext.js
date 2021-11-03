import React, { useState } from "react";

let DataContext = React.createContext();

export default DataContext;

export let DataProvider = ({ children }) => {
	const [Data, setData] = useState([]);
	return (
		<DataContext.Provider value={{ Data, setData }}>
			{children}
		</DataContext.Provider>
	);
};
