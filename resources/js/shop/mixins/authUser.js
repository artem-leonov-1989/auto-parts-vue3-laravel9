export default {
    computed: {
        registered: function () {
            return this.$store.getters.USERNAM !== undefined;
        },
    },
}
