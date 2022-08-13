const Router = require('koa-router')
const work = require('../mock/work')
const { propsToStyle, getLegoComponentsHtml } = require('../utils')

const router = new Router()

async function renderPage(ctx, work, pageType) {
  const { title, desc = '', content = {} } = work
  const { props = {}, components = {}, setting = {} } = content
  const bodyStyle = propsToStyle(props)
  const componentsHtml = await getLegoComponentsHtml(components)
  await ctx.render('work', {
    title,
    desc,
    bodyStyle,
    content: componentsHtml,
    pageType
  })
}

router.get('/ssr', async (ctx) => {
  // await ctx.render('work', {
  //   // 后面要承载 Vue3 SSR 的结果 - html 标签
  //   content: `<div style="color: blue;">${JSON.stringify(work)}</div>`
  // })
  await renderPage(ctx, work, 'template')
})

module.exports = router
