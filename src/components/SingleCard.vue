<script>
import { store } from '../store.js';

    export default {
        name: "SingleCard",
        props :{
            cardInfo: Object
        },
        data(){
                return{
                    store
                }
            },
            methods:{
                // function to have original language film as img
                getImageUrl(name) {
                return new URL(`../assets/img/${name}.png`, import.meta.url).href;
            }
            },
            mounted (){
                this.getImageUrl(name)
            }
        }
</script>

<template>
    <!-- single card  -->
<div class="card">
            <div class="image-card">
                <img v-if="this.cardInfo.backdrop_path && this.cardInfo.backdrop_path.length > 0 " :src="`https://image.tmdb.org/t/p/w500${this.cardInfo.backdrop_path}`" alt="">
                <p v-else>Img non disponibile</p>
            </div>
            <!-- after hover appear information film/serie -->
            <div class="back">
                <p>Titolo: {{ this.cardInfo.title && this.cardInfo.title.length > 0 ? this.cardInfo.title : this.cardInfo.name }}</p>
                <p>Data uscita: {{ this.cardInfo.release_date && this.cardInfo.release_date.length > 0 ? this.cardInfo.release_date :this.cardInfo.first_air_date }}</p>
                <p>Vote: {{ this.cardInfo.vote_average.toFixed(1) }}</p>
                <!-- <img src="../assets/img/it.png" alt=""> -->
                <img :src="getImageUrl(this.cardInfo.original_language)" alt="">
            </div>
        </div>
</template>

<style lang="scss" scoped>
.card{
        width: calc((100% / 4) - 10px );
        min-height: 100px;
        margin: 5px;
        transform-style: preserve-3d;
        transition: transform 1s;
        perspective: 1000px;
        &:hover{
            transform: rotateY(180deg);
        }
        .image-card{
            color: white;
            border: 1px solid gray;
            height: 100%;
            text-align: center;
            
            p{
                margin-top: 20px;  
            }
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: cover
        }


        .back {
            background-color: rgba(0, 0, 0, 0.8);
            height: 100%;
            width: 100%;
            padding:0 6px;
            text-align: center;
            backface-visibility: hidden; 
            color: grey;
            font-size: x-small;
            position: absolute;
            top: 0;
            right: 0;
            transform: rotateY(180deg);
            img{
                max-width: 20px;
                max-height: 20px;
                position: absolute;
                bottom: 0;
                left: 0;
            }
            *{
                margin: 10px;
            }
        }

    }
@media (max-width: 600px) {
    .card {
    width: calc((100% / 3) - 10px);
    }
}
@media (max-width: 450px) {
    .card {
    width: calc((100% / 2) - 10px);
    }
}
</style>