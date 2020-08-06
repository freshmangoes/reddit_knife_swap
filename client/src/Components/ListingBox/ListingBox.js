/** @format */

import React from 'react';
import ReactMarkdown from 'react-markdown';

const ListingBox = (props) => {
	let { title, text, images, username, link, displayStatus, data_status } = props;

	return (
		<div data_status={data_status}>
			<h1>{title} - {displayStatus}</h1>
			<h5>{username}</h5>
			<div>
        <ReactMarkdown source={text}/>
      </div>
			<p>{images}</p>
			<button>
				<a href={link}>Link</a>
			</button>
			<hr/>
		</div>
	);
};

export default ListingBox;
