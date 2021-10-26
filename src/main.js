import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import { Button, Input, Form,
  FormItem, DatePicker, Switch, InputNumber, Upload, Radio,
  Select, Option , Collapse,
  CollapseItem, MessageBox, ColorPicker,} from 'element-ui';

Vue.use(Button);
Vue.use(ColorPicker);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(DatePicker);
Vue.use(Switch);
Vue.use(InputNumber);
Vue.use(Upload);
Vue.use(Radio);
Vue.use(Select);
Vue.use(Option);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(ColorPicker);
Vue.prototype.$confirm = MessageBox.confirm;


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
