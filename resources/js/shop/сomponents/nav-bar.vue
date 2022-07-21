<template>
    <nav class="navbar navbar-dark bg-primary">
        <div class="container-fluid justify-content-between">
            <div class="d-flex justify-content-around">
                <router-link to="/" class="nav-link me-2">Магазин</router-link>
                <nav-basket></nav-basket>
            </div>
            <div class="d-flex justify-content-around align-content-center">

                <login></login>
            </div>
        </div>
    </nav>
</template>

<script>
import login from "./login.vue";
import navBasket from "./nav-basket.vue";
export default {
    components: {
        login,
        navBasket,
    }
}
</script>
