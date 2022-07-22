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
        <div class="d-grid gap-2 mt-3">
            <button class="btn btn-primary" :disabled="!registered" type="button" @click="checkout">Замовити</button>
        </div>
        <div class="alert alert-warning mt-3" role="alert" v-if="!registered">
           Щоб замовити, треба увійти до свого обликового запису, або
            <button class="btn btn-success" type="button">Зареєструватися</button>
        </div>
    </div>
</template>

<script>
import basketItem from "./basket-item.vue";
import authUser from "../mixins/authUser";
export default {
    mixins: [
        authUser
    ],
    components: {
        basketItem,
    },
    data() {
        return {
            parts: [],
        }
    },
    methods: {
        checkout() {
            this.$query.post('/orders')
                .then(r => {
                    console.log(r);
                }).catch(function (error) {
                console.log(error);
            })
        },
        mounted() {
            this.parts = JSON.parse(localStorage.basket);
        }
    }
}
</script>
