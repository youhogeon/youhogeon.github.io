<template>
    <Card class="flex flex-col basis-1/4" aria-label="명함 형식의 프로필">
        <div class="flex md:flex-col md:items-center justify-around">
            <img class="w-20 h-20 md:h-28 md:w-28 shrink-0" src="@/assets/profile.png" alt="프로필 이미지">

            <div class="flex flex-col md:items-center">
                <div class="md:mt-8 text-4xl font-bold">{{ profileData.profile.name }}</div>
                <div class="mt-2 md:mt-4 text-2xl">{{ profileData.profile.company }}</div>
            </div>
        </div>

        <div class="text-center mt-8 md:mt-16 text-xl">
            <div>{{ profileData.profile.email }}</div>
            <div class="mt-2">{{ profileData.profile.phone }}</div>
        </div>
    </Card>
</template>

<script lang="ts">
    import Card from '../Card.vue'

    export default {
        inject: ['profileData'],
        components: {
            Card,
        }
    }
</script>