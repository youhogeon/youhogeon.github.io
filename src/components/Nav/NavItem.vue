<template>
    <a class="block sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-30 focus:py-5 focus:w-full bg-white bg-opacity-50 text-center text-2xl font-bold" :href="url">{{ name }}</a>
</template>

<script lang="ts">
    export default {
        props: {
            url: String,
            name: String
        }
    }
</script>