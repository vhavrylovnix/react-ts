module.exports = {
    presets: [
        [
            '@babel/preset-react',
            {
                runtime: 'automatic'
            }
        ],
        '@babel/preset-typescript',
        [
            '@babel/preset-env',
            {
                corejs: 3,
                targets: {
                    chrome: '78',
                    firefox: '72',
                    edge: '17',
                    safari: '12'
                },
                useBuiltIns: 'entry',
                modules: false
            }
        ]
    ],
    plugins: [
        '@babel/plugin-transform-class-properties',
        '@babel/plugin-transform-object-rest-spread',
        '@babel/plugin-syntax-dynamic-import'
    ],
    env: {
        test: {
            plugins: ['dynamic-import-node', '@babel/plugin-transform-modules-commonjs'],
            presets: [
                [
                    '@babel/preset-env',
                    {
                        targets: {
                            node: 'current'
                        }
                    },
                    '@babel/preset-typescript'
                ]
            ]
        }
    }
};
