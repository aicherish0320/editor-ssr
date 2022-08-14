/**
 * check channel
 */

const { getChannel } = require('../utils')

const channel = getChannel()

function checkChannel() {
  if (channel) return
  return window.alert('no channel')
}

checkChannel()
