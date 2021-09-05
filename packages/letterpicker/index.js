// packages/letterpicker/index.js

// 导入组件，组件必须声明 name
import LetterPicker from './src/LetterPicker'

// 为组件添加 install 方法，用于按需引入
LetterPicker.install = function (Vue) {
  Vue.component(LetterPicker.name, LetterPicker)
}

export default LetterPicker
