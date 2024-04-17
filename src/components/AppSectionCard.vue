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

    .container{
        flex-wrap: wrap;
        overflow: hidden;
        
    }
}
</style>