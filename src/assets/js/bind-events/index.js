import jumpTo from './jumpTo'

const { EVENT_INFO_LIST = [] } = window

function bindEvent() {
  EVENT_INFO_LIST.forEach((eventInfo = {}) => {
    const { id, actionType, url } = eventInfo
    if (!actionType || !url) return
    const elemId = `component-${id}`
    const elem = document.getElementById(elemId)
    elem.addEventListener('click', () => {
      if (actionType === 'to') {
        jumpTo(url)
      }
    })
  })
}

bindEvent()
