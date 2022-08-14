import { renderToString } from '@vue/server-renderer'
import { createSSRApp } from 'vue'

const app = createSSRApp({
  data() {
    return {
      msg: 'Hello'
    }
  },
  template: `<div>{{ msg }}</div>`
})

;(async () => {
  const ctx = {}
  const html = await renderToString(app, ctx)
  console.log(ctx)
  console.log('html >>> ', html)
})()
