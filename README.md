# kenont-react-admin-example
React Admin for Example

### Deploy

edit file for `deploy.js`
```js
// Deploy -- 配置部署
module.exports = {
  ['aliyun']: {
    domain: 'API请求地址',
    sftp: {
      server: '<username>:<password>@<address>[:<port>]',
      workspace: __dirname + '/dist',
      deployTo: '部署到服务器上的路径',
    }
  }
}
```

edit file for `package.json`
```bash
cross-env NODE_ENV=production
```
change into
```bash
cross-env NODE_ENV=production target=aliyun
```

Run the command:

```bash
yarn build
yarn deploy
```