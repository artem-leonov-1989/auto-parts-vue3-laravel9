<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Магазин</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Оплата</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Обмін</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Контакти</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "nav-bar"
}
</script>

<style scoped>

</style>
