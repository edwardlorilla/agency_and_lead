<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-card shadow="never">
                    <div slot="header">
                        <span>{{$route.params.id ? 'Edit' : 'Create'}} Customer</span>
                    </div>
                    <el-form ref="form" @submit.native.prevent="onSubmit" :model="form" label-width="120px">
                        <el-form-item :class="errors.details ? 'is-error is-required' : ''" prop="details" label="Detail">
                            <el-input placeholder="Enter Details" type="text" v-model="form.details"
                                      auto-complete="off"></el-input>
                            <div v-if="errors.details" v-for="error in errors.details" class="el-form-item__error">
                                {{error}}
                            </div>
                        </el-form-item>
                        <el-form-item  prop="user_id"  label="User">
                            <el-select
                                    v-model="form.user_id"
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
                        <el-form-item  prop="salutation_code_id"  label="Salutation Code">
                            <el-select
                                    v-model="form.customer_contact.salutation_code_id"
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
    import salutation_code from './../mixins/search/salutation_code'
    import user from './../mixins/search/user'
    export default {
        mixins:[salutation_code, user],
        data() {

            return {
                form: {
                    details: '',
                    user_id:'',
                    customer_contact: {
                        user_id: '',
                        salutation_code_id: ''
                    }
                },
                errors: {},
                loading: false,
                disabled: false
            }
        },
        beforeRouteEnter (to, from, next) {
            if (to.params.id) {
                axios.get(`/api/customers/${to.params.id}`).then(function (response) {
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
        beforeRouteUpdate (to, from, next) {
            var vm = this
            if (to.params.id) {
                axios.get(`/api/customers/${to.params.id}`).then(function (response) {
                    vm.setData(response.data)
                    next()
                }).catch(function (error) {
                    if (error.response.statusText) {
                        vm.$message({
                            type: 'error',
                            message: error.response.statusText
                        })
                    }
                })
            } else {
                next()
            }
        },
        methods: {
            setData(response){
                this.form = response
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
                        let id = vm.$route.params.id;
                        axios[id ? 'put' : 'post'](`/api/customers${id ? `/${id}` : ''}`, vm.form).then(function () {
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