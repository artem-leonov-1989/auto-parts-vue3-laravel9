<template>
    <nav-bar></nav-bar>
    <div class="container-fluid mt-3">
        <div class="row">
            <div class="col-2">
                <filter-model @chooseModelId = "sortByModel"></filter-model>
            </div>
            <div class="col-2">
                <filter-category @chooseCategoryId = "sortByCategory"></filter-category>
            </div>
            <div class="col-8">
                <counter
                    :idCategory="idCategory"
                    :idAuto="idAuto">
                </counter>
            </div>

        </div>
    </div>
</template>
<script>
import navBar from "./nav-bar.vue";
import counter from "./counter.vue";
import filterCategory from "./filter-category.vue";
import filterModel from "./filter-auto.vue";
import aboutUser from "./about-user.vue";

export default {
    components: {
        navBar,
        counter,
        filterCategory,
        filterModel,
        aboutUser,
    },
    data() {
        return {
            idAuto: null,
            idCategory: null,
        }
    },
    methods: {
        sortByCategory(id) {
            this.idCategory = id;
        },
        sortByModel(id) {
            this.idAuto = id;
        },
    },
}
</script>
