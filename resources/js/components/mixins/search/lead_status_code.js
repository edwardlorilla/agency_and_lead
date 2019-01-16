export default {
    data(){
        return {
            lead_status_codes: []
        }
    },
    methods: {
        search_lead_status_code(query){
            var vm = this
            if (query !== '') {
                vm.loading = true
                vm.onSearchLeadStatusCode(query, vm)
            } else {
                vm.loading = false
                vm.lead_status_codes = []
            }
        },
        onSearchLeadStatusCode: _.debounce(function (query, vm) {
            axios.get('/api/lead_status_codes/search?search=' + query).then(function (q) {
                vm.loading = false
                vm.lead_status_codes = q.data.map(item => {
                    return {value: item.id, label: item.description};
                })
            }).catch(function () {
                vm.loading = false
            })
        }, 350),
    }

}