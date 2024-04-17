<script >
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue'
import AppSectionCard from './components/AppSectionCard.vue'

export default {
  components: {
    store,
    AppHeader,
    AppSectionCard
    
    
  },
  data() {
    return {
      store
    };
  },
  methods: {
    getFilmFromApi() {

      let apiUrl = 'https://api.themoviedb.org/3/search/'

      const queryParams= { };

      if(store.seachTipology === 'film') {
        apiUrl += 'movie?api_key=d6c825e90dc40d1f4796f3344ccacfc5';
        queryParams.query = store.nameFilm

      }else if (store.seachTipology === 'serie'){
      apiUrl += 'tv?api_key=d6c825e90dc40d1f4796f3344ccacfc5';
        queryParams.query = store.nameFilm
      }

console.log(queryParams.query);

      
      axios.get(apiUrl, {
        params: queryParams
      })
      .then((response) => {
        store.resultSearch = response.data.results;
        console.log(response);
        console.log(store.resultSearch);
        
        
      });
    }
  },
  mounted() {
    this.getFilmFromApi();
  }
}
</script>

<template>
  <AppHeader @searchFilm="getFilmFromApi"></AppHeader>

  <main>
    <AppSectionCard></AppSectionCard>
  </main>
</template>

<style lang="scss">
@use './style/generic';

</style>
