<template>
    <form class="d-flex" v-if="!registered || registered === undefined">
        <input v-model="email" type="email" placeholder="e-mail" class="form-control me-2">
        <input v-model="password" type="password" placeholder="пароль" class="form-control me-2">
        <button type="button" class="btn btn-success me-2" @click="login">Увійти</button>
    </form>
    <form class="d-flex align-content-center" v-else>
        <button type="button" class="btn btn-danger me-2" @click="logout">Вийти</button>
    </form>
</template>

<script>
import {sanctum} from "../../config/axios";

export default {
    data() {
        return {
            email: '',
            password: '',
            userName: ''
        }
    },
    methods: {
        login() {
            if (this.email.length > 0 && this.password.length > 0) {
                sanctum.get('sanctum/csrf-cookie')
                    .then(() => {
                        this.$query.post('/login', {
                            email: this.email,
                            password: this.password
                        })
                            .then(response => {
                                console.log(response.data)
                                if (response.data.success) {
                                    this.$store.commit('SET_USERNAME', response.data.user_name);
                                    this.$store.commit('SET_USERID', response.data.user_id);
                                } else {
                                    this.error = response.data.message
                                }
                            })
                            .catch(function (error) {
                                console.error(error);
                            });
                    })
            }
        },
        logout() {
            sanctum.get('/sanctum/csrf-cookie').then(() => {
                this.$query.post('/logout')
                    .then(response => {
                        if (response.data.success){
                            this.$store.commit('SET_USERNAME', undefined);
                            this.$store.commit('SET_USERID', undefined);
                        } else {
                            console.log(response)
                        }
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            })
        },
    },
    computed: {
        registered: function () {
            this.$store.dispatch('GET_USER');
            return this.$store.getters.USERNAME !== undefined;
        },
    },
}
</script>
