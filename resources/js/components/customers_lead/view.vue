<template>
    <div>
        <grid-view :columns="columns"
                   :data="data"
                   create-name="Add Lead Status Customer Lead"
                   on-delete="/api/customers_leads"
                   on-edit-name="edit-customers_lead"
                   on-create-name="create-customers_lead"

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
                        label: 'Customer Details',
                        prop: 'customer.details',
                        sort: true
                    },{
                        label: 'Employee',
                        prop: 'employee.details',
                        sort: true
                    },{
                        label: 'Outcome code',
                        prop: 'lead_outcome_code.description',
                        sort: true
                    },{
                        label: 'Status',
                        prop: 'lead_status_code.description',
                        sort: true
                    },{
                        label: 'Date of Lead',
                        prop: 'date_of_lead',
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
            axios.get(`/api/customers_leads`, {params: to.query}).then(function (response) {
                next(vm => vm.setData(response.data))
            })
        },
        beforeRouteUpdate (to, from, next) {
            var vm = this
            axios.get(`/api/customers_leads`, {params: to.query}).then(function (response) {
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