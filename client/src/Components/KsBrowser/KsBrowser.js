/** @format */

import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import ListingBox from '../ListingBox/ListingBox';
const KsBrowser = () => {
	const [state, setState] = useState([]);

	const test = async () => {
		try {
			const res = await API.search();

			let newState = [];

			// take relevant data from res
			res.data.data.children.map((e) => {
				if (e.data.author !== 'AutoModerator') {
					let title = e.data.title,
						text = e.data.selftext,
						username = e.data.author,
						link = e.data.url,
						displayStatus = e.data.link_flair_text;

					// for conditional rendering
					let dataStatus;
					if (displayStatus) {
						dataStatus = displayStatus;
					} else {
						dataStatus = 'Available';
						displayStatus = 'Available';
					}

					newState.push({
						title,
						text,
						username,
						link,
						displayStatus,
						dataStatus,
					});
				}
			});
			console.log('newState::', newState);
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
			<span>
				<h5>Sort by:</h5>
				<button>Available</button>
				<button>Sold</button>
				<button>Price Reduced</button>
			</span>
			{console.log(state)}
			{state.map((e) => {
				// filters out automoderator posts
				return (
					<ListingBox
						title={e.title}
						text={e.text}
						images='http://placehold.jp/150x150.png'
						username={e.username}
						link={e.link}
						displayStatus={e.displayStatus}
						data_status={e.dataStatus}
					/>
				);
			})}
		</div>
	);
};

export default KsBrowser;
