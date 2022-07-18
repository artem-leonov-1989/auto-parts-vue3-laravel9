<template>
    <nav class="nav flex-column mt-3">
        <div class="btn-group-vertical">
            <filter-button v-for="category in categories"
                           :key=category.id
                           :text=category.name
                           @click="selectCategory(category.id)">
            </filter-button>
        </div>
    </nav>
</template>

<script>
import filterButton from "./filter-button.vue";
export default {
    name: "filter-bar",
    components: {
        filterButton,
    },
    props: {
        categories: {
            type: Array,
            required: true
        },
    },
    methods: {
        selectCategory(id) {
            console.log(id);
        }
    }
}
</script>

<style scoped>

</style>
