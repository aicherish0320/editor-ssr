const Koa = require('koa')
const views = require('koa-views')
const index = require('./routes/index')
const works = require('./routes/works')
const renderWithAssets = require('./middlewares/renderWithAssets')
const app = new Koa()

app.use(require('koa-static')(`${__dirname}/public`))

app.use(
  views(`${__dirname}/views`, {
    extension: 'pug'
  })
)

app.use(renderWithAssets)

app.use(index.routes(), index.allowedMethods())
app.use(works.routes(), works.allowedMethods())

app.listen('3300', () => console.log('3300 port'))
