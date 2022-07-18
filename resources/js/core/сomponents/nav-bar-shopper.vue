<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <div class="navbar-nav">
                <router-link :to="{name: 'main-page'}" class="nav-link">Каталог товарів</router-link>
                <router-link :to="{name: 'contacts'}" class="nav-link">Контакти</router-link>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    name: "nav-bar-shopper",
}
</script>

<style scoped>

</style>
