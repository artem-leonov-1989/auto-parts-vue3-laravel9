<template>
    <div class="d-grid gap-2">
        <button type="button" class="btn btn-outline-primary" v-for="category in categories"
            :key = category.id
            @click = 'chooseCategory(category.id)'>
            {{ category.name }}
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories:[],
        }
    },
    methods: {
        chooseCategory(id) {
            this.$emit('chooseCategoryId', id);
        }
    },
    mounted() {
        this.$query.get('categories')
            .then(categories => {
                this.categories = categories.data.data;
            })
    }
}
</script>

<style scoped>

</style>
