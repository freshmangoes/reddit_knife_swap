/** @format */

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = (app) => {
	app.use(
		'/api',
		createProxyMiddleware({
			target: `https://reddit.com/r/knife_swap.json?&limit=25&raw_json=1`,
			changeOrigin: true,
		})
	);
};
