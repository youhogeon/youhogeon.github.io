<template>
    <Card class="cursor-pointer flex flex-col items-center group" :aria-labelledby="id" @click.prevent="openURL" role="button" fixed>
        <div class="p-8 shrink-0 rounded w-28 h-28 m-2 group-hover:w-32 group-hover:h-32 group-hover:m-0 group-hover:p-7 group-hover:rounded-lg ease-in transition-size duration-200" :style="{ 'background-color': data.color }">
            <img class="w-full" :src="data.icon" alt="">
        </div>

        <h3 :id="id" class="text-lg mt-3">
            <a :href="data.url" target="_blank" rel="noreferrer noopener" title="새 창 열림">{{ data.name }}</a>
        </h3>
    </Card>
</template>

<script lang="ts">
    import Card from '../Card.vue'
    import * as _ from "lodash"

    export default {
        components: {
            Card,
        },
        props: {
            data: Object
        },
        methods: {
            openURL () {
                setTimeout(function (this: any) {
                    window.open(this.data.url, '_blank');
                }.bind(this))
            }
        },
        data() {
            return {
                id: _.uniqueId('id'),
            }
        },
    }
</script>