<template>
    <Section class="pt-32" :title="profileData.profile.name + ' 소개글'" init>
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

            <Card class="basis-3/4 grid grid-rows-3 md:grid-cols-3 md:grid-rows-1">
                <div class="mt-0">
                    <QnA v-for="info in profileData.information" :key="info.question" :icon="info.icon" :question="info.question">
                        {{ info.answer }}
                    </Qna>
                </div>
                <div class="mt-5 md:mt-0">
                    <QnA icon="🖥️" question="기술 스택">
                        <div v-for="(field, i) in profileData.technology" :key="i">
                            <hr class="my-2" v-if="i > 0">
                            <div v-for="(stack, j) in field" :key="j">{{ stack }}</div>
                        </div>
                    </QnA>
                </div>
                <div class="mt-5 md:mt-0">
                    <QnA icon="⭐" question="자격증">
                        <div v-for="(field, i) in profileData.certificate" :key="i">
                            <hr class="my-2" v-if="i > 0">
                            <div v-for="(stack, j) in field" :key="j">{{ stack }}</div>
                        </div>
                    </QnA>
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