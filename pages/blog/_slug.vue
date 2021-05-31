<template>
    <div>
        <h1 class="title">{{ data.title }}</h1>
        
        <hr>

        <article class="content">
            <nuxt-content :document="data" />

            <p class="my-4">
                <a
                    :href="data.repository"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="button is-primary"
                >
                    Pergi Ke Repositori Saya
                </a>
            </p>

            <div class="tags mt-4">
                <span
                    v-for="tag in data.tags"
                    :key="tag"
                    class="tag"
                >{{
                    tag
                }}</span>
            </div>
        </article>

        <div class="level">
            <div class="level-left">
                <a :href="doLink" target="_blank" rel="noopener noreferrer">Edit halaman ini di Github</a>
            </div>
            <div class="level-rigth">
                Perbarui {{ new Date(data.updatedAt).toLocaleDateString() }}
            </div>
        </div>
        
        <hr>

        <div class="media">
            <div class="media-left">
                <figure class="image is-96x96">
                    <img :src="data.author.avatar" alt="avatar" class="is-rounded">
                </figure>
            </div>
            <div class="media-content">
                <p>DITULIS OLEH:</p>
                <strong>{{
                    data.author.name
                }}</strong>
                <br>
                <small>{{
                    data.author.work
                }}</small>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'blog',

    head() {
        return {
            title: this.data.title,
            titleTemplate: `%s - Hilyahtech`,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.data.description
                },
                // Open Graph
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.data.title
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.data.description
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
                    content: this.data.title
                },
                {
                    hid: 'twitter:description',
                    name: 'twitter:description',
                    content: this.data.description
                }
            ]
        }
    },

    async asyncData({ $content, params, error }) {
        try {
            const data = await $content('blog', params.slug).fetch()

            return {
                data
            }
        } catch (e) {
            error({ statusCode: 404 })
        }
    },

    computed: {
        doLink() {
            return `https://github.com/hilyahtech/hilyahtech.com/tree/main/content/blog/${this.data.slug}.md`
        }
    }
}
</script>