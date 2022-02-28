module.exports = {
    env: {
        node: true
    },
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
        'prettier'
    ],
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        semi: ['error', 'never'],
        '@typescript-eslint/no-explicit-any': ['off']
    },
    parserOptions: {
        parser: '@typescript-eslint/parser'
    }
}
