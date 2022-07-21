<template>
    <button type="button" class="btn btn-warning me-2" data-bs-toggle="modal" data-bs-target="#RegModal">
        Реєстрація
    </button>

    <div class="modal fade" id="RegModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Реєстрація</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="close">Close</button>
                    <button type="button" class="btn btn-primary">Зареэструватися</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "modal",
    methods: {
        close() {
            this.$emit('close');
        },
    },
}
</script>

<style>

</style>
