export default {
    data(){
        return {
            customers: []
        }
    },
    methods: {
        search_customer(query){
            var vm = this
            if (query !== '') {
                vm.loading = true
                vm.onSearchCustomer(query, vm)
            } else {
                vm.loading = false
                vm.customers = []
            }
        },
        onSearchCustomer: _.debounce(function (query, vm) {

            axios.get('/api/customers/search?search=' + query).then(function (q) {
                vm.loading = false
                vm.customers = q.data.map(item => {
                    return {value: item.id, label: item.details};
                })
            }).catch(function () {
                vm.loading = false
            })
        }, 350),
    }

}