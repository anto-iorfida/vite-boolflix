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
            // next page
            getNextPage(nextPage){
                if(store.nextPage < store.totPages){
                    nextPage ++;
                    store.nextPage = nextPage;  
                }                
            },
            // previous page
            getPreviousPage(nextPage){
                if(store.totPages > 1){
                    nextPage --;
                    if(nextPage >= 1){
                        store.nextPage = nextPage;
                    }
                }
            },
        },
    }
</script>

<template>
    <div class="d-flex justify-center">
        <!-- click - for previous pages -->
        <div class="previous" @click="getPreviousPage(store.nextPage) , $emit('nextPage')">
            -
        </div>

        <!--num current page  -->
        <div class="current">
            <p>{{ store.changePage.page }}</p>
        </div>

        <!-- click + for next pages -->
        <div class="next" @click="getNextPage(store.nextPage) , $emit('nextPage')">
            +
        </div>
    </div>
</template>

<style lang="scss" scoped>
.d-flex{
    background: linear-gradient(90deg, rgba(2,0,36,1) 23%, rgba(72,13,113,1) 59%, rgba(0,0,0,1) 100%);
    align-items: center;
    *{
        margin: 10px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: whitesmoke;
    }
    .previous,.next{
        height: 20px;
        width: 20px;
        &:hover{
            transition: transform 0.4s ease-out;
            transform: scale(1.2);
            cursor: pointer;
        }
    }
    .current{
        height: 30px;
        width: 30px;
    }
    
}

</style>