<script >
import AppHeader from './components/AppHeader.vue'
import AppSectionCard from './components/AppSectionCard.vue'

export default {
  components: {
    AppHeader,
    AppSectionCard
    
    
  }
}
</script>

<template>
  <AppHeader></AppHeader>

  <main>
    <AppSectionCard></AppSectionCard>
  </main>
</template>

<style lang="scss">
@use './style/generic';

</style>
