<script>
import { store } from '../store.js';

    export default {
        name: "AppHeader",
        data(){
                return{
                    store,
                }
            } 
        }
</script>

<template>
    <header>
        <div class="container d-flex justify-between">
            <div>
                <h2>BOOLFLIX</h2>
            </div>
            <nav>
                <input type="text" placeholder="scrivi un film" v-model="store.nameFilm">
                <!-- leggere v-model nello store -->
                <select  v-model="store.seachTipology">
                    <!-- frase defaut -->
                    <option value="">Scegli tipologia</option>
                    <!-- Scelte disponibili -->
                    <option value="film">Film</option>
                    <option value="serie">Serie</option>
                </select>
                <button @click="$emit('searchFilm')">Cerca</button>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>

</style>