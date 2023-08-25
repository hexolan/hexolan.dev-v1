/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Hexolan",
    description: "Hexolan is a UK-based Software Engineer crafting digital solutions in a world increasingly fueled by technology.",
    siteUrl: "https://hexolan.dev"
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Hexolan",
        short_name: "Hexolan",
        start_url: "/",
        background_color: "#0F172A",
        theme_color: "#282C5C",
        display: "standalone",
        icon: "src/images/icon.png"
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [
          {
            userAgent: "*",
            allow: "/"
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/
        }
      }
    }
  ]
};