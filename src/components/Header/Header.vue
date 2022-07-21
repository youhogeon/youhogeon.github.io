<template>
    <header class="bg-cover bg-center bg-header relative">
        <div class="pattern absolute top-0 left-0 z-10 w-full h-full bg-[length:10px_10px]"></div>
        <div class="flex justify-center w-full h-60 lg:h-80 2xl:h-[32rem] opacity-95 cursor-default drag select-none relative z-20">
            <Logo />
        </div>
        <h1 class="sr-only">유호건 닷컴</h1>
    </header>
</template>

<script lang="ts">
    import Logo from './Logo.vue'

    export default {
        components: {
            Logo
        }
    }
</script>

<style scoped>
    @layer header {
        .pattern {
            background: linear-gradient(135deg,	rgba(255, 255, 255, 0.15) 25%, rgba(255, 255, 255, 0.25) 0, rgba(255, 255, 255, 0.25) 50%,	rgba(255, 255, 255, 0.15) 0, rgba(255, 255, 255, 0.15) 75%, rgba(255, 255, 255, 0.25) 0);
        }
    }
</style>