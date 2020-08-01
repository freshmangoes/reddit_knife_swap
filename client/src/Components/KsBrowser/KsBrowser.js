/** @format */

import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import ListingBox from '../ListingBox/ListingBox';
const KsBrowser = () => {
	const [state, setState] = useState([]);

	const test = async () => {
		try {
			const res = await API.search();
			const newState = res.data.data.children;
			setState(newState);
		} catch (err) {
			console.log('Err in KsBrowser.js');
			console.log('err', err);
		}
	};

	useEffect(() => {
		test();
	}, []);

	return (
		<div>
			{console.log(state)}
			{state.map((e) => {
				return (
					<ListingBox
						title={e.data.title}
						text={e.data.selftext}
						images='http://placehold.jp/150x150.png'
						username={e.data.author}
						permalink={e.data.url}
					/>
				);
				// return console.log(e);
			})}
		</div>
	);
};

export default KsBrowser;
