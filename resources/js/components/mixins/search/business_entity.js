export default {
    data(){
        return {
            business_entities: []
        }
    },
    methods: {
        search_business_entity(query){
            var vm = this
            if (query !== '') {
                vm.loading = true
                vm.onSearchBusinessEntity(query, vm)
            } else {
                vm.loading = false
                vm.business_entities = []
            }
        },
        onSearchBusinessEntity: _.debounce(function (query, vm) {

            axios.get('/api/business_entities/search?search=' + query).then(function (q) {
                vm.loading = false
                vm.business_entities = q.data.map(item => {
                    return {value: item.id, label: item.details};
                })
            }).catch(function () {
                vm.loading = false
            })
        }, 350),
    }

}