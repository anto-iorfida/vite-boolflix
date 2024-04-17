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
    // function that extracts information from the API and filters upon clicking
    getFilmFromApi() {

      let apiUrl = 'https://api.themoviedb.org/3/search/'

      // parameters to add to the api
      const queryParams= { };

      // condition if user chooses film or serie-----------------
      if(store.seachTipology === 'film') {
        apiUrl += 'movie?api_key=d6c825e90dc40d1f4796f3344ccacfc5';
        queryParams.query = store.nameFilm

      }else if (store.seachTipology === 'serie'){
      apiUrl += 'tv?api_key=d6c825e90dc40d1f4796f3344ccacfc5';
        queryParams.query = store.nameFilm
      }
      // condition if user chooses language----------------------
      if(store.searchLanguage !== ''){
        queryParams.language = store.searchLanguage
      }
      // condition if user chooses vote----------------------
      if(store.searchVote !== ''){
        queryParams.vote_average.gte = store.searchVote
      }

console.log(queryParams.query);

      // call api
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
    // call function at the start
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
