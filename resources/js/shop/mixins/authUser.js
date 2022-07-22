export default {
    computed: {
        registered: function () {
            return this.$store.getters.USERNAME !== undefined;
        },
    },
}
