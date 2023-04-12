<script lang="ts" setup>
const skills = [
  {
    title: 'Backend Developer',
    icon: 'mdi:server',
    elements: [
      {
        header: 'Languages',
        items: [
          'JavaScript',
          'Python',
          'C++',
          'SQL',
          'PHP',
        ],
      },
      {
        header: 'Technologies',
        items: [
          'Linux',
          'Windows',
          'Node.js',
          'MongoDB',
          'MySQL/MariaDB',
          'Docker',
          'Azure',
          'DigitalOcean',
          'CloudFlare',
        ]
      }
    ],
  },
  {
    title: 'Frontend Developer',
    icon: 'mdi:web',
    elements: [
      {
        header: 'Languages',
        items: [
          'JavaScript',
          'TypeScript',
          'HTML',
          'CSS',
          'SCSS',
        ],
      },
      {
        header: 'Frameworks',
        items: [
          'Vue.js',
          'React',
          'Bootstrap',
          'TailwindCSS',
          'WordPress',
          'NuxtJS',
          'ThreeJS',
          'BabylonJS',
        ]
      }
    ],
  },
];
</script>

<template>
  <div class="flex flex-row basis-full bg-preferred-green bg-gradient-to-b from-30% dark:from-30% to-20% dark:to-30% from-preferred-green to-white dark:to-preferred-dark-blue">
    <div class="flex flex-col basis-full container mx-auto">
      <div class="flex flex-col sm:flex-row justify-evenly basis-full">
        <div v-for="skill in skills" :key="skill.title" class="flex flex-col basis-1/3 grow-1 shrink-0 border dark:border-slate-500 py-10 px-3 rounded-lg bg-white dark:bg-preferred-dark-blue dark:text-white drop-shadow-md dark:drop-shadow-none mb-4 md:mb-0">
          <h3 class="text-2xl font-bold text-center mb-6">{{ skill.title }}</h3>
          <div v-for="element in skill.elements" :key="element.header" class="mb-4 last:mb-0">
            <h4 class="text-center mb-1 font-bold">{{ element.header }}:</h4>
            <ul class="text-center">
              <li v-for="item in element.items" :key="item" class="text-sm">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
