/** @format */

import React from 'react';
import ReactMarkdown from 'react-markdown';

const ListingBox = (props) => {
	const { title, text, images, username, permalink } = props;
	return (
		<div>
			<h1>{title}</h1>
			<div>
        <ReactMarkdown source={text}/>
      </div>
			<p>{images}</p>
			<p>{username}</p>
			<a href={permalink}>Permalink</a>
		</div>
	);
};

export default ListingBox;
