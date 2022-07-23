<template>
    <Nav />

    <Header id="home" />

    <Profile id="profile" />
    <Project id="projects" />
    <Link id="links" />

    <Footer />
</template>

<script lang="ts">
    import Section from './components/Section.vue'
    import Card from './components/Card.vue'
    import Cards from './components/Cards.vue'

    import Nav from './components/Nav/Nav.vue'
    import Header from './components/Header/Header.vue'
    import Profile from './components/Profile/Profile.vue'
    import Project from './components/Project/Project.vue'
    import Link from './components/Link/Link.vue'
    import Footer from './components/Footer/Footer.vue'

    export default {
        components: {
            Section,
            Card,
            Cards,
            Nav,
            Header,
            Profile,
            Project,
            Link,
            Footer
        }
    }
</script>