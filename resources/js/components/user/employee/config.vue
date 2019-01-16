<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-card shadow="never">
                    <div slot="header">
                        <span>{{$route.params.id ? 'Edit' : 'Create'}} Employee</span>
                    </div>
                    <el-form ref="form" @submit.native.prevent="onSubmit" :model="form" label-width="200px">
                        <el-form-item :class="errors.details ? 'is-error is-required' : ''" prop="details" label="Details">
                            <el-input placeholder="Enter Details" type="text" v-model="form.details"
                                      auto-complete="off"></el-input>
                            <div v-if="errors.details" v-for="error in errors.details" class="el-form-item__error">
                                {{error}}
                            </div>
                        </el-form-item>
                        <el-form-item  prop="business_entity"  label="Business Entity">
                            <el-select
                                    v-model="form.business_entity_id"
                                    filterable
                                    remote
                                    reserve-keyword
                                    placeholder="Please enter a keyword"
                                    :remote-method="search_business_entity"
                                    :loading="loading">
                                <el-option
                                        v-for="item in business_entities"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item  prop="employee_category"  label="Employee Category">
                            <el-select
                                    v-model="form.employee_category_id"
                                    filterable
                                    remote
                                    reserve-keyword
                                    placeholder="Please enter a keyword"
                                    :remote-method="search_employee_category"
                                    :loading="loading">
                                <el-option
                                        v-for="item in employee_categories"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button :disabled="disabled" type="primary" @click="onSubmit('form')">{{$route.params.id
                                ? 'Edit' : 'Create'}} Employee
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
    import business_entity from './../../mixins/search/business_entity'
    import employee_category from './../../mixins/search/employee_category'
    export default {
        mixins:[business_entity, employee_category],
        data() {
            return {
                form: {
                    details: '',
                    business_entity_id: '',
                    employee_category_id: '',
                },
                errors: {},
                loading: false,
                disabled: false
            }
        },
        beforeRouteEnter (to, from, next) {
            if (to.params.id) {
                axios.get(`/api/users/${to.params.id}/employee`).then(function (response) {
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
                var employee = _.head(response.employees)
                vm.business_entities = [{
                    value: employee.business_entity.id,
                    label: employee.business_entity.details
                }]
                vm.employee_categories = [{
                    value: employee.employee_category.id,
                    label: employee.employee_category.description
                }]
                vm.form = employee
            },
            onCancel(){
                this.$router.push({name: 'view-employee'})
            },
            onSubmit() {
                var vm = this
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        vm.disabled = true
                        vm.errors = {}
                        let id = vm.form.id;
                        axios[id ? 'put' : 'post'](`/api/employees${id ? `/${id}` : ''}`, vm.form).then(function () {
                            vm.disabled = false
                            vm.$message({
                                type: 'success',
                                message: `Employee ${id ? 'has been updated' : 'has been created'}`
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