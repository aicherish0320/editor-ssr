const Router = require('koa-router')
const work = require('../mock/work')

const router = new Router()

router.get('/ssr', async (ctx) => {
  await ctx.render('work', {
    // 后面要承载 Vue3 SSR 的结果 - html 标签
    content: `<div style="color: blue;">${JSON.stringify(work)}</div>`
  })
})

module.exports = router
