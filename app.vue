<script lang="ts" setup>
import HeaderBar from '~/components/HeaderBar.vue';
import HeaderSection from '~/components/sections/HeaderSection.vue';
import CoderImageSection from '~/components/sections/CoderImageSection.vue';
import BioSection from '~/components/sections/BioSection.vue';
import SkillsSection from '~/components/sections/SkillsSection.vue';
import CompaniesWorkedSection from '~/components/sections/CompaniesWorkedSection.vue';
import RecentWorkSection from '~/components/sections/RecentWorkSection.vue';
import ProjectReferralSection from '~/components/sections/ProjectReferralSection.vue';
import FooterSection from '~/components/sections/FooterSection.vue';

useHead({
  htmlAttrs: {
    lang: 'en',
  },
});

useSeoMeta({
  title: 'Mike Orozco | Full Stack Web Developer',
});
</script>

<template>
  <div class="flex flex-col dark:bg-gray-900 dark:text-white h-full transition-colors">
    <HeaderBar />
    <div class="mt-[125px]">
      <HeaderSection />
      <CoderImageSection />
      <BioSection />
      <SkillsSection />
      <CompaniesWorkedSection />
      <ProjectReferralSection />
      <RecentWorkSection />
      <FooterSection />
    </div>
  </div>
</template>
