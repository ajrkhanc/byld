module.exports = {
  reactStrictMode: true,

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  async redirects() {
    return [
      {
        source: '/coaching/become-a-professional-coach',
        destination: '/coaching/become-a-professional-coach-marketing',
        permanent: true,
      },

      

    ]
  },
}


