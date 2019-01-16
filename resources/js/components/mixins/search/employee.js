export default {
    data(){
        return {
            employees: []
        }
    },
    methods: {
        search_employee(query){
            var vm = this
            if (query !== '') {
                vm.loading = true
                vm.onSearchEmployee(query, vm)
            } else {
                vm.employees = []
            }
        },
        onSearchEmployee: _.debounce(function (query, vm) {

            axios.get('/api/employees/search?search=' + query).then(function (q) {
                vm.loading = false
                vm.employees = q.data.map(item => {
                    return {value: item.id, label: item.details};
                })
            }).catch(function () {
                vm.loading = false
            })
        }, 350),
    }

}