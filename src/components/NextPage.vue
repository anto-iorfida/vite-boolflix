<script>
import { store } from '../store.js';
import axios from 'axios';

    export default {
        name: "NextPage",
        data(){
                return{
                    store
                }
            } ,
        methods:{
            getNextPage(nextPage){
                nextPage ++;
                store.nextPage = nextPage;
                console.log(nextPage);
                
            },
            getLog(popo){
                console.log(popo);
            }
        },
        mounted(){
            this.getLog(store.nextPage)
        }
    }
</script>

<template>
    <div class="d-flex justify-center">
        <div class="previous">
            -
        </div>
        <div class="current">
            <p>{{ store.changePage.page }}</p>
        </div>
        <div class="next" @click="getNextPage(store.nextPage) , $emit('nextPage')">
            +
        </div>
    </div>
</template>

<style lang="scss" scoped>
.d-flex{
    background: linear-gradient(90deg, rgba(2,0,36,1) 23%, rgba(72,13,113,1) 59%, rgba(0,0,0,1) 100%);
    *{
        margin: 10px;
        background-color: whitesmoke;
    }
}
</style>