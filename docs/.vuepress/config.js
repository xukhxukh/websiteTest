module.exports = {
    base: '/websiteTest/',
    title: 'SEF框架',
    description: 'SEF1/SEF2框架使用说明.',
    themeConfig: {
        repo: 'xukhxukh/websiteTest/',
        lastUpdated: '上次更新',
        editLinks: true,
        editLinkText: '帮助我们改善此页面',
        docsDir: 'docs',
        nav: [
            { text: '测试Demo', link: '/demo/' },
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
            ],
            '/demo/':[
                {
                    title:"测试",
                    collapsable: false,
                    children: [
                        '',
                        'code-demo'
                    ],
                }
            ],
        },
    },
};
