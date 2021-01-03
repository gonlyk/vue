/* @flow */

import { mergeOptions } from '../util/index'

export function initMixin (Vue: GlobalAPI) {
  Vue.mixin = function (mixin: Object) {
    // 将混入项放到options中
    this.options = mergeOptions(this.options, mixin)
    return this
  }
}
