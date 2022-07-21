<template>
    <div class="d-grid gap-2">
        <button type="button" class="btn btn-outline-warning" v-for="auto in autos"
                :key = auto.id
                @click = 'chooseModel(auto.id)'>
            {{ auto.name }}
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            autos:[],
        }
    },
    methods: {
        chooseModel(id) {
            this.$emit('chooseModelId', id);
        }
    },
    mounted() {
        this.$query.get('autos')
            .then(autos => {
                this.autos = autos.data.data;
            })
    }
}
</script>
