<template>
    <div
        class="columns is-multiline is-centered"
    >
        <div
            class="column is-6-tablet is-4-desktop is-3-widescreen"
            v-for="(item, index) in data"
            :key="index"
        >
            <slot v-bind="item" />
        </div>
    </div>
</template>

<script>
export default {
    props: ['data']
}
</script>