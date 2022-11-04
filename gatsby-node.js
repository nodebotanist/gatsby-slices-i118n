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

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions

    SUPPORTED_LANGUAGES.forEach((node) => {
        createNode({
            // Data for the node.
            ...node,
            // Required fields.
            id: createNodeId(node.language),
            internal: {
                type: `language`,
                contentDigest: createContentDigest(node)
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
