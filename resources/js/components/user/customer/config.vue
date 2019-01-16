<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-card shadow="never">
                    <div slot="header">
                        <span>{{$route.params.id ? 'Edit' : 'Create'}} Customer</span>
                    </div>
                    <el-form v-if="customer" ref="form" @submit.native.prevent="onSubmit" :model="customer"
                             label-width="120px">
                        <el-form-item :class="errors.details ? 'is-error is-required' : ''" prop="details"
                                      label="Detail">
                            <el-input placeholder="Enter Details" type="text" v-model="customer.details"
                                      auto-complete="off"></el-input>
                            <div v-if="errors.details" v-for="error in errors.details" class="el-form-item__error">
                                {{error}}
                            </div>
                        </el-form-item>
                        <el-form-item prop="user_id" label="User">
                            <el-select
                                    v-model="customer.user_id"
                                    filterable
                                    remote
                                    reserve-keyword
                                    placeholder="Please enter a keyword"
                                    :remote-method="search_user"
                                    :loading="loading">
                                <el-option
                                        v-for="item in users"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item v-if="customer.customer_contact" prop="salutation_code_id" label="Salutation Code">
                            <el-select
                                    v-model="customer.customer_contact.salutation_code_id"
                                    filterable
                                    remote
                                    reserve-keyword
                                    placeholder="Please enter a keyword"
                                    :remote-method="search_salutation_code"
                                    :loading="loading">
                                <el-option
                                        v-for="item in salutation_codes"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button :disabled="disabled" type="primary" @click="onSubmit('form')">{{$route.params.id
                                ? 'Edit' : 'Create'}} Customer
                            </el-button>
                            <el-button @click="onCancel">Cancel</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>

            </el-col>
        </el-row>
    </div>
</template>
<script>
    import salutation_code from './../../mixins/search/salutation_code'
    import user from './../../mixins/search/user'
    export default {
        mixins: [salutation_code, user],
        data() {
            var vm = this
            return {
                customer: {},
                errors: {},
                loading: false,
                disabled: false,
            }
        },
        beforeRouteEnter (to, from, next) {
            if (to.params.id) {
                axios.get(`/api/users/${to.params.id}/customer`).then(function (response) {
                    next(vm => vm.setData(response.data))
                }).catch(function (error) {
                    if (error.response.statusText) {
                        next(vm => vm.$message({
                            type: 'error',
                            message: error.response.statusText
                        }))
                    }
                })
            } else {
                next()
            }
        },
        methods: {
            setData(response){
                var vm = this
                var customer = _.head(response.customers)

                vm.users = customer.user.map(item => {
                    return {value: item.id, label: item.name};
                })



                vm.salutation_codes = [{
                    value: customer.customer_contact.salutation_code.id,
                    label: customer.customer_contact.salutation_code.description
                }]
                customer.user_id = _.head(customer.user);
                customer.salutation_code_id = customer.customer_contact.salutation_code.id
                vm.customer = customer

            },
            onCancel(){
                this.$router.push({name: 'view-customer'})
            },
            onSubmit() {
                var vm = this
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        vm.disabled = true
                        vm.errors = {}
                        let id = vm.customer.id;
                        axios[id ? 'put' : 'post'](`/api/customers${id ? `/${id}` : ''}`, vm.customer).then(function () {
                            vm.disabled = false
                            vm.$message({
                                type: 'success',
                                message: `Customer ${id ? 'has been updated' : 'has been created'}`
                            })
                        }).catch(function (error) {
                            vm.disabled = false
                            if (error.response.data.errors && error.response.data.message) {
                                vm.errors = error.response.data.errors;
                                vm.$message({message: error.response.data.message, type: 'error'})
                            }
                        })
                    }
                })
            }
        }
    }
</script>
