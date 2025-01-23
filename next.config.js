module.exports = {
    compiler: {
      styledComponents: true,
    },
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'cloudflare-ipfs.com',
        port: '',
        pathname: '/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/**',
      },
      {
        protocol: 'https',
        hostname: 'disk.yandex.ru',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '*',
        },
    ],
  },
  //   experimental: {
  //     ppr: "incremental"
  // },
    devIndicators: {
      appIsrStatus: true,
      buildActivity: true,
      buildActivityPosition: "bottom-right",
  }
  }
  