import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

const googleAnalyticsId = 'G-05E3ZF9Y94'

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            head: [
              // Adding google analytics
              {
                tag: 'script',
                attrs: {
                  src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`,
                },
              },
              {
                tag: 'script',
                content: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${googleAnalyticsId}');
                `,
              },
            ],
            title: 'Cryptik',
            logo: {
                dark: './public/cryptik-dark.png',
                light: './public/cryptik-light.png',
                replacesTitle: true,
            },
            editLink: {
                baseUrl: 'https://github.com/fotscode/cryptik/edit/main/',
            },
            social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/fotscode/cryptik'},
            ],
            defaultLocale: 'root',
            locales: {
                root: {
                    label: 'Español',
                    lang: 'es',
                },
            },
            sidebar: [
                {
                    label:'Introducción',
                    translations: {
                        en: 'Introduction',
                    },
                    items: [
                        {
                            label: 'Primeros pasos',
                            slug: 'introduction/first-steps',
                        },
                    ]
                },
            ],
            customCss: [ './src/styles/global.css' ]
        }),
    ],
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [
            [
                rehypeKatex,
                {
                    // Katex plugin options
                },
            ],
        ],
    },
    site: 'https://fotscode.github.io',
    base: '/cryptik',
})


