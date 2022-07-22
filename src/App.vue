<template>
    <Header />

    <Profile />
    <Project />
    <Link />
</template>

<script lang="ts">
    import Section from './components/Section.vue'
    import Card from './components/Card.vue'
    import Cards from './components/Cards.vue'

    import Header from './components/Header/Header.vue'
    import Profile from './components/Profile/Profile.vue'
    import Project from './components/Project/Project.vue'
    import Link from './components/Link/Link.vue'

    export default {
        components: {
            Section,
            Card,
            Cards,
            Header,
            Profile,
            Project,
            Link
        }
    }
</script>