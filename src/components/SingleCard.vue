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
            }
        }
</script>

<template>
<div class="card">
            <div class="image-card">
                <img :src="`https://image.tmdb.org/t/p/w500${this.cardInfo.backdrop_path}`" alt="">
            </div>
        </div>
</template>

<style lang="scss" scoped>
.card{
            max-width: calc((100% / 4) - 10px );
            margin: 5px;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover
            };
        }
</style>