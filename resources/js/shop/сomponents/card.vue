<template>
    <div class="col">
        <div class="card text-center h-100" style="width: 18rem;">
            <div class="card-header">
                <h5 class="card-title">{{ name }}</h5>
            </div>
            <div class="card-body">
                <div class="h6 fw-bold" :class="currentClass">{{ availabilityText }}</div>
                <h6 class="card-subtitle mb-2 text-muted">{{ manufacturer_code }}-{{ manufacturer }}</h6>
                <h5 class="card-title">{{ price }} грн.</h5>
                <button type="button" class="btn btn-primary" @click="addPartInBasket" :disabled="disabledButton">Придбати</button>
            </div>
        </div>
    </div>
</template>

<script>
import authUser from "../mixins/authUser";

export default {
    mixins: [
        authUser
    ],
    props: {
        id: Number,
        name: String,
        manufacturer_code: String,
        manufacturer: String,
        price: Number,
        stock_balance: Number,
    },
    methods: {
        addPartInBasket() {
            let basket;
            if (localStorage.basket) {
                basket = JSON.parse(localStorage.basket);
                basket.push([this.id, 1, this.price]);
                localStorage.basket = JSON.stringify(basket);
            } else {
                basket = [[this.id, 1, this.price]];
                localStorage.basket = JSON.stringify(basket);
            }
        },
    },
    data() {
        return {
            styles: {
                success: 'text-success',
                danger: 'text-danger',
            },
            availability: undefined,
            availabilityText: undefined,
            currentClass: undefined,
            disabledButton: '',
        }
    },
    mounted() {
        this.availability = Number(this.stock_balance) !== 0;
        if (this.availability) {
            this.availabilityText = 'У наявності';
            this.currentClass = this.styles.success;
            this.disabledButton = false;
        } else {
            this.availabilityText = 'Відсутнє';
            this.currentClass = this.styles.danger;
            this.disabledButton = true;
        }
    },
}
</script>
