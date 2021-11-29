<template>
  <div id="home">
    <Hero />
    <About />
    <WhatIDo />
    <WhatIveDone />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import About from '@/components/About.vue';
import WhatIDo from '@/components/WhatIDo.vue';
import WhatIveDone from '@/components/WhatIveDone.vue';

export default {
  name: 'App',
  components: {
    Hero,
    About,
    WhatIDo,
    WhatIveDone,
  },
};
</script>
