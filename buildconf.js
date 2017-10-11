// 生成对应环境的配置文件
var path = require('path')
var fs = require('fs')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

function copyFile (sourceFile, destFile) {
  fs.writeFileSync(destFile, fs.readFileSync(sourceFile))
}

var configFile = resolve('config/app.pro.js')
if (process.env.NODE_ENV === 'development') {
  configFile = resolve('config/app.dev.js')
} else if (process.env.NODE_ENV === 'alpha') {
  configFile = resolve('config/app.alp.js')
} else if (process.env.NODE_ENV === 'uat') {
  configFile = resolve('config/app.uat.js')
}

var sourceFile = configFile
var destFile = resolve('config/app.js')

copyFile(sourceFile, destFile)
