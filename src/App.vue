<template>
  <div id="app">
    <Header />
    <Hero />
    <About />
    <WhatIDo />
    <WhatIveDone />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import WhatIDo from '@/components/WhatIDo.vue'
import WhatIveDone from '@/components/WhatIveDone.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    About,
    WhatIDo,
    WhatIveDone
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main';
</style>
