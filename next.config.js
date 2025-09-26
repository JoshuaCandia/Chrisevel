const withImages = require("next-images");

module.exports = withImages({
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  output: "standalone",
  images: {
    domains: ["res.cloudinary.com"],
    disableStaticImages: false,
    unoptimized: false,
  },
});
