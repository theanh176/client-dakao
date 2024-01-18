/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	images: {
		domains: [
			"api.fostech.vn",
			"client-dakao.vercel.app",
			"api.goodapp.vn",
		],
	},
};

module.exports = nextConfig;
