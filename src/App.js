import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { DataProvider } from "./DataContext";
import { ProductProvider } from "./ProductContext";
import Products from "./Products";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<DataProvider>
					<ProductProvider>
						<Route path="/" component={Products} exact />
					</ProductProvider>
				</DataProvider>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
