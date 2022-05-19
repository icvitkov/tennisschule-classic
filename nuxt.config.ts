import { defineNuxtConfig } from 'nuxt';
import svgLoader from 'vite-svg-loader';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: ['~/components/', '~/components/shared'],
  modules: ['@vueuse/nuxt'],
  app: {
    head: {
      title: 'Tennisschule',
      htmlAttrs: {
        lang: 'en',
        dir: 'ltr',
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Tennisschule info page',
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      script: [{ type: 'text/javascript' }],
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