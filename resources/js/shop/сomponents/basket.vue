<template>
    <nav-bar></nav-bar>
    <div class="container">

    </div>
</template>

<script>
export default {
    data() {
        return {
            parts: [],
        }
    },
    mounted() {
        this.parts = JSON.parse(localStorage.basket);
    }
}
</script>
