<template>
    <div class="d-grid gap-2">
        <button type="button" class="btn" v-for="auto in autos"
                :key = auto.id
                :class="buttonClass(auto.id)"
                @click = 'chooseModel(auto.id)'>
            {{ auto.name }}
        </button>
    </div>
</template>

<script>
import filterButtonSelect from "../mixins/filterButtonSelect";

export default {
    mixins: [
      filterButtonSelect,
    ],
    data() {
        return {
            autos:[],
        }
    },
    methods: {
        chooseModel(id) {
            this.selectId = id;
            this.$emit('chooseModelId', id);
        },
    },
    mounted() {
        this.$query.get('autos')
            .then(autos => {
                this.autos = autos.data.data;
            })
    }
}
</script>
