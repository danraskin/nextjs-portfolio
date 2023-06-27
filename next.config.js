/** @type {import('next').NextConfig} */

const nextConfig = {
}

const redirects = async () => {
  return [
    {
      source: '/',
      destination: '/projects',
      permanent: true,
    },
  ]
}

module.exports = {
  nextConfig,
  redirects,
}
