<template>
    <div class="shadow-xl hover:shadow-2xl ease-in-out duration-500 rounded-md bg-white px-4 md:px-6 py-6 md:py-8 m-4 transition-all bg-opacity-70 hover:bg-opacity-100" :class="{ 'shadow-slate-600': white, 'hover:mt-3 hover:ml-3 hover:mr-5 hover:mb-5': !fixed, 'bg-opacity-90': white, 'bg-slate-300': white }">
        <slot />
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            white: Boolean,
            fixed: Boolean
        }
    }
</script>