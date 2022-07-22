<template>
    <Section title="Projects" black>
        <Cards class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectItem v-for="(obj, idx) in projectData.projects.slice().reverse()" :key="idx" :data="obj" />
        </Cards>
    </Section>
</template>

<script lang="ts">
    import Section from '../Section.vue'
    import Cards from '../Cards.vue'
    import ProjectItem from './ProjectItem.vue'

    export default {
        inject: ['projectData'],
        components: {
            Section,
            Cards,
            ProjectItem
        }
    }
</script>