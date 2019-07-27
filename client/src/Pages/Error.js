import React, { useContext } from 'react';
import { MachineContext } from '../FiniteMachine';
import MiniBanner from '../Components/MiniBanner';

function CheckoutPage(props) {
	const { errorMessage = 'General Error' } = props;
	const { updateState, currentState, transition, lastState } = useContext(
		MachineContext
	);
	const back = () => {
		if (lastState) {
			updateState(prevState => {
				return { ...prevState, error: null };
			});
			transition(currentState, 'RETRY_CHECKOUT');
		} else {
			updateState(prevState => {
				return { ...prevState, error: null };
			});
			transition(currentState, 'RETRY_MOVIES');
		}
	};

	return (
		<div className='page simple' style={{ height: window.innerHeight }}>
			<MiniBanner />
			<div className='container'>
				<i className='fa fa-exclamation-triangle' />
				<h1>Error Occured</h1>
				<h3>{errorMessage}</h3>
				<button onClick={back}>Retry</button>
			</div>
		</div>
	);
}

export default CheckoutPage;
