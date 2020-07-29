/** @format */

import axios from 'axios';
// const BASE_URL = `https://reddit.com/r/knife_swap.json?&limit=25&raw_json=1`;
// const BASE_URL = `/api/r/knife_swap.json?&limit=25&raw_json=1`;
const BASE_URL = `/api`;

export default {
	search: function () {
		return axios.get(BASE_URL);
	},
};
