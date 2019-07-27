import React from 'react';
import Back2 from '../media/back2.jpg';

const Banner = ({ randomMovie, transition, currentState, updateState }) => {
	const getTickets = () => {
		updateState(prevState => {
			return { ...prevState, movie: randomMovie };
		});
		transition(currentState, 'GET_TICKETS');
	};
	if (!randomMovie) {
		return (
			<div className='banner'>
				<img src={Back2} alt='Popular Now Movie Banner' />
				<div className='banner-cover' />
			</div>
		);
	}
	return (
		<div className='banner'>
			<img
				src={`https://image.tmdb.org/t/p/original${randomMovie.backdrop_path ||
					randomMovie.poster_path}`}
				alt='Popular Now Movie Banner'
			/>
			<div className='banner-cover' />
			<div className='popular-details'>
				<h4>{randomMovie.title}</h4>
				<div className='banner-movie tags'>
					<span className='banner-movie stars'>
						<i className='fa fa-star' />
						<i className='fa fa-star' />
						<i className='fa fa-star' />
						<i className='fa fa-star' />
						<i className='fa fa-star-half' />
					</span>
					<span className='banner-movie year'>
						{new Date(randomMovie.release_date).getFullYear()}
					</span>
					<span className='banner-movie time'>2h 13m</span>
				</div>
				<p>{randomMovie.overview}</p>
				<button onClick={getTickets}>
					<i className='far fa-plus-square' />
					Get Tickets Now
				</button>
			</div>
		</div>
	);
};

export default Banner;
