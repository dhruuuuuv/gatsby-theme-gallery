module.exports = (options) => {
  const {
    primaryGalleryPath = "content/primaryGallery",
    secondaryGalleryPath = "content/secondaryGallery",
  } = options;

  return {
    siteMetadata: {
      title: "Gatsby Theme Gallery",
      description: "",
      author: "",
      social: [
        {
          name: "GitHub",
          url: "https://github.com/epilande/gatsby-theme-gallery",
        },
      ],
    },
    plugins: [
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: primaryGalleryPath,
          path: primaryGalleryPath,
        },
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: secondaryGalleryPath,
          path: secondaryGalleryPath,
        },
      },
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      "gatsby-plugin-theme-ui",
      "gatsby-plugin-typescript",
    ],
  };
};
