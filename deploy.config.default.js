// Deploy -- 配置部署
module.exports = {
  ['pro']: {
    domain: 'API请求地址',
    sftp: {
      server: '<username>:<password>@<address>[:<port>]',
      workspace: __dirname + '/dist',
      deployTo: '部署到服务器上的路径',
    }
  }
}