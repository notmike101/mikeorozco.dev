<template>
  <section id="what-ive-done" class="section">
    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-parent is-vertical">
          <article
            v-for="(entry, index) in entries"
            :key="index"
            class="tile box is-child"
          >
            <div class="columns">
              <div v-if="entry.image" class="column is-one-third">
                <img :src="entry.image" />
              </div>
              <div
                class="column"
                :class="{
                  'is-two-thirds': entry.image,
                  'is-full': !entry.image
                }"
              >
                <p v-if="entry.title" class="title">{{ entry.title }}</p>
                <p v-if="entry.description" class="content">
                  {{ entry.description }}
                </p>
                <div v-if="entry.links && entry.links.length > 0" class="links">
                  <a
                    v-for="(link, index) in entry.links"
                    :key="index"
                    :href="link"
                    class="link"
                  >
                    {{ link }}
                  </a>
                </div>
                <p v-if="entry.date" class="date">
                  Last Update: {{ $luxon(entry.date, 'relative') }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      entries: [
        {
          title: 'Express REST API Template',
          date: '2020-09-10',
          links: ['https://github.com/notmike101/express-rest-api-template'],
          description:
            `REST API built using ExpressJS framework & NodeJS. This is a ` +
            `template for future REST APIs I may build.`
        },
        {
          title: 'MangaMags',
          date: '2013-01-01',
          links: [
            'https://mangamags.com',
            'https://github.com/notmike101/mangamags.com'
          ],
          description:
            `An old project that allowed visitors to read a collection of ` +
            `Manga that was stored in a MySQL database. This project was ` +
            `completed in a period of 3 days.`
        },
        {
          title: 'OLX.ro Scraper',
          date: '2020-10-26',
          links: ['https://github.com/notmike101/OLX.ro-Scraper'],
          // eslint-disable-next-line max-len
          description: `Scrapes www.olx.ro for any phone numbers when given a URL`
        },
        {
          title: 'Harris County Court Record Extraction Script',
          date: '2020-10-18',
          links: [
            // eslint-disable-next-line max-len
            'https://github.com/notmike101/harriscounty-texas-court-record-extract'
          ],
          // eslint-disable-next-line max-len
          description: `Scrapes Harris County, Texas court website for eviction cases.`
        },
        {
          title: 'Blobfuse Mount Service',
          date: '2019-07-31',
          links: ['https://github.com/notmike101/blobfuse-mount-service'],
          description:
            `Takes multiple stored configuration files specifying which blob ` +
            `storage block to use and mounts the blob block into ` +
            `/mnt/fuse-(blobname).`
        },
        {
          title: 'ReadCreepy',
          date: '2018-06-07',
          links: [
            'https://readcreepy.gq',
            'https://github.com/notmike101/readcreepy'
          ],
          description:
            `My first project that made use of GitHub pages. This is a proof ` +
            `of concept project for Artris to test a web-optimization tool ` +
            `using JavaScript.`
        },
        {
          title: 'QuikHop',
          date: '2014-07-12',
          links: ['https://github.com/notmike101/QuikHop'],
          description:
            `Simple Source Engine hack that allows for users to utilize ` +
            `momentum boosts acquired through "bunny hopping" and perfectly ` +
            `timed jumps`
        },
        {
          title: 'Microsoft Teams Custom Code Patch',
          date: '2020-04-14',
          links: ['https://github.com/notmike101/teams-custom-code-patch'],
          description:
            `Allow custom javascript code to be ran locally on MS Teams. ` +
            `Can be used for multiple purposes such as creating self-bots ` +
            `and injecting custom styling.`
        },
        {
          title: 'Bad Password Generator',
          date: '2020-06-03',
          links: ['https://github.com/notmike101/bad-password-generator'],
          description:
            `A FireFox plugin that allows for secure password generation. ` +
            `Passwords generated using this tool contain profanity and are ` +
            `considered humorous in the English language.`
        },
        {
          title: 'Klyde',
          links: ['https://klyde.me'],
          date: '2017-12-29',
          description:
            `Designed and developed from scratch with another software ` +
            `developer to create the scraper program. Entire frontend was ` +
            `designed and given functionality by myself. Also created an API ` +
            `to integrate with the backend of the website so future apps can ` +
            `access the same information as the website. Backend written in ` +
            `pure native PHP with a custom made template engine.`
        },
        {
          title: 'Multi-OS Shellcode',
          date: '2014-07-27',
          links: ['https://github.com/notmike101/MultiOS-ShellCode'],
          description:
            `A proof-of-concept project that allows for shell-code to be ` +
            `used across multiple versions of the Windows operating system. ` +
            `It works by putting null code (\\DE\\AD\\C0\\DE) in place of ` +
            `library addresses, then finds the proper addresses during ` +
            `run-time.`
        },
        {
          title: 'LeakedWP',
          date: '2016-12-17',
          links: [
            'https://leakedwp.com',
            'https://github.com/notmike101/leakedwp.com'
          ],
          description:
            `A website created for sharing and distributing WordPress ` +
            `plugins and themes under the GPL license. Maintained by ` +
            `separate developers, designed by myself.`
        },
        {
          title: 'WordPress Backdoor Plugin',
          date: '2016-06-28',
          links: ['https://github.com/notmike101/Wordpress-Backdoor-Plugin'],
          description:
            `An installable plugin that will give you unrestricted access to ` +
            `the server's file system and allow for uninterrupted or ` +
            `undetected access. This plugin is strictly for educational and ` +
            `rescue purposes only, and built with the intention of ` +
            `non-malicious use. Misuse of this plugin is caused by the ` +
            `intention of the user, not at the contributors. The ` +
            `contributors take no responsibility for any misuse of this plugin.`
        },
        {
          title: 'InTouch Marketing Blog',
          links: ['https://blog.intouch-marketing.com'],
          description:
            `Designed and developed using the HubSpot platform with no theme ` +
            `used, for InTouch Marketing.`
        },
        {
          title: 'WP Protectors',
          date: '2016-07-15',
          links: ['https://wpprotectors.com'],
          description:
            `Designed and developed using the Bridge WordPress ` +
            `Theme, for InTouch Marketing.`
        },
        {
          title: 'Harmony Insurance',
          date: '2015-06-01',
          links: ['http://hsocal.com/'],
          description:
            `Designed and developed using the Bridge WordPress Theme, for ` +
            `InTouch Marketing.`
        },
        {
          title: 'IDR Environmental Blog',
          date: '2015-06-01',
          links: ['https://blog.idrenvironmental.com'],
          description:
            `Designed and developed using the HubSpot platform with no theme ` +
            `used, for InTouch Marketing & IDR Environmental.`
        },
        {
          title: 'GeekSquad MRI Loader',
          date: '2016-07-12',
          description:
            `A fully open-source patch built in C++ to disable GeekSquad ` +
            `MRI's expiration date to allow for use of older versions. Works ` +
            `by using the MS Detours C++ library to hook into the Win32 API ` +
            `fake the date checking routine built into the software by ` +
            `keeping the year in-between the expected year for the software ` +
            `to work. The source code to this is kept private to prevent any ` +
            `IP issues.`
        },
        {
          title: 'Serofit Website',
          links: ['https://serofit.com'],
          description:
            `Designed and developed using the Bridge WordPress Theme, for ` +
            `SmartChicksMedia.`
        },
        {
          title: 'BetterDiscord - EvenBetterRepo',
          date: '2017-08-09',
          links: ['https://github.com/IRDeNial/BD-Even-Better-Repo'],
          description:
            `A better implementation of a repository for themes & plugins ` +
            `for BetterDiscord that allows for users of Discord to easily ` +
            `install plugins and themes to their client. Built using ` +
            `JavaScript & jQuery.`
        },
        {
          title: 'Michael Pham Law Website',
          links: ['https://michalphamlaw.com'],
          description:
            `Designed and developed using the Bridge WordPress Theme, as ` +
            `requested, for SmartChicksMedia then passed on to another ` +
            `development team.`
        },
        {
          title: 'LabTech Supply Company Website',
          links: ['https://labtechsupplyco.com'],
          description:
            `Designed and developed using the Envision WordPress Theme for ` +
            `InTouch Marketing.`
        },
        {
          title: 'AZ Solar Now',
          links: ['https://azsolarnow.com'],
          description:
            `Designed and developed using the Bridge WordPress Theme for ` +
            `InTouch Marketing, then passed to another development team.`
        },
        {
          title: 'Google Spreadsheet Database',
          date: '2014-07-30',
          links: ['https://github.com/notmike101/GoogleSpreadsheetDB'],
          description:
            `An example of how to use a Google Drive spreadsheet as a small ` +
            `database for web applications. A detailed description of ` +
            `how this works is in the code repository's README file.`
        },
        {
          title: 'NodeMD5',
          date: '2014-07-25',
          links: ['https://md5.xyz', 'https://github.com/notmike101/NodeMD5'],
          description:
            `NodeMD5 is a simple web application powered by Node.JS and ` +
            `built using a MEAN (Mongo, Express, Angler, Nginx) stack. It ` +
            `compiles a list of MD5 hashes from user input and allows users ` +
            `to look up MD5 hashes through the list, as well as create ` +
            `their own MD5 hashes.`
        },
        {
          title: 'Hell0W0rld',
          date: '2016-06-12',
          links: ['https://github.com/notmike101/Hell0W0rld'],
          description:
            `A not-so-simple "Hello, World" program that was built for a ` +
            `self-provided test for my personal abilities to see how I've ` +
            `progressed since first learning C++. This test implements use ` +
            `of linked lists, pointers, classes, and template functions.`
        }
      ]
    }
  }
}
</script>
