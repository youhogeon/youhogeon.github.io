<template>
    <Header />

    <Profile />

    <Section title="프로젝트" black>
        <Cards>
            <Card class="basis-full">sdf</Card>
        </Cards>
    </Section>

    <Section title="유호건" class="h-[5000px]">
        <Cards>
            <Card class="basis-full">sdf</Card>
        </Cards>
    </Section>
</template>

<script lang="ts">
    import Header from './components/Header/Header.vue'
    import Section from './components/Section.vue'
    import Card from './components/Card.vue'
    import Cards from './components/Cards.vue'
    import Profile from './components/Profile/Profile.vue'

    export default {
        components: {
            Header,
            Section,
            Card,
            Cards,
            Profile
        }
    }
</script>