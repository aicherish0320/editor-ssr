export function getRegStr(str, reg) {
  if (!str) return ''
  const arr = str.match(reg) || []
  return arr[1] || ''
}
export function getChannel() {
  const { location } = window
  const channel = getRegStr(location.search, /channel=(\w+)/)
  return channel
}

export function getWorkId() {
  const { location } = window
  const id = getRegStr(location.pathname, /\/(\w+)?-\w+/)
  return id
}
