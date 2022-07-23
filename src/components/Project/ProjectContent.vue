<template>
    <div>
        <img class="shadow-lg hover:shadow-xl rounded transition duration-500 select-none pointer-events-none" :src="image" alt="프로젝트 이미지" style="user-drag:none;touch-callout:none">

        <div class="flex flex-wrap justify-between items-center mt-5">
            <div class="text-2xl font-bold">{{ data.name }}</div>
            <div class="text-slate-400">{{ data.date }}</div>
        </div>

        <a class="inline-block my-1 text-sm max-w-full truncate" :href="url" target="_blank" title="새 창 열림" v-for="(url, idx) in data.url" :key="idx">🔗 {{ url }}</a>

        <div class="flex flex-wrap">
            <Stack class="my-1 mr-1 last:mr-0 shrink-0"  v-for="(lang, idx) in data.stack" :key="idx" :lang="lang" />
        </div>

        <div class="whitespace-pre-line mt-4 pt-2 border-t border-dashed border-slate-300" v-if="data.description">
            {{ data.description }}
        </div>
    </div>
</template>

<script lang="ts">
    import Stack from './Stack.vue'

    export default {
        components: {
            Stack,
        },
        props: {
            data: Object
        },
        data(this: any) {
            return {
                image: new URL(`../../assets/projects/${this.data.image}`, import.meta.url).href,
            }
        },
    }
</script>