export default {
    data(){
        return {
            employee_categories: []
        }
    },
    methods: {
        search_employee_category(query){
            var vm = this
            if (query !== '') {
                vm.loading = true
                vm.onSearchEmployeeCategory(query, vm)
            } else {
                vm.loading = false
                vm.employee_categories = []
            }
        },
        onSearchEmployeeCategory: _.debounce(function (query, vm) {

            axios.get('/api/employee_categories/search?search=' + query).then(function (q) {
                vm.loading = false
                vm.employee_categories = q.data.map(item => {
                    return {value: item.id, label: item.description};
                })
            }).catch(function () {
                vm.loading = false
            })
        }, 350),
    }

}