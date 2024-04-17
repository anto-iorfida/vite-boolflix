<script>
    export default {
        name: "SingleCard",
        data(){
                return{

                }
            } 
        }
</script>

<template>
<div class="card">
            <div class="image-card">
                <img src="" alt="">
            </div>
        </div>
</template>

<style lang="scss" scoped>
.card{
            width: ((100% / 6) - 10 );
            img{
                width: 100%;
                height: 100%
            };
        }
</style>