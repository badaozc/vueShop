import Vue from 'vue'
import { Button } from 'element-ui'
import { Form, FormItem } from 'element-ui'
import { Input } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { Message } from 'element-ui'
Vue.prototype.$message=Message

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)