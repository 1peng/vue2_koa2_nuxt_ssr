/**
 * 辅助函数
 * @author wangyipeng
 */
export default {
  isFunction (fn) {
    return Object.prototype.toString.call(fn) === '[object Function]'
  },
  /**
  *@param {Object}|{Array} object 需要遍历处理的对象或数组
  *@param {Function} callback 遍历处理回调函数
  *@param {Array} args callback回调函数的附加参数
  */
  each (object, callback, args) {
    let name
    let i = 0
    let length = object.length
    let isObj = length === undefined || this.isFunction(object)
    if (args) {
      if (isObj) {
        for (name in object) {
          if (callback.apply(object[name], args) === false) {
            break
          }
        }
      } else {
        for (; i < length;) {
          if (callback.apply(object[i++], args) === false) {
            break
          }
        }
      }
    } else {
      if (isObj) {
        for (name in object) {
          if (callback.call(object[name], name, object[name]) === false) {
            break
          }
        }
      } else {
        for (let value = object[0]; i < length && callback.call(value, i, value) !== false; value = object[++i]) {
        }
      }
    }
    return object
  },
  date2String (date) {
    let year = date.getFullYear()
    let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
    let day = (date.getDate() + 1) < 10 ? '0' + (date.getDate() + 1) : (date.getDate() + 1)
    return year + '-' + month + '-' + day
  }
}
