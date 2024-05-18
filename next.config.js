const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const options = {
  reactStrictMode: true,
  swcMinify: false,
  // 옵션은 자유롭게 넣어주세요.
};

module.exports = withContentlayer(options);
