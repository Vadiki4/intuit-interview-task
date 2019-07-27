import React, { useState, useContext } from 'react';
import { MachineContext } from '../FiniteMachine';
import Api from '../Utilities/Api';
import Input from '../Components/Input';

function CheckoutForm(props) {
	const { getPreviousPage } = props;
	const notAlowed = ['date', 'name', 'price'];
	const { ctx, updateState, currentState, transition } = useContext(
		MachineContext
	);
	const { movie } = ctx;
	const initialState = {
		name: (movie && movie.title) || '',
		date: (movie && movie.release_date) || null,
		price: 400,
		quantity: 1,
		card: ''
	};
	const [payload, setPayload] = useState(initialState);
	const [error, setError] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const buyTicket = async () => {
		const result = isValidForm(payload);
		if (result) {
			setIsLoading(true);
			try {
				const response = await Api.movies().buyTickets(payload);
				if (response.status === 200) {
					transition(currentState, 'FINISH');
				}
			} catch (err) {
				updateState(prevState => {
					return { ...prevState, error: { errorMessage: 'Wrong Card Number' } };
				});
				transition(currentState, 'ERROR');
			}
		}
	};

	const onChange = ({ target }) => {
		const { name, value } = target;
		if (notAlowed.indexOf(name) >= 0) return;
		if (name === 'quantity') {
			setPayload(prevPayload => {
				return {
					...prevPayload,
					[name]: value > 5 ? 5 : value < 1 ? 1 : value
				};
			});
		} else {
			setPayload(prevPayload => {
				return {
					...prevPayload,
					[name]: value
				};
			});
		}
	};

	const isValidForm = () => {
		for (const item in payload) {
			if (!payload[item]) {
				setError(item);
				return false;
			}
		}
		return true;
	};

	const { name, date, price, quantity, card } = payload;
	return (
		<div className='checkout-form'>
			<form>
				<h2>Movie one click away!</h2>
				<Input
					type='text'
					disabled
					name='name'
					id='movie-name'
					required
					label='Movie Name'
					error={error}
					onChange={onChange}
					value={name}
				/>
				<div className='inliner'>
					<Input
						type='date'
						name='date'
						id='movie-date'
						required
						label='Date'
						error={error}
						onChange={onChange}
						value={date}
					/>
					<Input
						type='price'
						name='price'
						required
						label='Price'
						error={error}
						onChange={onChange}
						id='movie-price'
						value={price}
					/>
				</div>
				<div className='inliner'>
					<Input
						type='text'
						name='card'
						required
						label='Credit Card Number'
						error={error}
						value={card}
						errorMessage='Enter a correct credit card number'
						onChange={onChange}
						id='movie-card'
						maxLength='16'
					/>
					<Input
						type='number'
						name='quantity'
						required
						label='Quantity'
						error={error}
						value={quantity}
						onChange={onChange}
						id='movie-quantity'
						max='5'
						min='1'
					/>
				</div>
				<div className='inliner'>
					<button type='button' onClick={getPreviousPage}>
						Cancel and Go Back
					</button>
					<button type='button' className='buy' onClick={buyTicket}>
						{isLoading ? <i className='fa fa-spinner fa-spin' /> : null}
						Buy Tickets
					</button>
				</div>
			</form>
			<p>** Enter 0000 card number to get an error</p>
		</div>
	);
}

export default CheckoutForm;
