<template>
    <nav class="navbar has-shadow">
        <div class="container">
            <div class="navbar-brand">
                <NuxtLink to="/" class="navbar-item">Hilyahtech</NuxtLink>
            </div>
            <div class="navbar-menu">
                <div class="navbar-end">
                    <NuxtLink
                        v-for="(item, index) in navbars"
                        :key="index"
                        :to="{
                            name: item.route
                        }"
                        class="navbar-item is-tab"
                    >
                        {{ item.name }}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            navbars: [
                {
                    name: 'Blog',
                    route: 'blog'
                },
                {
                    name: 'Karya',
                    route: 'karya'
                },
                {
                    name: 'Kelas',
                    route: 'kelas'
                }
            ]
        }
    }
}
</script>