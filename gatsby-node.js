const crypto = require('crypto')

const SUPPORTED_LANGUAGES = [
    {
        language: 'en',
        title: 'My Gatsby Website',
        home: 'Home',
        bio: 'Bio'            
    }, 
    {
        language: 'jp',
        title: '私のギャツビーのウェブサイト',
        home: 'ホームページ',
        bio: '伝記'
    }, 
    {
        language: 'de',
        title: 'Meine Gatsby-Website',
        home: 'Startseite',
        bio: 'Biografie'
    }
]

exports.sourceNodes = async ({ actions, createNodeId }) => {
    const { createNode } = actions

    SUPPORTED_LANGUAGES.forEach((node) => {
        createNode({
            // Data for the node.
            ...node,
            // Required fields.
            id: createNodeId(node.language),
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
}

exports.createPages = async ({ actions }) => {
    SUPPORTED_LANGUAGES.forEach((language) => {
        actions.createSlice({
            id: `header-${language.language}`,
            alias: `header-${language.language}`, 
            component: require.resolve('./src/components/header.js'),
            context: {
                language: language.language
            }
        })

        actions.createPage({
            path: `/${language.language}`,
            component: require.resolve(`./src/templates/home.js`),
            slices: {
                // Any time `<Slice alias="header">` is seen on this page,
                // use the `header-${language}` id
                'header': `header-${language.language}`
            }
        })
        actions.createPage({
            path: `${language.language}/bio`,
            component: require.resolve(`./src/templates/bio.js`),
            slices: {
                // Any time `<Slice alias="header">` is seen on this page,
                // use the `header-${language}` id
                'header': `header-${language.language}`
            }
        })
    })

}
