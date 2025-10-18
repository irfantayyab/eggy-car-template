import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

const nextConfig: NextConfig = {
 typescript: {
  ignoreBuildErrors: true,
 },
 eslint: {
  ignoreDuringBuilds: true,
 },
 images: {
  remotePatterns: [
   {
    protocol: "https",
    hostname: "questhowth.ie",
    port: "",
    pathname: "/wp-content/uploads/2018/04/user-placeholder.png",
   },
  ],
 },
 turbopack: {
  rules: {
   "*.svg": {
    loaders: [
     {
      loader: "@svgr/webpack",
      options: {
       svgo: true,
       svgoConfig: {
        plugins: [
         {
          name: "preset-default",
          params: {
           overrides: {
            removeViewBox: false,
           },
          },
          removeDimensions: true,
         },
        ],
       },
      },
     },
    ],
    as: "*.js",
   },
  },
 },
 webpack(config) {
  const fileLoaderRule = config.module.rules.find((rule: any) => rule.test?.test?.(".svg"));

  config.module.rules.push(
   {
    ...fileLoaderRule,
    test: /\.svg$/i,
    resourceQuery: /url/,
   },

   {
    test: /\.svg$/i,
    issuer: fileLoaderRule.issuer,
    resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
    use: [
     {
      loader: "@svgr/webpack",
      options: {
       svgo: true,
       svgoConfig: {
        plugins: [
         {
          name: "preset-default",
          params: {
           overrides: {
            removeViewBox: false,
            removeDimensions: true,
           },
          },
         },
        ],
       },
      },
     },
    ],
   },
  );

  fileLoaderRule.exclude = /\.svg$/i;

  return config;
 },
};

export default withNextIntl(nextConfig);
