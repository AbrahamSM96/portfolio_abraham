const basePath = ON_GITHUB_PAGES ? '/abrahamsm' : ''
//const assetPrefix = ON_GITHUB_PAGES ? '/abrahamsm/' : ''
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPlugins([
  {
    basePath,
    assetPrefix: isProd
      ? 'https://cdn.statically.io/gh/AbrahamSM96/https://abrahamsm96.github.io/portfolio_abraham/master/'
      : ''
  }
])
