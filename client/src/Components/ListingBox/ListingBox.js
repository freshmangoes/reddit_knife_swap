/** @format */

import React from 'react';
import ReactMarkdown from 'react-markdown';

const ListingBox = (props) => {
	let {
		title,
		text,
		// images,
		username,
		link,
		displayStatus,
		data_status,
	} = props;

	return (
		<div className='listing' data_status={data_status} data_title={title}>
			<h1 className='listing-title'>
				<a href={link} target='_blank' rel='noopener noreferrer'>
					{title}
				</a>{' '}
				- {displayStatus}
			</h1>
			<h5 className='listing-username'>
				Posted by{' '}
				<a
					href={`https://reddit.com/u/${username}`}
					target='_blank'
					rel='noopener noreferrer'
				>
					{username}
				</a>
			</h5>
			<div className='listing-text'>
				<ReactMarkdown source={text} />
			</div>
			{/* <p>{images}</p> */}
			<hr />
		</div>
	);
};

export default ListingBox;
