require('./bootstrap');
window.Vue = require('vue')
import {Loading,Message, Form, FormItem, Input, Button} from 'element-ui';
Vue.prototype.$message = Message;
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Loading)
new Vue({
        data(){
            return {
                validate: {
                    required: [
                        {required: true}
                    ]
                },
            }
        },
        render: h => h(require('./components/Auth/Register.vue').default)
}).$mount('#register');