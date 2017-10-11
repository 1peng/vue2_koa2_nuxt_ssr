/**
 * Created by wangyipeng on 2017/9/27.
 */
import services from '../../helper/services'
const router = require('koa-router')()
router.get('/index', async function (ctx, next) {
  let advList = await services.local.getUserList()
  ctx.body = advList
})

router.get('/list', async function (ctx, next) {
  ctx.body = [
    {
      name: 'yipeng', age: '29'
    },
    {
      name: 'yihang', age: '18'
    }
  ]
})

module.exports = router
