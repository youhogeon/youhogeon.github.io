<template>
    <Section title="소개">
        <Cards class="flex-col lg:flex-row">
            <Card class="flex flex-col basis-1/4" aria-label="명함 형식의 프로필">
                <div class="flex md:flex-col md:items-center justify-around">
                    <img class="w-20 md:w-28" src="@/assets/profile.png" alt="프로필 이미지">

                    <div class="flex flex-col md:items-center">
                        <div class="md:mt-8 text-4xl font-bold">{{ profileData.profile.name }}</div>
                        <div class="mt-4 text-2xl">{{ profileData.profile.company }}</div>
                    </div>
                </div>

                <div class="text-center mt-8 md:mt-16 text-xl">
                    <div>{{ profileData.profile.email }}</div>
                    <div class="mt-2">{{ profileData.profile.phone }}</div>
                </div>
            </Card>

            <Card class="basis-3/4 flex flex-col md:flex-row">
                <div class="mt-0 md:mt-0 basis-1/3" v-for="(column, i) in profileData.information" :key="i">
                    <QnA :icon="column.icon" :question="column.question" v-if="column.question">
                        <div v-for="(field, j) in column.data" :key="j">
                            <hr class="my-2" v-if="j > 0">
                            <div v-for="(stack, k) in field" :key="k">{{ stack }}</div>
                        </div>
                    </QnA>
                    <QnA v-for="info in column.data" :key="info.question" :icon="info.icon" :question="info.question" v-else>
                        {{ info.answer }}
                    </Qna>
                </div>
            </Card>
        </Cards>
    </Section>
</template>

<script lang="ts">
    import Section from '../Section.vue'
    import Card from '../Card.vue'
    import Cards from '../Cards.vue'
    import QnA from './QnA.vue'

    export default {
        inject: ['profileData'],
        components: {
            Section,
            Card,
            Cards,
            QnA
        }
    }
</script>