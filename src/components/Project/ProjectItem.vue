<template>
    <Card class="group cursor-pointer flex flex-col items-center px-0 py-0 md:px-0 md:py-0" :aria-labelledby="id" white>
        <img class="w-full rounded-t-md" src="https://place-hold.it/500x300" alt="">

        <div class="p-6 md:p-8 text-center">
            <h3 :id="id" class="text-2xl font-bold tracking-wider">{{ data.name }}</h3>
            <div class="text-lg mt-1 text-slate-500">{{ data.date }}</div>
        </div>
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
        data() {
            return {
                id: _.uniqueId('id'),
            }
        },
    }
</script>