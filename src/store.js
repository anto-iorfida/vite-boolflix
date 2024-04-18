import { reactive } from "vue";
import NextPage from "./components/NextPage.vue";

export const store = reactive({
    // array film user search
    resultSearch:[],
    // option search film / serie
    seachTipology :'',
    // option search language
    searchLanguage :'',
    // option search vote
    searchVote :'',
    // intup search name film/serie
    nameFilm :'',
    changePage:[],
    nextPage: 1
});