import React, { useEffect } from 'react';
import calculateStars from '../Utilities/calculateStars';
import ImagePlaceholder from '../media/placeholder.png';

function MovieItem({ movie, transition, currentState, updateState }) {
	useEffect(() => {
		let timeout;
		const smoothScroll = event => {
			if (timeout) {
				window.cancelAnimationFrame(timeout);
			}
			timeout = window.requestAnimationFrame(function() {});
		};

		window.addEventListener('mouseover', smoothScroll, false);

		return () => {
			window.removeEventListener('mouseover', smoothScroll);
		};
	}, []);

	function getTicket(movie) {
		updateState(prevState => {
			return { ...prevState, movie };
		});
		transition(currentState, 'GET_TICKETS');
	}
	return (
		<div className='movieItem' key={movie.id}>
			<div className='movie-poster'>
				{movie.poster_path ? (
					<img
						src={`https://image.tmdb.org/t/p/original${movie.poster_path ||
							movie.backdrop_path}`}
						alt={`Movie Poster of ${movie.title}`}
					/>
				) : (
					<img src={ImagePlaceholder} alt='Movie Placeholder' />
				)}
				<div className='poster-cover' />
			</div>
			<div className='movie-details'>
				<div className='movie-tags'>
					<h5>{movie.title}</h5>
					<span>{calculateStars(movie.vote_average)}</span>
					<span>{new Date(movie.release_date).toLocaleDateString('he')}</span>
					<button onClick={() => getTicket(movie)}>
						Get Ticket <i className='fa fa-ticket-alt' />
					</button>
				</div>
				<div className='movie-desc'>
					<p>{movie.overview.substr(0, 150) + '...'}</p>
				</div>
			</div>
		</div>
	);
}

export default MovieItem;
