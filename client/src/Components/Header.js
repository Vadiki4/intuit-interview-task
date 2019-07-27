import React from 'react';

function Header() {
	return (
		<div className='header'>
			<div className='header-left'>
				<h3>Brand</h3>
			</div>
			<div className='header-right'>
				<input type='text' placeholder='Search' name='search' />
				<span>
					<i className='fas fa-bell' />
					<i className='fas fa-shopping-cart' />
				</span>
			</div>
		</div>
	);
}

export default Header;
