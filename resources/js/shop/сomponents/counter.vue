<template>
    <div class="d-flex justify-content-center" v-if="loading">
        <div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-lg-4 g-4" v-else>
        <card v-for="card in showCards"
              :key=card.id
              :id=card.id
              :name=card.name
              :manufacturer_code=card.manufacturer_code
              :manufacturer=card.manufacturer
              :price=card.price>
        </card>
    </div>
</template>
<script>
import card from "./card.vue";

export default {
    components: {
        card
    },
    props: {
        idCategory: Number
    },
    data() {
        return {
            parts:[],
            loading: false,
        }
    },
    methods: {
        loadParts() {
            this.loading = true;
            this.$query.get('parts')
                .then(parts=>{
                    this.parts = parts.data.data
                })
                .finally(()=>{
                    this.loading = false
                })
        }
    },
    computed: {
        showCards() {
            return this.parts.filter((value) => {
                if (this.idCategory !== null) {
                    if (value.category_id === this.idCategory) {
                        return value
                    }
                } else {
                    return value
                }
            })
        }
    },
    mounted() {
        this.loadParts();
        /*let loadDate = setInterval(() => this.loadParts(), 30000);*/
       /* setTimeout(() => { clearInterval(loadDate); alert('stop'); }, 5000);*/
    }
}
</script>
