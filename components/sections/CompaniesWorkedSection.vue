<script lang="ts" setup>
const companiesWorkedWith = [
  { name: 'InTouch Marketing', logo: '/images/intouch-marketing.png', link: 'https://intouch-marketing.com' },
  { name: 'Thermo Fisher Scientific', logo: '/images/thermofisher.svg', link: 'https://thermofisher.com' },
  { name: 'Katz Law', logo: '/images/katzlaw.png', link: 'https://katzlaw.com' },
  { name: 'Monrovia Nursery Company', logo: '/images/monrovia.svg', link: 'https://monrovia.com' },
  { name: 'Yuba-Sutter Chamber of Commerce', logo: '/images/yuba-sutter-chamber-of-commerce.png', link: 'https://yubasutterchamber.com' },
];
</script>

<template>
  <div class="pt-20 pb-20">
    <div class="container flex flex-row justify-center pb-6 mx-auto">
      <div class="flex flex-col items-center">
        <h3 class="text-3xl font-bold text-center">I've also worked with some pretty awesome companies:</h3>
        <p class="text-2xs">(None of these logos are mine, but let's add yours here?)</p>
      </div>
    </div>
    <div class="container flex flex-row flex-wrap items-center justify-evenly mx-auto">
      <div v-for="company in companiesWorkedWith" :key="company.name" class="flex flex-col px-3 py-1">
        <a :href="company.link" target="_BLANK" :title="company.name">
          <img :src="company.logo" :alt="company.name" class="w-[150px] max-w-[150px] max-h-[150px]" />
        </a>
      </div>
    </div>
  </div>
</template>
