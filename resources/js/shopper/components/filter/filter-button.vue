<template>
    <button type="button" class="btn btn-dark">
        {{ text }}
    </button>
</template>

<script>
export default {
    name: "filter-button",
    props: {
        text: String,
    },
}
</script>

<style scoped>

</style>
