<template>
    <Card class="basis-full flex flex-col items-start lg:items-stretch lg:flex-row" aria-label="타임라인">
        <div class="basis-1/2 relative m-4 -mt-6 first:-mt-0 lg:-mt-0" v-for="(data, colIdx) in profileData.timeline" :key="colIdx">
            <div class="w-2 h-full bg-slate-400 absolute rounded z-10"></div>

            <div class="relative z-20 py-4">
                <TimeLineItem v-for="(obj, idx) in data" :key="idx" :date="obj.date" :longterm="obj.term == 'long'" :shortterm="obj.term == 'short'">
                    {{ obj.text }}
                </TimeLineItem>
            </div>
        </div>
    </Card>
</template>

<script lang="ts">
    import Card from '../Card.vue'
    import QnA from './QnA.vue'
    import TimeLineItem from './TimeLineItem.vue'

    export default {
        inject: ['profileData'],
        components: {
            Card,
            QnA,
            TimeLineItem
        }
    }
</script>