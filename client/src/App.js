import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Redirect,
	Route
} from 'react-router-dom';
import TicketsPurchase from './Pages/TicketsPurchase';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './index.scss';

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path='/' exact component={TicketsPurchase} />
				<Redirect to='/' />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
