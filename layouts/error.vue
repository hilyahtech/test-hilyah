<template>
    <div class="has-text-centered">
        <template v-if="error.statusCode === 404">
            <h1 class="title">Halaman Tidak Ditemukan</h1>
            <p class="content is-medium">Silakan kembali ke halaman utama atau cari artikel yang menarik lainnya</p>
        </template>
        <template v-else-if="error.statusCode === 503">
            <h1 class="title">Layanan Tidak Tersedia</h1>
            <p class="content is-medium">Kami sedang melakukan pemeliharaan, harap tunggu beberapa menit kedepan.</p>
        </template>
        <template v-else>
            <h1 class="title">Opps!, Terjadi Kesalahan</h1>
            <p class="content is-medium">Ada yang salah! Silakan coba lagi, atau kembali ke halaman utama.</p>
        </template>
        <NuxtLink to="/" class="button is-light">Pergi Ke Beranda</NuxtLink>
    </div>
</template>

<script>
export default {
    props: ['error'],

    head() {
        return {
            title: this.title,
            titleTemplate: `%s - Hilyahtech`
        }
    },

    computed: {
        title() {
            if (this.error.statusCode == 404) {
                return 'Halaman Tidak Ditemukan'
            }
            else if (this.error.statusCode == 503) {
                return 'Layanan Tidak Tersedia'
            }
            else {
                return 'Opps!, Terjadi Kesalahan'
            }
        }
    }
}
</script>