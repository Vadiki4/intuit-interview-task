import React, { useContext } from 'react';
import { MachineContext } from '../FiniteMachine';
import MiniBanner from '../Components/MiniBanner';
import MoviePreview from '../Components/MoviePreview';
import CheckoutForm from '../Components/CheckoutForm';

function CheckoutPage() {
	const { ctx, updateState, currentState, transition } = useContext(
		MachineContext
	);

	const getPreviousPage = () => {
		updateState(prevState => {
			return { ...prevState, error: null };
		});
		transition(currentState, 'RETURN');
	};

	return (
		<div className='page checkout' style={{ height: window.innerHeight }}>
			<MiniBanner />
			<div className='checkout-container'>
				<h1>Checkout Page</h1>
				<div className='checkout-details'>
					<MoviePreview movie={ctx.movie} />
					<CheckoutForm getPreviousPage={getPreviousPage} />
				</div>
			</div>
		</div>
	);
}

export default CheckoutPage;
