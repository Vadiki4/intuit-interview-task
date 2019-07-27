import React, { useContext } from 'react';
import { MachineContext } from '../FiniteMachine';
import Banner from '../Components/Banner';
import MovieList from '../Components/MovieList';

function MoviesPage() {
	const { ctx, updateState, currentState, transition } = useContext(
		MachineContext
	);
	return (
		<div className='page'>
			<Banner
				randomMovie={ctx.moviesList[(Math.random() * (20 - 0 + 1)) << 0]}
				transition={transition}
				currentState={currentState}
				updateState={updateState}
			/>
			<MovieList />
		</div>
	);
}

export default MoviesPage;
