<template>
    <Section class="pb-72" title="Contact & Links">
        <Cards class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            <LinkItem v-for="(obj, idx) in linkData.links" :key="idx" :data="obj" />
        </Cards>
    </Section>
</template>

<script lang="ts">
    import Section from '../Section.vue'
    import Cards from '../Cards.vue'
    import LinkItem from './LinkItem.vue'

    export default {
        inject: ['linkData'],
        components: {
            Section,
            Cards,
            LinkItem
        }
    }
</script>