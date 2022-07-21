<template>
    <header class="bg-cover bg-center bg-header">
        <div class="backdrop-blur-[6px] flex justify-center w-full h-screen opacity-95 cursor-default drag select-none">
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