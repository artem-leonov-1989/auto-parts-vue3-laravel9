<template>
    <nav-bar></nav-bar>
    <div class="container">
        <div class="h1 mt-3 mb-2 text-center">Ваше замовлення</div>
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <basket-item v-for="part in parts"
                         :key=part[0]
                         :id=part[0]
                         :count=part[1]
            ></basket-item>
        </div>
    </div>
</template>

<script>
import basketItem from "./basket-item.vue";
export default {
    components: {
        basketItem,
    },
    data() {
        return {
            parts: [],
        }
    },
    mounted() {
        this.parts = JSON.parse(localStorage.basket);
    }
}
</script>
