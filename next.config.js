/** @type {import('next').NextConfig} */

// const nextConfig = {
// }

const redirects = async () => {
  return [
    {
      source: '/',
      destination: '/',
      permanent: true,
    },
  ]
}

module.exports = {
  // nextConfig,
  redirects,
}
