require('./bootstrap');

window.Vue = require('vue');

import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import VueRouter from 'vue-router'
Vue.use(ElementUI, {locale})
Vue.use(VueRouter)
const routes = [
    {
        path: '/users',
        component: resolve => require(["./components/user/index.vue"], resolve),
        children: [
            {
                path: '',
                name: 'view-user',
                component: resolve => require(["./components/user/view.vue"], resolve),
            },
            {
                path: 'create',
                name: 'create-user',
                component: resolve => require(["./components/user/create.vue"], resolve),
            },
            {
                path: 'edit/:id',
                component: resolve => require(["./components/user/config.vue"], resolve),
                children:[
                    {
                        path: '',
                        name: 'edit-user',
                        component: resolve => require(["./components/user/edit/config.vue"], resolve),
                    },{
                        path: 'edit-customer',
                        name: 'view-edit_customer',
                        component: resolve => require(["./components/user/customer/config.vue"], resolve),
                    },{
                        path: 'edit-employee',
                        name: 'view-edit_employee',
                        component: resolve => require(["./components/user/employee/config.vue"], resolve),
                    },
                ]
            },
        ]
    },
    {
        path: '/business_entities',
        component: resolve => require(["./components/business_entity/index.vue"], resolve),
        children: [
            {
                path: '',
                name: 'view-business_entity',
                component: resolve => require(["./components/business_entity/view.vue"], resolve),
            },
            {
                path: 'create',
                name: 'create-business_entity',
                component: resolve => require(["./components/business_entity/create.vue"], resolve),
            },
            {
                path: 'edit/:id',
                name: 'edit-business_entity',
                component: resolve => require(["./components/business_entity/create.vue"], resolve),
            },
        ]
    },
    {
        path: '/employee_categories',
        component: resolve => require(["./components/employee_category/index.vue"], resolve),
        children: [
            {
                path: '',
                name: 'view-employee_category',
                component: resolve => require(["./components/employee_category/view.vue"], resolve),
            },
            {
                path: 'create',
                name: 'create-employee_category',
                component: resolve => require(["./components/employee_category/create.vue"], resolve),
            },
            {
                path: 'edit/:id',
                name: 'edit-employee_category',
                component: resolve => require(["./components/employee_category/create.vue"], resolve),
            },
        ]
    },
    {
        path: '/employees',
        component: resolve => require(["./components/employee/index.vue"], resolve),
        children: [
            {
                path: '',
                name: 'view-employee',
                component: resolve => require(["./components/employee/view.vue"], resolve),
            },
            {
                path: 'create',
                name: 'create-employee',
                component: resolve => require(["./components/employee/create.vue"], resolve),
            },
            {
                path: 'edit/:id',
                name: 'edit-employee',
                component: resolve => require(["./components/employee/create.vue"], resolve),
            },
        ]
    },
    {
        path: '/customers',
        component: resolve => require(["./components/customer/index.vue"], resolve),
        children: [
            {
                path: '',
                name: 'view-customer',
                component: resolve => require(["./components/customer/view.vue"], resolve),
            },
            {
                path: 'create',
                name: 'create-customer',
                component: resolve => require(["./components/customer/create.vue"], resolve),
            },
            {
                path: 'edit/:id',
                name: 'edit-customer',
                component: resolve => require(["./components/customer/create.vue"], resolve),
            },
        ]
    },
    {
        path: '/salutation_codes',
        component: resolve => require(["./components/salutation_code/index.vue"], resolve),
        children: [
            {
                path: '',
                name: 'view-salutation_code',
                component: resolve => require(["./components/salutation_code/view.vue"], resolve),
            },
            {
                path: 'create',
                name: 'create-salutation_code',
                component: resolve => require(["./components/salutation_code/create.vue"], resolve),
            },
            {
                path: 'edit/:id',
                name: 'edit-salutation_code',
                component: resolve => require(["./components/salutation_code/create.vue"], resolve),
            },
        ]
    },
    {
        path: '/lead_status_codes',
        component: resolve => require(["./components/lead_status_code/index.vue"], resolve),
        children: [
            {
                path: '',
                name: 'view-lead_status_code',
                component: resolve => require(["./components/lead_status_code/view.vue"], resolve),
            },
            {
                path: 'create',
                name: 'create-lead_status_code',
                component: resolve => require(["./components/lead_status_code/create.vue"], resolve),
            },
            {
                path: 'edit/:id',
                name: 'edit-lead_status_code',
                component: resolve => require(["./components/lead_status_code/create.vue"], resolve),
            },
        ]
    },
    {
        path: '/lead_outcome_codes',
        component: resolve => require(["./components/lead_outcome_code/index.vue"], resolve),
        children: [
            {
                path: '',
                name: 'view-lead_outcome_code',
                component: resolve => require(["./components/lead_outcome_code/view.vue"], resolve),
            },
            {
                path: 'create',
                name: 'create-lead_outcome_code',
                component: resolve => require(["./components/lead_outcome_code/create.vue"], resolve),
            },
            {
                path: 'edit/:id',
                name: 'edit-lead_outcome_code',
                component: resolve => require(["./components/lead_outcome_code/create.vue"], resolve),
            },
        ]
    },
    {
        path: '/workflow_actions',
        component: resolve => require(["./components/workflow_action/index.vue"], resolve),
        children: [
            {
                path: '',
                name: 'view-workflow_action',
                component: resolve => require(["./components/workflow_action/view.vue"], resolve),
            },
            {
                path: 'create',
                name: 'create-workflow_action',
                component: resolve => require(["./components/workflow_action/create.vue"], resolve),
            },
            {
                path: 'edit/:id',
                name: 'edit-workflow_action',
                component: resolve => require(["./components/workflow_action/create.vue"], resolve),
            },
        ]
    },
    {
        path: '/customers_leads',
        component: resolve => require(["./components/customers_lead/index.vue"], resolve),
        children: [
            {
                path: '',
                name: 'view-customers_lead',
                component: resolve => require(["./components/customers_lead/view.vue"], resolve),
            },
            {
                path: 'create',
                name: 'create-customers_lead',
                component: resolve => require(["./components/customers_lead/create.vue"], resolve),
            },
            {
                path: 'edit/:id',
                name: 'edit-customers_lead',
                component: resolve => require(["./components/customers_lead/create.vue"], resolve),
            },
        ]
    },

];
const router = new VueRouter({
    base: 'home',
    mode: 'history',
    routes
});
$(window).on('load', function () {
    new Vue({
        data(){
            return {
                currentRoute: '',
                validate: {
                    required: [
                        {required: true}
                    ]
                },
                store: {
                    state: {
                        user: {
                            notifications: []
                        },
                        loading: false,
                    },
                    mutations: {
                        handleLoading(state, data){
                            state.loading = data
                        },
                        handleDeleteNotification(state, data){
                            state.user.notifications.splice(data, 1)
                        }
                    },
                    dispatch(mutation, data = {}){ //$root.store.dispatch
                        this.mutations[mutation](this.state, data)
                    }
                }
            }
        },
        watch: {
            $route (newVal, oldVal) {
                this.currentRoute = newVal.name
            }
        },
        computed: {
            handleNotification(){
                return !!this.store.state.user.notifications.length
            }
        },
        mounted(){
            var vm = this
            axios.get('/api/users/notification').then(function (response) {
                vm.store.state.user = response.data
            })
        },
        router,
        render: h => h(require('./components/App.vue').default)
    }).$mount('#app')
});