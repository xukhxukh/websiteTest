module.exports = {
    title: '标题信息',
    description: '描述信息.',
    themeConfig: {
        repo: '/websiteTest/',
        lastUpdated: 'Last Updated',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        docsDir: 'docs',
        nav: [
            { text: '指南', link: '/guide/' },
            { text: '发布日志', link: 'https://github.com/dvajs/dva/releases' },
        ],
        sidebar: {
            '/guide/': [
                {
                    title: '指南',
                    collapsable: false,
                    children: [
                        '',
                        'getting-started',
                        'examples-and-boilerplates',
                        'concepts',
                        'introduce-class',
                    ],
                },
                {
                    title: '社区',
                    collapsable: false,
                    children: ['fig-show', 'develop-complex-spa', 'source-code-explore'],
                },
            ]
        },
    },
};
