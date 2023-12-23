import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Ubuntu: true,
        },
      },
    ],
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  build: {
    transpile: ["vuetify"],
  },
  css: ["@/assets/main.scss", "vuetify/lib/styles/main.sass"],
  vite: {
    ssr: {
      noExternal: [/\.css$/, /^vuetify/],
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
