<script >
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue'
import AppSectionCard from './components/AppSectionCard.vue'
import NextPage from './components/NextPage.vue'

export default {
  components: {
    store,
    AppHeader,
    AppSectionCard,
    NextPage
    
    
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
      // queryParams.page = store.nextPage;
      // condition if user chooses film or serie or all-----------------

      if(store.seachTipology === 'film') {
        apiUrl += 'movie?api_key=d6c825e90dc40d1f4796f3344ccacfc5';
        queryParams.query = store.nameFilm

      }else if (store.seachTipology === 'serie'){
        apiUrl += 'tv?api_key=d6c825e90dc40d1f4796f3344ccacfc5';
        queryParams.query = store.nameFilm

      }else if (store.seachTipology === '') {
        apiUrl += 'multi?api_key=d6c825e90dc40d1f4796f3344ccacfc5';
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

      // next Page-----------------------------------------
      if(store.nextPage !== 1){
        queryParams.page = store.nextPage
      }

console.log('titolo input:',queryParams.query);

      // call api
      axios.get(apiUrl, {
        params: queryParams
      })
      .then((response) => {
        store.resultSearch = response.data.results;
        store.changePage = response.data;
        store.totResult = response.data.total_results
        store.totPages = response.data.total_pages
        // console.log('oggetto del api',response);
        // console.log('tot pagine',response.data.total_pages);
        // console.log('tot risultati',response.data.total_results);
        // console.log('variabile cambio pagina:',store.changePage);
        console.log('risultato ricerca',response.data);
        
        
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
    <NextPage @nextPage="getFilmFromApi"></NextPage>
    <AppSectionCard></AppSectionCard>
  </main>
</template>

<style lang="scss">
@use './style/generic';


</style>
