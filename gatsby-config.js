module.exports = {
  siteMetadata: {
    title: `Panda Eating Lots and Lots and Lots`,
  },
  plugins: [
 {
      resolve: 'gatsby-source-openweathermap',
      options: {
        apikey: '20160123456789123456789212345678',
        location: 'Chicago',
        units: 'metric',
        type: 'forecast'
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
     'gatsby-plugin-offline',
     `gatsby-transformer-remark`,
     `gatsby-plugin-react-helmet`,
    // {
    //   resolve: 'gatsby-source-darksky',
    //   options: {
    //     key: '1f580123456789123456789212345678',
    //     latitude: '43.03',
    //     longitude: '-87.74',
    //     exclude: ['minutely']
    //   },
    // }
  ]
}