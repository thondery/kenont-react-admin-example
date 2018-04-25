
const fs = require('fs-extra')
const path = require('path')
const client = require('deploy-kit')
const Deploy = require('./deploy.config')
const project = require('./project.config')

const rootFile = path.resolve(__dirname, project.outDir, 'root.txt')
if (fs.existsSync(rootFile)) {
  const target = fs.readFileSync(rootFile, 'utf-8')
  const Options = Deploy[target]
  Options && client.sftp(Options.sftp).exec()
}
