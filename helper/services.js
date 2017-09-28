import {apiPath} from '../config/app'
import axios from 'axios'
import utils from './utils'

/**
 * 构造接口请求方法
 * @author wangyipeng
 */
let services = {}

for (let i in apiPath) {
  let hostApiPath = apiPath[i]
  let apiHost = hostApiPath['host']
  services[i] = {}
  for (let ind in hostApiPath) {
    if (ind === 'host') {
      continue
    }
    let api = hostApiPath[ind]
    services[i][ind] = async function (params, isNeedStatus = false) {
      let apiUrl = api.url
      let newParams = {}
      if (params) {
        utils.each(params, function (ind, param) {
          if (apiUrl.indexOf('{' + ind + '}') > -1) {
            apiUrl = apiUrl.replace('{' + ind + '}', param)
          } else {
            newParams[ind] = param
          }
        })
      }
      let data = newParams
      let config = {}
      let response = {}
      if (api.method === 'put' || api.method === 'post' || api.method === 'patch') {
        response = await axios[api.method](apiHost + apiUrl, data, config)
        if (!isNeedStatus) {
          response = response.data
        }
      } else {
        config.params = newParams
        response = (await axios[api.method](apiHost + apiUrl, config))
        if (!isNeedStatus) {
          response = response.data
        }
      }
      return response
    }
  }
}

export default services
