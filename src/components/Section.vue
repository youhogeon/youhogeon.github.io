<template>
    <section class="py-6 shadow-[0_-10px_10px_rgba(0,0,0,0.2)] bg-slate-50 bg-bg bg-contain lg:bg-auto" :class="{ 'bg-slate-700': black, 'shadow-[0_-10px_10px_rgba(0,0,0,0.5)]': !title }" :aria-labelledby="idTitle">
        <div class="sticky top-0 p-0 bg-slate-50" :class="{ 'bg-slate-700': black }" v-if="title">
            <h2 :id="idTitle" class="max-w-screen-2xl mx-auto py-6 before:content-['#'] text-4xl font-bold tracking-widest">{{ title }}</h2>
        </div>
        <div class="max-w-screen-2xl mx-auto">
            <slot />
        </div>
    </section>
</template>

<script lang="ts">
    import * as _ from "lodash";

    export default {
        props: {
            title: String,
            black: Boolean
        },
        data() {
            return {
                idTitle: _.uniqueId('id'),
            }
        },
    }
</script>