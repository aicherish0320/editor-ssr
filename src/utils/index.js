const { createSSRApp } = require('vue')
const LegoComponents = require('lego-components')
const { renderToString } = require('@vue/server-renderer')
const _ = require('lodash')

function propsToStyle(props = {}) {
  if (_.isEmpty(props)) return ''
  const keys = Object.keys(props)

  const styleArr = keys.map((key) => {
    const formatKey = key.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`) // 'fontSize' -> 'font-size'
    const value = props[key]
    return `${formatKey}: ${value}`
  })

  return styleArr.join(';')
}

function px2vw(components = []) {
  const reg = /^(\d+(\.\d+)?)px$/ // 验证格式 '10px' '9.5px'

  // 遍历组件
  components.forEach((component = {}) => {
    const props = component.props || {}

    // 遍历一个组件的属性
    _.forEach(props, (val, key) => {
      if (typeof val !== 'string') {
        return
      }
      if (reg.test(val) === false) {
        // val 中没有 px
        return
      }
      // val 中有 pv
      const arr = val.match(reg) || [] // 如 ["9.5px", "9.5", ".5", index: 0, input: "10px"]
      const numStr = arr[1] // 取出 '9.5'
      const num = parseFloat(numStr, 10)
      // 计算出 vw ，重新赋值
      let vwNum = num / (375 / 100) // 画布宽度是 375px ，这样计算出 vw
      vwNum = vwNum.toFixed(2) // 只保留 2 位小数
      props[key] = `${vwNum}vw`
    })
  })
}

async function getLegoComponentsHtml(components = []) {
  px2vw(components)
  const app = createSSRApp({
    data() {
      const pageData = {
        components
      }
      return {
        pageData
      }
    },
    template: `<final-page :components="pageData.components"></final-page>`
  })
  app.use(LegoComponents)
  const html = await renderToString(app)
  return html
}

module.exports = {
  propsToStyle,
  getLegoComponentsHtml
}
