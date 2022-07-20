import { createStore } from 'vuex';
import {sanctum} from "./axios";
import axios from "axios";

const store = createStore({
    state () {
        return {
            userid: undefined,
            username: undefined,
        }
    },
    getters: {
        USERID: state => {
            return state.userid;
        },
        USERNAME: state => {
            return state.username
        }
    },
    mutations: {
        SET_USERID: (state, payload) => {
            state.userid = payload;
        },
        SET_USERNAME: (state, payload) => {
            state.username = payload;
        },
    },
    actions: {
        GET_USER: async (context) => {
            await sanctum.get('sanctum/csrf-cookie')
                .then(() => {
                    axios.get('http://auto-parts.test/api/user')
                        .then(response => {
                            context.commit('SET_USERNAME', response.data.user_name);
                            context.commit('SET_USERID', response.data.user_id);
                        })
                })
        },
    }
})

export default store;
