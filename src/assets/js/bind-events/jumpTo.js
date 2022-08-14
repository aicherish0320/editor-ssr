function getUrlWithQuery(url, querystring) {
  if (!querystring) {
    return url
  }
  // hash
  const [urlWithoutHash, hash = ''] = url.split('#')
  // 当前页面有 url 参数
  let urlWithQuery = ''
  if (urlWithoutHash.indexOf('?') < 0) {
    // 目标 url 无参数
    urlWithQuery = `${urlWithoutHash}?${querystring}`
  } else {
    // 目标 url 有参数
    urlWithQuery = `${urlWithoutHash}&${querystring}`
  }
  // 拼接 hash
  if (hash) return `${urlWithQuery}#${hash}`

  return urlWithQuery
}

function jumpTo(url = '') {
  if (!url) return
  const { search } = location
  const querystring = search.slice(1)
  const targetUrl = getUrlWithQuery(url, querystring)
  location.href = targetUrl
}

export default jumpTo
