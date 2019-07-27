import React, { useEffect, useContext } from 'react';
import Api from '../Utilities/Api';
import { MachineContext } from '../FiniteMachine';

function Loading() {
	const context = useContext(MachineContext);
	const { updateState, transition, currentState } = context;
	useEffect(() => {
		const getMoviesFromAPI = async () => {
			const response = await Api.movies().getMoviesList();
			if (response.status === 200) {
				updateState(prevState => {
					return { ...prevState, moviesList: response.data.results };
				});
				transition(currentState, 'RESOLVE');
			} else {
				updateState(prevState => {
					return { ...prevState, error: response };
				});
				transition(currentState, 'REJECT');
			}
		};

		getMoviesFromAPI();
	}, []);

	return (
		<div className='page loading'>
			<div className='loading-box'>
				<i className='fas fa-spinner fa-spin' />
				Loading
			</div>
		</div>
	);
}

export default Loading;
