<template>
    <div class="col">
        <div class="card h-100" style="max-width: 560px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <div class="card-body">
                        <p class="card-price text-center">{{ part.price }} грн.</p>
                        <p class="card-text text-center">потрібно</p>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ part.name }}</h5>
                        <p class="card-text">{{ part.description }}</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: Number,
        count: Number,
    },
    data() {
        return {
            part: [],
        }
    },
    mounted() {
        this.$query.get('parts/' + this.id)
            .then(r => {
                this.part = r.data.data;
            })
    }
}
</script>
