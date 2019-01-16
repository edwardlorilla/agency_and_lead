export default {
    data(){
        return {
            salutation_codes: []
        }
    },
    methods: {
        search_salutation_code(query){
            var vm = this
            if (query !== '') {
                vm.loading = true
                vm.onSearchSalutationCode(query, vm)
            } else {
                vm.loading = false
                vm.salutation_codes = []
            }
        },
        onSearchSalutationCode: _.debounce(function (query, vm) {

            axios.get('/api/salutation_codes/search?search=' + query).then(function (q) {
                vm.loading = false
                vm.salutation_codes = q.data.map(item => {
                    return {value: item.id, label: item.description};
                })
            }).catch(function () {
                vm.loading = false
            })
        }, 350),
    }

}