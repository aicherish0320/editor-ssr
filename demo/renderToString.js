const { h, createSSRApp } = require('vue')
const { renderToString } = require('@vue/server-renderer')

const app = createSSRApp({
  render() {
    return h('h1', 'Hello World')
  }
})

;(async () => {
  const html = await renderToString(app)
  console.log('html >>> ', html)
})()
