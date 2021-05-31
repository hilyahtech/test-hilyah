import getRoutes from "./utils/getRoutes";

export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'og:site_name', property: 'og:site_name', content: 'Hilyahtech' },
            { hid: 'og:type', property: 'og:type', content: 'website' },
        ],
        link: [
            {
                rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'
            }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/css/app.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [
        '~/components/global',
        '~/components/templates'
    ],

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // https://go.nuxtjs.dev/content
        '@nuxt/content',
        // https://go.nuxtjs.dev/sitemap
        '@nuxtjs/sitemap'
    ],

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            name: "Hilyahtech",
            description: "Situs belajar dunia IT berbasis sumber terbuka.",
            theme_color: '#34495e',
            lang: 'id'
        }
    },

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},
    
    // Sitemap module configuration: https://sitemap.nuxtjs.org/usage/sitemap
    sitemap: {
        hostname: 'https://hilyahtech.com',
        gzip: true,
        defaults: {
            changefreq: 'daily',
            priority: 1,
            lastmod: new Date()
        },
        // routes() {
        //     return getRoutes()
        // }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}