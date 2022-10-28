const SUPPORTED_LANGUAGES = ['en', 'jp', 'de']

const { graphql } = require('gatsby')

exports.createPages = async ({ actions }) => {
    actions.createPage({
        path: "/",
        // a page component that utilizes DefaultLayout
        component: require.resolve(`./src/templates/home.js`),
        context: {
            // language,
        },
        slices: {
            // Any time `<Slice alias="header">` is seen on this page,
            // use the `header-${language}` id
            // 'header': `header-${language}`
        }
    })
    actions.createPage({
        path: "/bio",
        // a page component that utilizes DefaultLayout
        component: require.resolve(`./src/templates/bio.js`),
        context: {
            // language,
        },
        slices: {
            // Any time `<Slice alias="header">` is seen on this page,
            // use the `header-${language}` id
            // 'header': `header-${language}`
        }
    })
    actions.createSlice({
        id: 'header', 
        component: require.resolve('./src/components/header.js')
    })

    SUPPORTED_LANGUAGES.forEach(language => {
        actions.createSlice({
          id: `header-${language}`,
          context: { language },
          component: require.resolve(`./src/components/header.js`),
        })
      })


    //   const pagesResult = []

    //   // Create a page for each page node + language
    //   pagesResult.data.edges.forEach(({ node }) => {
    //     SUPPORTED_LANGUAGES.forEach(language => {
    //       createPage({
    //         path: node.path,
    //         // a page component that utilizes DefaultLayout
    //         component: require.resolve(`./src/templates/page.js`),
    //         context: {
    //           pagePath: node.path,
    //           language,
    //         },
    //         slices: {
    //           // Any time `<Slice alias="header">` is seen on this page,
    //           // use the `header-${language}` id
    //           'header': `header-${language}`
    //         }
    //       })
    //     })
    //   })
}
