<script>
import { store } from '../store.js';
import SingleCard from './SingleCard.vue'


    export default {
        name: "AppSectionCard",
        components:{
            SingleCard
        },
        data(){
                return{
                    store
                }
            } 
        }
</script>

<template>
<section>

    <div class="container d-flex">
        <SingleCard v-for="card in store.resultSearch" :cardInfo="card"></SingleCard>
    </div>
    
</section>
</template>

<style lang="scss" scoped>
section{
    height: 100vh;
    
    background: linear-gradient(90deg, rgba(2,0,36,1) 23%, rgba(72,13,113,1) 59%, rgba(0,0,0,1) 100%);
        .container{
        flex-wrap: wrap;
        overflow: hidden;
        height: 100%;
        padding: 10px;

        
    }
}
</style>