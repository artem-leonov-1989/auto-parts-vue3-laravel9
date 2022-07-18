<template>
    <nav-bar-shopper></nav-bar-shopper>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-2">
                <filter-bar :categories="categories">

                </filter-bar>
            </div>
            <div class="col-sm-10">

            </div>
        </div>
    </div>
</template>

<script>

import {axiosInstance} from "../../config/axios";
import filterBar from "./filter-bar.vue";

export default {
    name: "main-page",
    components: {
        filterBar,
    },
    data() {
        return {
            categories: []
        }
    },
    mounted() {
        axiosInstance.get('/categories/')
            .then(response => {
                this.categories = response.data.data;
            })
            .catch(error => {
                console.log(error)
            })
    },
}
</script>

<style scoped>

</style>
