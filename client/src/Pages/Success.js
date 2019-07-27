import React, { useContext } from 'react';
import { MachineContext } from '../FiniteMachine';
import MiniBanner from '../Components/MiniBanner';

function CheckoutPage() {
	const { updateState, currentState, transition } = useContext(MachineContext);
	const back = () => {
		updateState(prevState => {
			return { ...prevState, error: null };
		});
		transition(currentState, 'RETURN');
	};

	return (
		<div className='page simple' style={{ height: window.innerHeight }}>
			<MiniBanner />
			<div className='container'>
				<h1>Thank you for enjoying movies with us!</h1>
				<button onClick={back}>Back to movies list</button>
			</div>
		</div>
	);
}

export default CheckoutPage;
