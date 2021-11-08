import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./Cart";
import { DataProvider } from "./DataContext";
import Homepage from "./Homepage";
import Products from "./Products";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<DataProvider>
                    <Homepage />
					<Route path="/" component={Products} exact />
                    <Route path="/cart" component={Cart} exact/>
				</DataProvider>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
