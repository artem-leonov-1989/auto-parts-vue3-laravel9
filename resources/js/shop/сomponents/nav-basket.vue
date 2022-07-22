<template>
    <router-link to="/basket" class="nav-link me-2">Кошик {{ amountPurchases }} </router-link>
</template>

<script>
import authUser from "../mixins/authUser";

export default {
    mixins: [
        authUser,
    ],
    computed: {
        amountPurchases: function () {
            if (localStorage.basket) {
                let sum = 0;
                let basket = JSON.parse(localStorage.basket)
                basket.forEach(
                    (part) => {
                        sum = sum + Number(part[1] * part[2]);
                    }
                )
                return '(' + sum + ') грн.';
            } else {
                return '';
            }
        }
    }
}
</script>
