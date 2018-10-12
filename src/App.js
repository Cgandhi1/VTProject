import React, { Component } from 'react';
import './App.css';
import Content from './Content/Content';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends Component {
	render() {
		var url = require('url');
		var urlValue = 'http://en.wikipedia.org';

		var parseUrl = url.parse(urlValue, true, true);

		return (
			<Router>
				<Route path={url} exact component={Content} />
			</Router>
		);
	}
}

export default App;
