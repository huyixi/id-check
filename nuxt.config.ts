// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "身份证核验",
      htmlAttrs: {
        lang: "zh-CN",
      },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://id.huyixi.com" },
      ],
      meta: [
        {
          name: "description",
          content: "身份证号码有效性校验、出生年月日校验、行政区划属地匹配。",
        },
        {
          name: "keywords",
          content:
            "身份证, 身份证核验, 身份证号码校验, 出生日期校验, 行政区划匹配",
        },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "身份证核验" },
        {
          property: "og:description",
          content: "身份证号码有效性校验、出生年月日校验、行政区划属地匹配。",
        },
        { property: "og:url", content: "https://id.huyixi.com" },
        { property: "og:site_name", content: "身份证核验" },
        { property: "og:locale", content: "zh_CN" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: "身份证核验" },
        {
          name: "twitter:description",
          content: "身份证号码有效性校验、出生年月日校验、行政区划属地匹配。",
        },
      ],
    },
  },
  appConfig: {
    title: "身份证核验",
    description: "身份证号码有效性校验、出生年月日校验、行政区划属地匹配。",
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/ui"],
  css: ["~/assets/css/main.css"],
});
