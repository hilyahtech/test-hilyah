<template>
    <div>
        <h1 class="title">{{ page.title }}</h1>
        <hr>
        <article class="content">
            <nuxt-content :document="page" />
        </article>
        <div class="level">
            <div class="level-left">
                <a :href="doLink" target="_blank" rel="noopener noreferrer">Edit halaman ini di Github</a>
            </div>
            <div class="level-rigth">
                Perbarui {{ new Date(page.updatedAt).toLocaleDateString() }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'blog',

    head() {
        return {
            title: this.page.title,
            titleTemplate: `%s - Hilyahtech`,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.page.description
                },
                // Open Graph
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.page.title
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.page.description
                },
                {
                    hid: 'og:type',
                    property: 'og:type',
                    content: 'article'
                },
                // Twitter Card
                {
                    hid: 'twitter:title',
                    name: 'twitter:title',
                    content: this.page.title
                },
                {
                    hid: 'twitter:description',
                    name: 'twitter:description',
                    content: this.page.description
                }
            ]
        }
    },

    async asyncData({ $content, params, error }) {
        try {
            const data = await $content(`/page/${params.slug}`).fetch()

            return {
                page: data
            }
        } catch (e) {
            error({ statusCode: 404 })
        }
    },

    computed: {
        doLink() {
            return `https://github.com/hilyahtech/hilyahtech.com/tree/main/content/karya/${this.page.slug}.md`
        }
    }
}
</script>