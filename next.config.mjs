/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/cinematic",
        permanent: true,
      },
    ];
  },
};
