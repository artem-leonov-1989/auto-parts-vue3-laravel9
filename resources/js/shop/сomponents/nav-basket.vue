<template>
    <router-link to="/basket" class="nav-link">Кошик {{ amount }} </router-link>
</template>

<script>

export default {
    methods: {
         amountPurchases() {
            if (localStorage.basket) {
                let sum = 0;
                let basket = JSON.parse(localStorage.basket);
                basket.forEach(
                    (part) => {
                        sum = sum + Number(part[1] * part[2]);
                    }
                )
                this.amount = '(' + sum.toFixed(2) + ' грн.)';
            } else {
                this.amount = '';
            }
        }
    },
    data() {
        return {
            amount: undefined,
        }
    },
    mounted() {
        let timerId = setInterval(() => {this.amountPurchases()}, 500);
    }
}
</script>
