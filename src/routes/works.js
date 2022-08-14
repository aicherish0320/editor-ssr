const Router = require('koa-router')
const work = require('../mock/work')
const { propsToStyle, getLegoComponentsHtml } = require('../utils')

const router = new Router()

async function renderPage(ctx, work, pageType) {
  const { title, desc = '', content = {} } = work
  const { props = {}, components = {}, setting = {} } = content
  const bodyStyle = propsToStyle(props)

  const componentsHtml = await getLegoComponentsHtml(components)

  // 组件的事件
  const eventInfoList = []
  components.forEach((component) => {
    const { id, props: componentProps = {} } = component
    const { actionType, url } = componentProps
    if (actionType) {
      eventInfoList.push({
        id,
        actionType,
        url
      })
    }
  })

  await ctx.renderWithAssets('work', {
    title,
    desc,
    bodyStyle,
    content: componentsHtml,
    pageType,
    eventInfoList: JSON.stringify(eventInfoList)
  })
}

router.get('/ssr', async (ctx) => {
  // await ctx.render('work', {
  //   // 后面要承载 Vue3 SSR 的结果 - html 标签
  //   content: `<div style="color: blue;">${JSON.stringify(work)}</div>`
  // })
  await renderPage(ctx, work, 'publish')
})

module.exports = router
