/* @flow */

import { toArray } from '../util/index'

export function initUse (Vue: GlobalAPI) {
  Vue.use = function (plugin: Function | Object) {
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    // 获取额外的参数
    const args = toArray(arguments, 1)
    args.unshift(this)
    // 是对象时，使用install方法
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args)
      // 是函数时，直接调用
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args)
    }
    // 记录插件已注册
    installedPlugins.push(plugin)
    return this
  }
}
