export default {
    data(){
        return {
            lead_outcome_codes: []
        }
    },
    methods: {
        search_lead_outcome_code(query){
            var vm = this
            if (query !== '') {
                vm.loading = true
                vm.onSearchLeadOutcomeCode(query, vm)
            } else {
                vm.loading = false
                vm.lead_outcome_codes = []
            }
        },
        onSearchLeadOutcomeCode: _.debounce(function (query, vm) {

            axios.get('/api/lead_outcome_codes/search?search=' + query).then(function (q) {
                vm.loading = false
                vm.lead_outcome_codes = q.data.map(item => {
                    return {value: item.id, label: item.description};
                })
            }).catch(function () {
                vm.loading = false
            })
        }, 350),
    }

}