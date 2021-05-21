const basePath = ON_GITHUB_PAGES ? '/abrahamsm' : ''
const assetPrefix = ON_GITHUB_PAGES ? '/abrahamsm/' : ''

module.exports = withPlugins([
  {
    basePath,
    assetPrefix
  }
])
