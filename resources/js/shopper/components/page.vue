<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <router-link :to="{name: 'main-page'}" class="navbar-brand">Бренд</router-link>
        </div>
    </nav>
</template>

<script>
import ManuItem from "./manu-item.vue";

export default {
    name: "main-page",
    components: {
        ManuItem,
    },
}
</script>

<style scoped>

</style>
