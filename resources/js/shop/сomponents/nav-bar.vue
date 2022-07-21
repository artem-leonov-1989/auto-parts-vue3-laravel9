<template>
    <nav class="navbar navbar-dark bg-primary">
        <div class="container-fluid justify-content-between">
            <div class="d-flex justify-content-around">
                <router-link to="/" class="nav-link">Магазин</router-link>
            </div>
            <div class="d-flex justify-content-around align-content-center">
                <router-link to="/" class="nav-link">Кошик</router-link>
                <login></login>
            </div>
        </div>
    </nav>
</template>

<script>
import login from "./login.vue";
export default {
    components: {
        login
    }
}
</script>
