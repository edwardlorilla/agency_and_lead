<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-card shadow="never">
                    <div slot="header">
                        <span>{{$route.params.id ? 'Edit' : 'Create'}} Customer Lead</span>
                    </div>
                    <el-form ref="form" @submit.native.prevent="onSubmit" :model="form" label-width="120px">
                        <el-form-item label="Details" :class="errors.details ? 'is-error is-required' : ''" prop="details">
                            <el-input placeholder="Enter Details" type="text" v-model="form.details"
                                      auto-complete="off"></el-input>
                            <div v-if="errors.details" v-for="error in errors.details" class="el-form-item__error">
                                {{error}}
                            </div>
                        </el-form-item>
                        <el-form-item  prop="customer_id"  label="Customer">
                            <el-select
                                    v-model="form.customer_id"
                                    filterable
                                    remote
                                    reserve-keyword
                                    placeholder="Please enter a keyword"
                                    :remote-method="search_customer"
                                    :loading="loading">
                                <el-option
                                        v-for="item in customers"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item  prop="employee_id"  label="Employee">
                            <el-select
                                    v-model="form.employee_id"
                                    filterable
                                    remote
                                    reserve-keyword
                                    placeholder="Please enter a keyword"
                                    :remote-method="search_employee"
                                    :loading="loading">
                                <el-option
                                        v-for="item in employees"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item  prop="lead_outcome_code_id"  label="Lead Outcome Code">
                            <el-select
                                    v-model="form.lead_outcome_code_id"
                                    filterable
                                    remote
                                    reserve-keyword
                                    placeholder="Please enter a keyword"
                                    :remote-method="search_lead_outcome_code"
                                    :loading="loading">
                                <el-option
                                        v-for="item in lead_outcome_codes"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item  prop="lead_status_code_id"  label="Lead Status Code">
                            <el-select
                                    v-model="form.lead_status_code_id"
                                    filterable
                                    remote
                                    reserve-keyword
                                    placeholder="Please enter a keyword"
                                    :remote-method="search_lead_status_code"
                                    :loading="loading">
                                <el-option
                                        v-for="item in lead_status_codes"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button :disabled="disabled" type="primary" @click="onSubmit('form')">{{$route.params.id
                                ? 'Edit' : 'Create'}} Customer Lead
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
    import customer from './../mixins/search/customer'
    import employee from './../mixins/search/employee'
    import lead_outcome_code from './../mixins/search/lead_outcome_code'
    import lead_status_code from './../mixins/search/lead_status_code'
    export default {
        mixins:[customer, employee, lead_outcome_code, lead_status_code],
        data() {
            return {
                form: {
                    details: '',
                },
                errors: {},
                loading: false,
                disabled: false
            }
        },
        beforeRouteEnter (to, from, next) {
            if (to.params.id) {
                axios.get(`/api/customers_leads/${to.params.id}`).then(function (response) {
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
                axios.get(`/api/customers_leads/${to.params.id}`).then(function (response) {
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
                this.$router.push({name: 'view-customers_lead'})
            },
            onSubmit() {
                var vm = this
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        vm.disabled = true
                        vm.errors = {}
                        let id = vm.$route.params.id;
                        axios[id ? 'put' : 'post'](`/api/customers_leads${id ? `/${id}` : ''}`, vm.form).then(function () {
                            vm.disabled = false
                            vm.$message({
                                type: 'success',
                                message: `Customer Lead ${id ? 'has been updated' : 'has been created'}`
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