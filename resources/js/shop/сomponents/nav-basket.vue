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
            if (this.registered) {

            } else {
                if (localStorage.basket) {
                    let sum = 0;
                    localStorage.basket.forEach(
                        (part) => {
                            sum = sum + Number(part.amount * part.price);
                        }
                    )
                    return '(' + sum + ') грн.';
                }  else {
                    return '';
                }
            }
        }
    }
}
</script>
