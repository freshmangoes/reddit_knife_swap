/** @format */

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = (app) => {
	// DEBUG - test API endpoint
	// const target = `https://jsonplaceholder.typicode.com/posts`;
	const target = `https://www.reddit.com/r/knife_swap.json?&limit=100&raw_json=1`;
	app.use(
		'/api',
		createProxyMiddleware({
			target: target,
			changeOrigin: true,
		})
	);
};
