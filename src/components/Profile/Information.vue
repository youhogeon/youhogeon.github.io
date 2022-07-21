<template>
    <Card class="basis-3/4 flex flex-col md:flex-row" aria-label="상세한 소개">
        <div class="mt-5 md:mt-0 basis-1/3" v-for="(column, i) in profileData.information" :key="i">
            <QnA :icon="column.icon" :question="column.question" v-if="column.question">
                <div v-for="(field, j) in column.data" :key="j">
                    <hr class="my-2" v-if="j > 0">
                    <div v-for="(stack, k) in field" :key="k">{{ stack }}</div>
                </div>
            </QnA>
            <QnA class="mb-5 last:mb-0" v-for="info in column.data" :key="info.question" :icon="info.icon" :question="info.question" v-else>
                {{ info.answer }}
            </Qna>
        </div>
    </Card>
</template>

<script lang="ts">
    import Card from '../Card.vue'
    import QnA from './QnA.vue'

    export default {
        inject: ['profileData'],
        components: {
            Card,
            QnA
        }
    }
</script>