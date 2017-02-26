var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  remoteIp:'192.168.32.175',
  remotePort:'8088',
})