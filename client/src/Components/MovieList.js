import React, { useEffect, useContext } from 'react';
import { MachineContext } from '../FiniteMachine';
import MovieItem from '../Components/MovieItem';

function MoviesPage() {
	const { ctx, updateState, currentState, transition } = useContext(
		MachineContext
	);
	useEffect(() => {
		let timeout;
		const smoothAnimate = event => {
			if (timeout) {
				window.cancelAnimationFrame(timeout);
			}
			timeout = window.requestAnimationFrame(function() {});
		};

		window.addEventListener('scroll', smoothAnimate, false);

		return () => {
			window.removeEventListener('scroll', smoothAnimate);
		};
	}, []);
	return (
		<div className='movies'>
			<h1>Now Playing Movies</h1>
			<div className='movieList'>
				{ctx.moviesList.map(movie => (
					<MovieItem
						movie={movie}
						key={movie.id}
						transition={transition}
						currentState={currentState}
						updateState={updateState}
					/>
				))}
			</div>
		</div>
	);
}

export default MoviesPage;
