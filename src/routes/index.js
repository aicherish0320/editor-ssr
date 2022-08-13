const Router = require('koa-router')

const router = new Router()

router.get('/test', async (ctx) => {
  await ctx.render('index', {
    title: 'Hello'
  })
})

module.exports = router
