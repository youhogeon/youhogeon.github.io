<template>
    <Section class="pt-32" title="유호건 소개글" init>
        <Cards class="flex-col lg:flex-row">
            <Card class="flex flex-col basis-1/4" aria-label="명함 형식의 프로필">
                <div class="flex md:flex-col md:items-center justify-around">
                    <img class="w-20 md:w-28" src="@/assets/profile.png" alt="프로필 이미지">

                    <div class="flex flex-col md:items-center">
                        <div class="md:mt-8 text-4xl font-bold">유호건</div>
                        <div class="mt-4 text-2xl">자유로운 개발자</div>
                    </div>
                </div>

                <div class="text-center mt-8 md:mt-16 text-xl">
                    <div>me@youhogeon.com</div>
                    <div class="mt-2">010-2131-1470</div>
                </div>
            </Card>
            <Card class="basis-3/4 grid grid-rows-3 md:grid-cols-3 md:grid-rows-1">
                <div class="mt-5 md:mt-0 first:mt-0">
                    <QnA icon="👦🏻" q="이름">유호건 (YouHoGeon)</QnA>
                    <QnA icon="♂️" q="성별">남성</QnA>
                    <QnA icon="🎂" q="생년월일">1997년 10월 2일</QnA>
                    <QnA icon="🏠" q="거주지">서울특별시 성북구</QnA>
                    <QnA icon="💙" q="관심분야">웹, IT, 공학, 수학, 경제(금융)</QnA>
                </div>
                <div class="mt-5 md:mt-0 first:mt-0">
                    <QnA icon="🖥️" q="기술 스텍">
                        HTML5, CSS3<br>
                        Javascript (ES6), jQuery<br>
                        Vue.js
                        <hr class="my-2">
                        PHP, Laravel<br>
                        Node.js<br>
                        JAVA, Spring
                        <hr class="my-2">
                        SQL (MySQL, MariaDB)<br>
                        No-SQL (MongoDB, Redis)
                        <hr class="my-2">
                        Windows Server, Linux Server<br>
                        AWS architecture<br>
                        Docker
                    </QnA>
                </div>
                <div class="mt-5 md:mt-0 first:mt-0">
                    <QnA icon="⭐" q="자격증">
                        AWS Certified Solutions Architect Associate (2022.07)<br>
                        정보기기운용기능사 (2019.05)<br>
                        정보처리기능사 (2017. 12)<br>
                        워드프로세서 (2019.03)<br>
                        컴퓨터활용능력 1급 (2017.02)<br>

                        <hr class="my-2">
                        자동차운전면허증 (1종대형, 특수 소형견인, 2종보통)<br>
                        한국사능력검정시험 1급
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
        components: {
            Section,
            Card,
            Cards,
            QnA
        }
    }
</script>