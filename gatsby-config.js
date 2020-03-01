module.exports = {
  siteMetadata: {
    title: `RustFest.eu Netherlands`,
    description: `The 2020 edition in the Netherlands of a Rust Community conference travelling all around Europe.`,
    author: `Rust Nederland`,
    siteUrl: 'https://netherlands.rustfest.eu',
  },
  mapping: {
    'MarkdownRemark.fields.sessions': `MarkdownRemark`,
    'MarkdownRemark.fields.speakers': `MarkdownRemark`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sessions`,
        path: `${__dirname}/content/sessions`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `speakers`,
        path: `${__dirname}/content/speakers`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sponsors`,
        path: `${__dirname}/content/sponsors`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `teammembers`,
        path: `${__dirname}/content/teammembers`,
      },
    },
    {
      // Pull in the articles from the RustFest blog.
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://blog.rustfest.eu/feed.xml`,
        name: `RustFestBlog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RustFest.eu Netherlands`,
        short_name: `RustFest`,
        start_url: `/`,
        background_color: `#0067FB`,
        theme_color: `#0067FB`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sitemap',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
