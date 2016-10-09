import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory} from "react-router";

import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";

const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Dashboard}></IndexRoute>
			<Route path="dashboard(/:article)" name="dashboard"component={Dashboard}></Route>
		</Route>
	</Router>
, app);
