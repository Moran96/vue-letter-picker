# vue-letter-picker

The letter picker component based  exported as Node.js modules.

## Installation

Using npm:
```
$ npm i vue-letter-picker -S
```

In main.js file:
```javascript
import Vue from 'vue'
import App from './App.vue'
// import element-ui
import ElementUI from 'element-ui'
// import element-ui style file
import 'element-ui/lib/theme-chalk/index.css'
// import letter-picker
import LetterPicker from 'vue-letter-picker'

Vue.use(ElementUI)
Vue.use(LetterPicker)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

```

In target vue file:

Template:

```html
<letter-picker v-model="letter" type="lowercase" />
```

Script:

```javascript
export default {
  data () {
    return {
      letter: ''
    }
  }
}
```

## Support

Safari 10.1+, Chrome 54+, Firefox 63+, IE9 and above.
