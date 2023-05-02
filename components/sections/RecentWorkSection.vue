<script lang="ts" setup>
const projects = [
  {
    title: 'Pack3D',
    description: 'Electron app written with TypeScript that optimizes GLTF files',
    url: 'https://github.com/notmike101/pack3d',
    image: 'https://share.mikeorozco.dev/1682995148.92e151a9-15ae-4333-bd88-b410bd66e467.png',
  },
  {
    title: 'WordPress Backdoor',
    description: 'WordPress plugin demonstrating persistent malicious user access & control',
    url: 'https://github.com/notmike101/Wordpress-Backdoor-Plugin',
    image: 'https://share.mikeorozco.dev/1682995196.eb1b125c-b27d-46c3-98e9-22c51a0e59ea.svg',
  },
  {
    title: 'Sunshine Sink Updater',
    description: 'Windows CLI tool to easily update audio sink configurations',
    url: 'https://github.com/notmike101/sunshine-stream-windows-audio-sink-updater',
    image: 'https://share.mikeorozco.dev/1682995210.0d64b6b2-3fca-458e-a0d2-051940b0986c.png',
  },
  {
    title: 'BD Server Themes',
    description: 'Extension to customize Discord based on which server is being viewed',
    url: 'https://github.com/notmike101/betterdiscord-server-themes',
    image: 'https://share.mikeorozco.dev/1682995221.522c2ac2-b547-429b-88e5-75d491f13e78.svg'
  },
  {
    title: 'BD Google Fonts',
    description: 'Extension to replace Discord fonts with a user selected font from Google Fonts',
    url: 'https://github.com/notmike101/betterdiscord-google-fonts',
    image: 'https://share.mikeorozco.dev/1682995221.522c2ac2-b547-429b-88e5-75d491f13e78.svg',
  },
  {
    title: 'JavaScript MonkeyPatcher',
    description: 'General purpose JavaScript monkey patcher',
    url: 'https://gist.github.com/notmike101/55e3e4b64a35de3fb2ab8894744c6d2b',
    image: 'https://share.mikeorozco.dev/brave_1682995120.4da9f553-a095-46f8-aa22-e517479d8182.png'
  }
];
</script>

<template>
  <div class="container flex flex-row justify-center mx-auto pt-20 max-w-2xl">
    <div class="flex flex-col justify-center items-center">
      <h2 class="text-3xl mb-6 font-bold">My Recent Work</h2>
      <p class="text-center">
        Ready to see what I can do? Check out some of the projects I've worked
        on, but don't stop there - there's a lot more to discover on
        <a href="https://github.com/notmike101" target="_BLANK" class="text-center text-preferred-light-red dark:text-preferred-dark-red underline font-bold">my GitHub</a>!
      </p>
    </div>
  </div>
  <div class="container max-w-6xl py-6 mx-auto flex flex-row flex-wrap justify-evenly">
    <div v-for="project in projects" :key="project.title" class="flex flex-col w-full max-w-[350px]">
      <a
        :href="project.url"
        target="_BLANK"
        :title="`Open ${project.title} in a new tab`"
        class="
          relative
          flex
          flex-row
          basis-[200px]
          shrink-0
          grow-1
          max-w-[350px]
          m-2
          overflow-hidden
          rounded-lg
          bg-black
          transition-transform
          md:hover:shadow-black/50
          md:hover:scale-105
          md:hover:shadow-md
          md:hover:dark:shadow-none
        "
      >
        <img :src="project.image" class="absolute block top-0 left-0 w-full blur-[6px] opacity-40" />
        <div class="absolute top-0 left-0 flex flex-col w-full h-full z-10 justify-center items-center px-4">
          <h2 class="text-white text-2xl font-bold text-center">{{ project.title }}</h2>
          <p class="text-white text-sm text-center">{{ project.description }}</p>
        </div>
      </a>
    </div>
  </div>
  <div class="flex flex-row justify-center pb-20">
    <div class="flex flex-col">
      <FancyButton
        icon="grommet-icons:github"
        href="https://github.com/notmike101"
        hover-text-color-light-mode="light"
      >
        See More On GitHub
      </FancyButton>
    </div>
  </div>
</template>
