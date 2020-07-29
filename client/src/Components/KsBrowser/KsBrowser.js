import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
const KsBrowser = () => {
	const [state, setState] = useState({});
	const test = async () => {
		try {
			const res = await API.search();
			setState(res.data);
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
		</div>);
};

export default KsBrowser;
