// src/App.js
import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

import Dashboard from './Screens/Dashboard'

class App extends Component {
	render() {
		return (
			<Router>
				<div style={{ 
					height: '100vh',
					display: 'flex'
				}}>
					<Route path="/dashboard" component={Dashboard} />
				</div>
			</Router>
		);
	}
}

export default App;