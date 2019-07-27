import React from 'react';
import calculateStars from '../Utilities/calculateStars';

function MoviePreview({ movie }) {
	if (!movie) return null;
	return (
		<div className='movie-overview'>
			<img
				src={`https://image.tmdb.org/t/p/original${movie.poster_path ||
					movie.backdrop_path}`}
				alt={`Image poster of ${movie.title}`}
			/>
			<h4>{movie.title}</h4>
			<span>{calculateStars(movie.vote_average)}</span>
			<span>{new Date(movie.release_date).toLocaleDateString('he')}</span>
			<p>{movie.overview}</p>
		</div>
	);
}

export default MoviePreview;
