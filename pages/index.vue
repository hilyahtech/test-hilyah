<template>
    <div>
        <section class="hero is-dark is-bold is-fullheight">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-vcentered">
                        <div class="column">
                            <h1 class="title is-1">Berbagi Ilmu Dunia IT Dengan Sumber Terbuka</h1>
                        </div>
                        <div class="column">
                            <figure class="image">
                                <img data-src="https://hilyahtech.com/images/background.png" class="lazy entered loaded" alt="image" data-ll-status="loaded" src="https://hilyahtech.com/images/background.png">
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section mt-5">
            <div class="container">
                <h1 class="title has-text-centered">Karya <span class="has-text-danger">Pengembang</span></h1>

                <br>

                <Columns
                    :data="karya"
                >
                    <template v-slot="item">
                        <NuxtLink
                            :to="{
                                name: 'karya-slug',
                                params: {
                                    slug: item.slug
                                }
                            }"
                        >
                            <div class="card">
                                <div class="card-content">
                                    <div class="content">
                                        <h1 class="title is-5">{{ item.title }}</h1>
                                        <small>{{ item.description }}</small>
                                    </div>

                                    <div class="media">
                                        <div class="media-left">
                                            <figure class="image is-48x48">
                                                <img :src="item.author.avatar" alt="avatar" class="is-rounded">
                                            </figure>
                                        </div>
                                        <div class="media-content">
                                            <strong>{{
                                                item.author.name
                                            }}</strong>
                                            <br>
                                            <small>{{
                                                item.author.work
                                            }}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NuxtLink>
                    </template>
                </Columns>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    layout: 'full',

    head: {
        title: 'Hilyahtech - Belajar Dunia IT Sumber Terbuka'
    },

    async asyncData({ $content }) {
        const karya = await $content('karya').limit(3).fetch()

        return {
            karya
        }
    }
}
</script>