/**
 * Created by wangyipeng on 2017/9/27.
 */
import services from '../../helper/services'
const router = require('koa-router')()
router.get('/index', async function (ctx, next) {
  let advList = await services.cmsAdv.getAdvList()
  ctx.body = advList
})

module.exports = router
