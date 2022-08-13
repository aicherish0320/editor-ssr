const { createSSRApp } = require('vue')
const { renderToStream } = require('@vue/server-renderer')

const app = createSSRApp({
  data: () => ({ msg: 'Hello' }),
  template: `<h1>{{ msg }}</h1>`
})

const stream = renderToStream(app)

let ret = ''
stream.on('data', (data) => {
  ret += data
})
stream.on('end', () => {
  console.log(ret)
})
