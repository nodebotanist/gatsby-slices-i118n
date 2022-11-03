const crypto = require('crypto')

const SUPPORTED_LANGUAGES = ['en', 'jp', 'de']

exports.createPages = async ({ actions, createNodeId }) => {

    const { createNode, } = actions

    SUPPORTED_LANGUAGES.forEach((node) => {
        createNode({
            // Data for the node.
            language: node,
            // Required fields.
            id: createNodeId(node),
            parent: null, // or null if it's a source node without a parent
            children: [],
            internal: {
                type: `language`,
                contentDigest: crypto
                    .createHash(`md5`)
                    .update(JSON.stringify(node))
                    .digest(`hex`)
            }
        })
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
