<template>
    <div class="col">
        <div class="card text-center h-100" style="width: 18rem;">
            <div class="card-header">
                <h5 class="card-title">{{ name }}</h5>
            </div>
            <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted">{{ manufacturer_code }}-{{ manufacturer }}</h6>
                <h5 class="card-title">{{ price }} грн.</h5>
                <button type="button" class="btn btn-primary">Придбати</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: Number,
        name: String,
        manufacturer_code: String,
        manufacturer: String,
        price: Number,
    }
}
</script>
