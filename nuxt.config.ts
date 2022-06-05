import { defineNuxtConfig } from 'nuxt';
import svgLoader from 'vite-svg-loader';

const ldjson = {
  "@context:": "http://schema.org",
  "@type": "Organization",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Dubrovačka 10A",
    "addressLocality": "Osijek",
    "addressRegion": "Osječko-Baranjska",
    "postalCode": "31000",
    "addressCountry": "HR"
  }, 
  "url": "https://www.tennisschule-bol-oliver.com.hr/",
  "name": "Tennisschule Oliver Jankovic",
  "legalName": "Tennisschule Oliver Jankovic, j.d.o.o. za podučavanje tenisa",
  "description": "Podučavanje tenisa svim dobnim skupinama",
  "logo": "https://www.tennisschule-bol-oliver.com.hr/images/logoTSduo.svg",
  "image": "https://www.tennisschule-bol-oliver.com.hr/images/logoTSduo.png",
  "foundingDate": "2022"
}

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: ['~/components/', '~/components/shared'],
  modules: ['@vueuse/nuxt'],
  app: {
    head: {
      title: 'Tennisschule Oliver Jankovic',
      htmlAttrs: {
        lang: 'en',
        dir: 'ltr',
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'keywords',
          content: 'tennis, bol, brac, tennisschule',
        },
        {
          name: 'description',
          content: 'Tennisschule Oliver Jankovic info page',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Tennisschule Oliver Jankovic'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Tennisschule Oliver Jankovic located in Bol on the island of Brac'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Tennisschule Oliver Jankovic'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://www.tennisschule-bol-oliver.com.hr/'
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'business.business'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://www.tennisschule-bol-oliver.com.hr/images/court.jpg'
        },
        {
          hid: 'og:image:alt',
          name: 'og:image:alt',
          content: 'Tennisschule Oliver Jankovic info page'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Tennisschule Oliver Jankovic located in Bol on the island of Brac'
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      script: [
        { type: 'text/javascript' },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(ldjson)

        }
      ],
    },
  },
  css: ["@/assets/styles/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/styles/variables/_index.scss";
          @import "@/assets/styles/helpers/_index.scss";`,
        },
      },
    },
    plugins: [
      svgLoader({
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: { removeViewBox: false },
              },
            },
          ],
        },
      }),
    ],
  },
});