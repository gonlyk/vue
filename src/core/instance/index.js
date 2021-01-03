import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
// 初始化_init方法
initMixin(Vue)
// 注册$data/$props/$set/$delete/$watch方法
stateMixin(Vue)
// 初始化事件方法（发布/订阅）$on/$once/$off/$emit
eventsMixin(Vue)
// 初始化生命周期相关的混入方法_update/$forceUpdate/$destroy
lifecycleMixin(Vue)
// 混入 render $nextTick/_render
renderMixin(Vue)

export default Vue
