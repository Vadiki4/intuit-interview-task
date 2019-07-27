import React from 'react';
import { FiniteMachine, Worker } from '../FiniteMachine';
import MoviesPage from '../Pages/Movies';
import CheckoutPage from '../Pages/Checkout';
import LoadingPage from '../Pages/Loading';
import SuccessPage from '../Pages/Success';
import ErrorPage from '../Pages/Error';
import ticketsPurchaseAppData from '../Utilities/ticketsPurchaseAppData.json';

function TicketsPurchase() {
	return (
		<FiniteMachine jsonData={ticketsPurchaseAppData}>
			<Worker component={LoadingPage} activeState='loading' />
			<Worker component={MoviesPage} activeState='moviesList' />
			<Worker component={CheckoutPage} activeState='checkout' />
			<Worker component={SuccessPage} activeState='success' />
			<Worker component={ErrorPage} activeState='failure' />
		</FiniteMachine>
	);
}

export default TicketsPurchase;
