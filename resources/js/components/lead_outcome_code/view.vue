<template>
    <div>
        <grid-view :columns="columns"
                   :data="data"
                   create-name="Add Lead Outcome Code"
                   on-delete="/api/lead_outcome_codes"
                   on-edit-name="edit-lead_outcome_code"
                   on-create-name="create-lead_outcome_code"
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
                        label: 'Description',
                        prop: 'description',
                        sort: true
                    }
                ],
                data: []
            }
        },
        components: {
            GridView,
        },
        beforeRouteEnter (to, from, next) {
            axios.get(`/api/lead_outcome_codes`, {params: to.query}).then(function (response) {
                next(vm => vm.setData(response.data))
            })
        },
        beforeRouteUpdate (to, from, next) {
            var vm = this
            axios.get(`/api/lead_outcome_codes`, {params: to.query}).then(function (response) {
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