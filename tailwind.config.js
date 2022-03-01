module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {}
    },
    safelist: [
        {
            pattern: /text-[gray|red|green|blue]/,
            variants: ['hover']
        },
        {
            pattern: /bg|border-[blue|red|green]/
        },
        {
            pattern: /w-|h-/
        }
    ]
}
