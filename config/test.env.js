var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  remoteIp:'172.0.0.1',
  remotePort:'8000',
})