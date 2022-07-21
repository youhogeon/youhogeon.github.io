<template>
    <Section title="Introduction">
        <Cards class="flex-col lg:flex-row">
            <NameCard />
            <Information />
        </Cards>

        <Cards>
            <TimeLine class="mt-8" />
        </Cards>
    </Section>
</template>

<script lang="ts">
    import Section from '../Section.vue'
    import Cards from '../Cards.vue'
    import NameCard from './NameCard.vue'
    import Information from './Information.vue'
    import TimeLine from './TimeLine.vue'

    export default {
        inject: ['profileData'],
        components: {
            Section,
            Cards,
            NameCard,
            Information,
            TimeLine
        }
    }
</script>