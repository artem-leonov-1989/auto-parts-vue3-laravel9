export default {
    data() {
        return {
            classes:{
                select: 'btn-warning',
                noSelect: 'btn-outline-primary',
            },
            selectId: null,
        }
    },
    methods: {
        buttonClass(id) {
            if (id === this.selectId) {
                return this.classes.select
            } else {
                return this.classes.noSelect
            }
        }
    }
}
