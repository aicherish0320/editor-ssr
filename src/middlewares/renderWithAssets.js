const path = require('path')
const fse = require('fs-extra')

const files = fse.readdirSync(path.resolve(__dirname, '..', 'public'))
const cssFiles = files.filter((f) => f.lastIndexOf('.css') > 0)
const jsFiles = files.filter((f) => f.lastIndexOf('.js') > 0)

let cssLinks = []
let jsLinks = []

// dev 环境，直接用本地文件，生成环境，加载 CDN 文件
cssLinks = cssFiles.map((f) => `/${f}`)
jsLinks = jsFiles.map((f) => `/${f}`)

async function renderWithAssets(ctx, next) {
  ctx.renderWithAssets = async (...args) => {
    if (!Array.isArray(args)) {
      throw new Error('参数格式错误')
    }
    if (!args[0]) throw new Error('args[0] 为空')
    if (typeof args[1] !== 'object') args[1] = {}
    Object.assign(args[1], {
      ASSETS_CSS_FILES: cssLinks,
      ASSETS_JS_FILES: jsLinks
    })

    await ctx.render.apply(null, args)
  }
  await next()
}

module.exports = renderWithAssets
