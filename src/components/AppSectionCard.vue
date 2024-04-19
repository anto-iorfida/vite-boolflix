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
            } ,
            methods:{
                // funzione che ritorna solo tutti gli oggetti che hanno il parametro media_type === 'tv' o 'movie'
                // getTV() {
                //     return this.store.resultSearch.filter(card => card.media_type === 'tv');
                // },
                // getfilm() {
                //     return this.store.resultSearch.filter(card => card.media_type === 'movie');
                // }
            
            }
        }
</script>

<template>
<section>  
    <div class="result"><p>Risultati totali: {{ store.totResult }}</p></div>

    <div v-show="store.seachTipology === ''" >
        <!-- <h1>{{ store.resultSearch[0].media_type }}</h1> -->
        <!-- <h1>serie</h1>
        <div id="film" class="container d-flex">
            <SingleCard v-for="card in getTV()" :cardInfo="card"></SingleCard>
        </div> -->

        <!-- <h1>{{ store.resultSearch[0].media_type }}</h1> -->
        <h1>Film e serie</h1>
        <div  class="container d-flex">
            <SingleCard v-for="card in store.resultSearch" :cardInfo="card"></SingleCard>
        </div>
    </div>  

    <div v-show="store.seachTipology !== ''">
        <h1>{{ store.seachTipology }}</h1>
        <div class="container d-flex">
            <SingleCard v-for="card in store.resultSearch" :cardInfo="card"></SingleCard>
        </div>
    </div>
    
</section>
</template>

<style lang="scss" scoped>
section{
    height: 180vh;
    background: linear-gradient(90deg, rgba(2,0,36,1) 23%, rgba(72,13,113,1) 59%, rgba(0,0,0,1) 100%);
        h1{
            color: white;
            text-transform: uppercase;
            padding: 20px 30px;

        }
        .container{
        flex-wrap: wrap;
        // overflow: auto;
        height: 100vh;
        padding: 10px;   
        }
        // #film{
        //     border: 1px solid burlywood;
        //     max-height: 60vh;
        //     overflow-x: auto;
        // }
        // #serie{
        //     border: 1px solid burlywood;
        //     max-height: 60vh;
        //     overflow-x: auto;
        // }
        .result{
            background: linear-gradient(90deg, rgba(2,0,36,1) 23%, rgba(72,13,113,1) 59%, rgba(0,0,0,1) 100%);
            color: white;
            font-size: larger;
            display: inline-block;
            padding: 10px;
            border-radius: 10px;
            margin-left: 20px;
        }
}
</style>