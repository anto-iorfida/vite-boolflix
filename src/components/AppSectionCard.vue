<script>
import SingleCard from './SingleCard.vue'

    export default {
        name: "AppSectionCard",
        components:{
            SingleCard
        },
        data(){
                return{

                }
            } 
        }
</script>

<template>
<section>
    <div class="container">
        <SingleCard></SingleCard>
    </div>
</section>
</template>

<style lang="scss" scoped>
section{

    .container{

        
    }
}
</style>