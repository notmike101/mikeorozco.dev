<script lang="ts" setup>
const prefersColorScheme = (colorScheme: string) => {
  return window.matchMedia('(prefers-color-scheme: ' + colorScheme + ')')
};

const browserColorScheme = () => {
  if ((window as any).matchMedia && prefersColorScheme('').media !== 'not all') {
    for (const colorScheme of ['dark', 'light']) {
      if (prefersColorScheme(colorScheme).matches) {
        return colorScheme;
      }
    }
  }

  return 'light';
};

const currentColorMode = ref<string>('light');

watch(currentColorMode, (value) => {
  if (!localStorage?.getItem('color-mode')) {
    localStorage?.setItem('color-mode', value);
  }

  const { documentElement } = document;

  documentElement.classList.remove('dark', 'light');
  documentElement.classList.add(value);
});

onMounted(() => {
  currentColorMode.value = localStorage?.getItem('color-mode') ?? browserColorScheme();
});
</script>

<template>
  <button
    @click="currentColorMode = currentColorMode === 'dark' ? 'light' : 'dark'"
    class="border flex p-2.5 rounded-full bg-transparent transition-colors duration-300 hover:text-white hover:bg-preferred-light-red hover:dark:bg-preferred-dark-red"
  >
    <Icon v-if="currentColorMode === 'dark'" name="material-symbols:dark-mode" />
    <Icon v-else name="material-symbols:light-mode" />
  </button>
</template>
