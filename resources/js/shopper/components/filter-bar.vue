<template>
    <nav class="nav flex-column mt-3">
        <button class="btn" v-for="category in categories">{{ category.name }}</button>
    </nav>
</template>

<script>
export default {
    name: "filter-bar",
    props: {
        categories: {
            type: Array,
            required: true
        },
    }
}
</script>

<style scoped>

</style>
