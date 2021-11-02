import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Homepage} exact />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
