<script lang="ts" setup>
import FancyButton from '@/components/FancyButton.vue';
</script>

<template>
  <div class="flex flex-row bg-preferred-light-red py-10">
    <div class="flex flex-col basis-full justify-center items-center">
      <div class="flex flex-col md:flex-row max-w-[800px] w-full justify-center items-center">
        <div class="flex flex-col basis-1/2 items-start">
          <img class="w-[350px]" src="/images/coders-together.svg" alt="Coders sitting together working" />
        </div>
        <div class="flex flex-col basis-1/2 items-center">
          <h2 class="text-xl text-white font-bold">Got an idea?</h2>
          <h2 class="text-xl text-white font-bold mb-6">Lets build it together!</h2>
          <client-only>
            <FancyButton
              icon="material-symbols:code"
              hidden-href="bWFpbHRvOm1lQG1pa2Vvcm96Y28uZGV2"
              :rounded="true"
              text-color-light-mode="light"
              hover-text-color-light-mode="light"
            >
              Lets Start Working
            </FancyButton>
          </client-only>
        </div>
      </div>
    </div>
  </div>
</template>
