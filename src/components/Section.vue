<template>
    <section class="pt-6 pb-32 shadow-[0_-10px_10px_rgba(0,0,0,0.2)] bg-[url('@/assets/bg.png')] bg-contain lg:bg-auto" :class="{ 'bg-slate-700': black, 'bg-slate-100': !black, 'shadow-[0_-10px_10px_rgba(0,0,0,0.5)]': !title }" :aria-labelledby="idTitle">
        <div class="sticky z-30 top-0 px-6" :class="{ 'bg-slate-700': black, 'bg-slate-100': !black }">
            <h2 :id="idTitle" class="max-w-screen-2xl mx-auto py-6 before:content-['#'] text-3xl md:text-4xl font-bold tracking-widest" :class="{ 'text-slate-100': black }">{{ title }}</h2>
        </div>
        <div class="max-w-screen-2xl mx-auto px-6 2xl:px-0">
            <slot />
        </div>
    </section>
</template>

<script lang="ts">
    import * as _ from "lodash"

    export default {
        props: {
            title: String,
            black: Boolean,
        },
        data() {
            return {
                idTitle: _.uniqueId('id'),
            }
        },
    }
</script>