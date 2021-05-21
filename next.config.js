const webpack = require('webpack')

const basePath = ON_GITHUB_PAGES ? '/abrahamsm' : ''
const isProd = process.env.NODE_ENV === 'production'
const assetPrefix = isProd ? '/portfolio_abraham' : ''

module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
    '/skills': { page: '/skills' },
    '/projects': { page: '/projecst' },
    '/about': { page: '/about' }
  }),
  assetPrefix: assetPrefix,
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix)
      })
    )

    return config
  }
}
