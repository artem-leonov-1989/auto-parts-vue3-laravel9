<template>
    <nav-bar></nav-bar>
</template>
<script>
import navBar from "./nav-bar.vue";

export default {
    components: {
        navBar,
    },
    data() {
        return {
            categories: [],
            parts: [],
        }
    },
    methods: {

    },
    mounted() {
        Promise.all([
            this.$query.get('categories'),
            this.$query.get('parts')
        ]).then(([categories, parts]) => {
            this.categories = categories.data.data;
            this.parts = parts.data.data;
        });
    }
}
</script>
