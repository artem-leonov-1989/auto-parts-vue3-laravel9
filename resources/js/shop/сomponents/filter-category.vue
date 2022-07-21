<template>
    <div class="d-grid gap-2">
        <button type="button" class="btn" v-for="category in categories"
                :key=category.id
                :class="buttonClass(category.id)"
                @click='chooseCategory(category.id)'>
            {{ category.name }}
        </button>
    </div>
</template>

<script>
import filterButtonSelect from "../mixins/filterButtonSelect";

export default {
    mixins: [
        filterButtonSelect
    ],
    data() {
        return {
            categories:[],
        }
    },
    methods: {
        chooseCategory(id) {
            this.selectId = id;
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
