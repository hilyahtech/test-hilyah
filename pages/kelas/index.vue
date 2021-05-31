<template>
    <div>
        <div class="level">
            <div class="level-left">

            </div>
            <div class="level-right">
                <input
                    v-model="search"
                    type="search"
                    class="input"
                    placeholder="Cari Kelas..."
                >
            </div>
        </div>

        <Columns
            :data="data"
        >
            <template v-slot="item">
                <NuxtLink
                    :to="{
                        name: 'kelas-slug',
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
</template>

<script>
export default {
    head() {
        return {
            title: 'Kelas',
            titleTemplate: `%s - Hilyahtech`
        }
    },

    data() {
        return {
            search: '',
            data: []
        }
    },

    methods: {
        async syncData() {
            this.data = await this.$content('kelas')
                .search(this.search)
                .sortBy('createdAt').fetch()
        }
    },

    watch: {
        async search() {
            await this.syncData()
        }
    },

    mounted() {
        this.syncData()
    }
}
</script>