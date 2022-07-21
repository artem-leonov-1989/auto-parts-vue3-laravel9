<template>
    <nav-bar></nav-bar>
    <div class="container-fluid mt-3">
        <div class="row">
            <div class="col-2">
                <filter-bar @chooseCategoryId = "downloadByCategory"></filter-bar>
            </div>
            <div class="col-8">
                <counter :idCategory = "idCategory"></counter>
            </div>
            <div class="col-2">
                <about-user></about-user>
            </div>
        </div>
    </div>
</template>
<script>
import navBar from "./nav-bar.vue";
import counter from "./counter.vue";
import filterBar from "./filter.vue";
import aboutUser from "./about-user.vue";

export default {
    components: {
        navBar,
        counter,
        filterBar,
        aboutUser,
    },
    data() {
        return {
            idCategory: null,
        }
    },
    methods: {
        downloadByCategory(id) {
            this.idCategory = id;
        },
    },
}
</script>
