module.exports = {
  siteMetadata: {
    title: "Personal Portfolio | Arun Murugan",
    description: "Personal Portfolio site of Arun Murugan",
    author: "Arun Murugan",
    siteUrl: "https://arunmurugan78.github.io",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
