module.exports = {
  siteMetadata: {
    siteUrl: "https://www.bigboyalex.co.uk",
    title: "bigboyalex.co.uk",
  },
  plugins: [
    "gatsby-plugin-sass", 
  "gatsby-plugin-react-helmet", 
  {
    resolve: `gatsby-plugin-typescript`,
    options: {
      isTSX: true, // defaults to false
      jsxPragma: `jsx`, // defaults to "React"
      allExtensions: false, 
    },
    
  }],
};
