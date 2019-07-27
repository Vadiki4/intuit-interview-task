import React from 'react';

export default function calculateStars(votes) {
	const stars = [];
	if (votes === 0 || !votes) {
		stars.push(<i className='fa fa-star empty' key='1' />);
	} else if (votes > 0 && votes <= 2) {
		stars.push(<i className='fa fa-star' key='1' />);
	} else if (votes > 2 && votes <= 4) {
		stars.push(<i className='fa fa-star' key='1' />);
		stars.push(<i className='fa fa-star' key='2' />);
	} else if (votes > 4 && votes <= 6) {
		stars.push(<i className='fa fa-star' key='1' />);
		stars.push(<i className='fa fa-star' key='2' />);
		stars.push(<i className='fa fa-star' key='3' />);
	} else if (votes > 6 && votes <= 8) {
		stars.push(<i className='fa fa-star' key='1' />);
		stars.push(<i className='fa fa-star' key='2' />);
		stars.push(<i className='fa fa-star' key='3' />);
		stars.push(<i className='fa fa-star' key='4' />);
	} else if (votes > 8 && votes <= 10) {
		stars.push(<i className='fa fa-star' key='1' />);
		stars.push(<i className='fa fa-star' key='2' />);
		stars.push(<i className='fa fa-star' key='3' />);
		stars.push(<i className='fa fa-star' key='4' />);
		stars.push(<i className='fa fa-star' key='5' />);
	} else {
		stars.push(<i className='fa fa-star empty' key='1' />);
	}
	return stars;
}
