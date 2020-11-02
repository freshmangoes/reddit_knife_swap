/** @format */

import React from 'react';
import ReactMarkdown from 'react-markdown';

const ListingBox = (props) => {
	let {
		title,
		text,
		images,
		username,
		link,
		displayStatus,
		data_status,
	} = props;

	return (
		<div data_status={data_status} data_title={title}>
			<h1>
				<a href={link}>{title}</a> - {displayStatus}
			</h1>
			<h5>
				Posted by <a href={`https://reddit.com/u/${username}`}>{username}</a>
			</h5>
			<div>
				<ReactMarkdown source={text} />
			</div>
			<p>{images}</p>
			<hr />
		</div>
	);
};

export default ListingBox;
