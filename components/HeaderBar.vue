<script lang="ts" setup>
import DarkToggle from '@/components/DarkToggle.vue';
import FancyButton from '@/components/FancyButton.vue';

const socialLinks = [
  {
    icon: 'mdi:github',
    href: 'https://github.com/notmike101',
  },
  {
    icon: 'mdi:linkedin',
    href: 'https://www.linkedin.com/in/mikeoroz',
  }
];
</script>

<template>
  <header class="fixed top-0 left-0 w-full bg-white dark:bg-preferred-dark-blue border-b z-20 shadow-sm">
    <nav class="flex flex-row-reverse md:flex-row container mx-auto py-6 justify-between items-center">
      <div class="flex flex-col">
        <client-only>
          <FancyButton
            icon="material-symbols:android-messages"
            hidden-href="bWFpbHRvOm1lQG1pa2Vvcm96Y28uZGV2"
            :rounded="true"
            hover-text-color-light-mode="light"
          >
            Say Hello
          </FancyButton>
        </client-only>
      </div>
      <div class="flex flex-col">
        <div class="flex flex-row">
          <div v-for="(socialLink, index) in socialLinks" :key="index" class="flex flex-col mr-2">
            <FancyButton
              :icon="socialLink.icon"
              :href="socialLink.href"
              hover-text-color-light-mode="light"
              :show-text="false"
              :rounded="true"
              :padding-left="10"
              :padding-right="10"
              :padding-top="10"
              :padding-bottom="10"
            />
          </div>
          <div class="flex flex-col">
            <DarkToggle />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
