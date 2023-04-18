<script lang="ts" setup>
interface IProps {
  icon?: string;
  rounded?: boolean;
  href?: string;
  hiddenHref?: string;
  showText?: boolean;
  textColorLightMode?: 'light' | 'dark';
  textColorDarkMode?: 'light' | 'dark';
  hoverTextColorLightMode?: 'light' | 'dark';
  hoverTextColorDarkMode?: 'light' | 'dark';
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingUnits?: 'px' | 'rem' | 'em' | 'ex' | 'vw' | 'vh' | 'lh' | '%';
}

const props = withDefaults(defineProps<IProps>(), {
  textColorDarkMode: 'light',
  textColorLightMode: 'dark',
  showText: true,
  paddingTop: 8,
  paddingBottom: 8,
  paddingLeft: 16,
  paddingRight: 16,
  paddingUnits: 'px',
});

const href = computed(() => {
  if (props.hiddenHref) {
    return window.atob(props.hiddenHref);
  }

  return props.href;
});

const paddingSimplifiedValue = computed(() => `${props.paddingTop}${props.paddingUnits} ${props.paddingRight}${props.paddingUnits} ${props.paddingBottom}${props.paddingUnits} ${props.paddingLeft}${props.paddingUnits}`);
</script>

<template>
  <a
    :href="href"
    target="_BLANK"
    :class="{
      'rounded-full': props.rounded === true,
      'rounded-sm': props.rounded !== true,
      'text-white': props.textColorLightMode === 'light',
      'text-black': props.textColorLightMode === 'dark',
      'dark:text-white': props.textColorDarkMode === 'light',
      'dark:text-black': props.textColorDarkMode === 'dark',
      'hover:text-white': props.hoverTextColorLightMode === 'light',
      'hover:text-black': props.hoverTextColorLightMode === 'dark',
      'dark:hover:text-white': props.hoverTextColorDarkMode === 'light',
      'dark:hover:text-black': props.hoverTextColorDarkMode === 'dark',
    }"
    :style="{ padding: paddingSimplifiedValue }"
    class="flex flex-row grow-0 shrink items-center border transition-color hover:bg-preferred-light-red hover:dark:bg-preferred-dark-red"
  >
    <div class="flex flex-col">
      <Icon v-if="props.icon" :name="props.icon" />
    </div>
    <div v-if="props.showText === true" class="flex flex-col ml-3">
      <span class="text-sm"><slot></slot></span>
    </div>
  </a>
</template>
