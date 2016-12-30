import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from "react-router";

import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard.js";


const app = document.getElementById('app');
ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Layout}>
			<IndexRedirect to="/" />
			<IndexRoute component={Dashboard}></IndexRoute>
		</Route>
	</Router>
	, app);

