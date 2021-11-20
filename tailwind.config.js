module.exports = {
    mode: 'jit',
    purge: {
        content: [
            './resources/**/*.vue'
        ],
        options: {
            safelist: [
                'text-sm',
                'text-base',
                'text-lg',
                'text-xl',
                'text-2xl',
                'text-3xl',
                'text-4xl',
                'text-5xl',
                'text-6xl',
                'text-7xl',
                'text-8xl',
                'text-9xl',
            ],
        },
    },
    important: true,
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
}