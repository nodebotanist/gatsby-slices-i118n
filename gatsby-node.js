const SUPPORTED_LANGUAGES = ['en', 'jp', 'de']

const { graphql } = require('gatsby')
const { languageDetector } = require('i18next-browser-languagedetector')

exports.createPages = async ({ actions }) => {

    actions.createSlice({
        id: `header`,
        component: require.resolve(`./src/components/header.js`),
    })

    SUPPORTED_LANGUAGES.forEach((language) => {
        actions.createPage({
            path: `/${language}`,
            component: require.resolve(`./src/templates/home.js`),
            context: {
                language,
            },
            slices: {
                // Any time `<Slice alias="header">` is seen on this page,
                // use the `header-${language}` id
                'header': `header`
            }
        })
        actions.createPage({
            path: `${language}/bio`,
            component: require.resolve(`./src/templates/bio.js`),
            context: {
                language,
            },
            slices: {
                // Any time `<Slice alias="header">` is seen on this page,
                // use the `header-${language}` id
                'header': `header`
            }
        })
    })

    actions.createSlice({
        id: 'header', 
        component: require.resolve('./src/components/header.js')
    })

}
