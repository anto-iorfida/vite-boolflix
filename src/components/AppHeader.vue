<script>
import { store } from '../store.js';

    export default {
        name: "AppHeader",
        data(){
                return{
                    store,
                    menuInput: false
                }
            },
            methods:{
                getMenuInput(){
                    this.menuInput = !this.menuInput
                }
            }
        }
</script>

<template>
    <header>
        <div class="container d-flex justify-around">
            <div>
                <h2>BOOLFLIX</h2>
            </div>
            <nav>
                <div @click="getMenuInput">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div v-if="menuInput"  class="menu-input d-flex">
                    <input type="text" placeholder="scrivi un film" v-model="store.nameFilm">
                    <!-- select tipology streaming ------------------------------------->
                    <!-- leggere v-model nello store -->
                    <select  v-model="store.seachTipology">
                        <!-- frase defaut -->
                        <option value="">Scegli tipologia</option>
                        <!-- Scelte disponibili -->
                        <option value="film">Film</option>
                        <option value="serie">Serie</option>
                    </select>
                    <!-- select tipology language ---------------------------------------->
                    <select  v-model="store.searchLanguage">
                        <!-- frase defaut -->
                        <option value="">Lingua</option>
                        <!-- Scelte disponibili -->
                        <option value="it-IT">Italiano</option>
                        <option value="en-US">Inglese</option>
                        <option value="fr-FR">Francece</option>
                        <option value="es-ES">Spagnolo</option>
                        <option value="de-DE">Tedesco</option>
                        <option value="ja-JP">Giapponese</option>
                    </select>
                    <!-- select tipology vote ---------------------------------------------->
                    <select  v-model="store.searchVote">
                        <!-- frase defaut -->
                        <option value="">voto</option>
                        <!-- Scelte disponibili -->
                        <option value="vote_average.gte=1">1</option>
                        <option value="vote_average.gte=2">2</option>
                        <option value="vote_average.gte=3">3</option>
                        <option value="vote_average.gte=4">4</option>
                        <option value="vote_average.gte=5">5</option>
                        <option value="vote_average.gte=6">6</option>
                        <option value="vote_average.gte=7">7</option>
                        <option value="vote_average.gte=8">8</option>
                        <option value="vote_average.gte=9">9</option>
                    </select>
                    <!-- button search------------------------------------------------------->
                    <button @click="$emit('searchFilm')">Cerca</button>
                </div>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header{
    padding: 20px;
    .container{
        nav{
            .menu-input{
                position: absolute;
                background-color: rgba(0, 0, 0, 0.8);
                flex-wrap: wrap;
                flex-direction: column;
                *{
                    margin: 10px;
                }
                input{
                    padding: 4px;
                }
                select{
                    padding: 6px;
                }
                button{
                    padding: 4px;
                }
            }
        }
    }
}
</style>