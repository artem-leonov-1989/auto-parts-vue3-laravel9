<template>
    <div class="col">
        <div class="card h-100" style="max-width: 560px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <div class="card-body">
                        <p class="card-price text-center">{{ part.price }} грн/шт</p>
                        <p class="card-text text-center fs-6">потрібно</p>
                        <input class="form-control" type="text" v-model="userCount">
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ part.name }}</h5>
                        <p class="card-text">{{ part.description }}</p>
                        <p class="card-text"><small class="text-muted">{{ part.manufacturer_code }}-{{ part.manufacturer }}</small></p>
                        <p class="card-text"><small class="text-muted">Залишок: {{ part.stock_balance }}</small></p>
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
            userCount: this.count
        }
    },
    mounted() {
        this.$query.get('parts/' + this.id)
            .then(r => {
                this.part = r.data.data;
            })
    },
    watch: {
        userCount: function (val) {
            let proofVar = val
            if (val > this.part.stock_balance) {
                this.userCount = this.part.stock_balance
                proofVar = this.userCount;
            }
            let basket = JSON.parse(localStorage.basket);
            for (let i = 0; i < basket.length; i++) {
                if (basket[i][0] === this.id) {
                    basket[i][1] = proofVar;
                }
            }
            localStorage.basket = JSON.stringify(basket);
        }
    },
}
</script>
