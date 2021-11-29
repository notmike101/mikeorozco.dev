<template>
  <section id="what-i-do" class="section">
    <div class="container">
      <h1 class="title has-text-centered text-white">What I Do</h1>
      <div class="columns is-multiline">
        <div
          v-for="(entry, entryIndex) in entries"
          :key="entryIndex"
          class="column is-one-third"
        >
          <div class="box has-text-centered">
            <i class="icon fa" :class="entry.icon"></i>
            <p class="title">{{ entry.title }}</p>
            <p class="content">{{ entry.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      entriesPerColumn: 2,
      entries: [
        {
          icon: 'fab fa-wordpress',
          title: 'WordPress Development',
          content:
            `I am experienced with WordPress and can create, update, and ` +
            `maintain your websites with ease.`,
        },
        {
          icon: 'fa-server',
          title: 'Full-Stack Development',
          content:
            `I've kept up to date on modern web technologies and can build a ` +
            `website that you want from scratch!`,
        },
        {
          icon: 'fa-user',
          title: 'Server Administration',
          content:
            `Servers are an area that I studied for self-benefit, but it ` +
            `grew into a passion that I can now offer as a service to you!`,
        },
        {
          icon: 'fa-laptop-code',
          title: 'Web App Development',
          content:
            `Using the skills from software and web development, I ` +
            `can create web applications to fit your every need!`,
        },
        {
          icon: 'fa-code',
          title: 'Software Development',
          content:
            `I know multiple programming languages for desktop and server ` +
            `environments!`,
        },
        {
          icon: 'fa-mobile-alt',
          title: 'Mobile App Development',
          content:
            `I use the Quasar framework to build mobile apps, which ` +
            `allows for cross-platform app development.`,
        },
      ],
    };
  },
  computed: {
    chunkedEntries() {
      return this.entries.reduce((result, entry, index) => {
        const chunkIndex = Math.floor(index / this.entriesPerColumn);

        if (!result[chunkIndex]) {
          result[chunkIndex] = [];
        }

        result[chunkIndex].push(entry);

        return result;
      }, []);
    },
  },
};
</script>
