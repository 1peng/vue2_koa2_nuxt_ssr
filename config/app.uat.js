console.log('uat')
module.exports = {
  apiPath: {
    local: {
      host: 'http://localhost:3000',
      getUserList: {
        method: 'get',
        url: '/user/list'
      }
    }
  }
}
