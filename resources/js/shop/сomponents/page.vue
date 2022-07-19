<template>
    <nav-bar></nav-bar>
    <div class="container-fluid mt-3">
        <div class="row">
            <div class="col-2">
                <filter-bar></filter-bar>
            </div>
            <div class="col-5">
                <counter></counter>
            </div>
        </div>
    </div>
</template>
<script>
import navBar from "./nav-bar.vue";
import counter from "./counter.vue";
import filterBar from "./filter.vue";

export default {
    components: {
        navBar,
        counter,
        filterBar,
    },
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {
        /*Promise.all([
            this.$query.get('categories'),
            this.$query.get('parts')
        ]).then(([categories, parts]) => {
            this.categories = categories.data.data;
            this.parts = parts.data.data;
        });*/
    }
}
</script>
