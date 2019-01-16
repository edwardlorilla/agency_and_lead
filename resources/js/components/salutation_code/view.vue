<template>
    <div>
        <grid-view :columns="columns"
                   :data="data"
                   create-name="Add Salutation Code"
                   on-delete="/api/salutation_codes"
                   on-edit-name="edit-salutation_code"
                   on-create-name="create-salutation_code"
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
            axios.get(`/api/salutation_codes`, {params: to.query}).then(function (response) {
                next(vm => vm.setData(response.data))
            })
        },
        beforeRouteUpdate (to, from, next) {
            var vm = this
            axios.get(`/api/salutation_codes`, {params: to.query}).then(function (response) {
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