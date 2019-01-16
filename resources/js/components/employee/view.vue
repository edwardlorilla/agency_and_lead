<template>
    <div>
        <grid-view :columns="columns"
                   :data="data"
                   create-name="Add Employee"
                   on-delete="/api/employees"
                   on-edit-name="edit-employee"
                   on-create-name="create-employee"
                   @delete="data.data.splice($event, 1)"
        ></grid-view>
    </div>
</template>
<style>
</style>
<script>
    import GridView from './../Table/Grid.vue'
    export default{
        data(){
            return {
                columns: [
                    {
                        label: 'Details',
                        prop:  'details',
                        sort: true
                    },{
                        label: 'Business Entities',
                        prop: 'business_entity.details',
                        sort: true
                    },{
                        label: 'Employee Categories',
                        prop: 'employee_category.description',
                        sort: true
                    },
                ],
                data: []
            }
        },
        components: {
            GridView,
        },
        beforeRouteEnter (to, from, next) {
            axios.get(`/api/employees`, {params: to.query}).then(function (response) {
                next(vm => vm.setData(response.data))
            })
        },
        beforeRouteUpdate (to, from, next) {
            var vm = this
            axios.get(`/api/employees`, {params: to.query}).then(function (response) {
                vm.setData(response.data)
                next()
            })
        },
        methods: {
            setData(response){
                this.data = response
            },
        }
    }
</script>