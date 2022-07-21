<template>
    <div class="flex -ml-2 items-top lg:items-center first:mt-0" :class="{ 'mt-24': longterm, 'mt-5': shortterm, 'mt-12': !(longterm | shortterm) }" >
        <div class="w-6 h-6 mt-1 lg:mt-0 bg-slate-800 rounded-2xl shrink-0"></div>
        
        <div class="flex items-left lg:items-center basis-full flex-col lg:flex-row">
            <div class="text-xl lg:text-2xl ml-5 text-slate-400 font-bold tracking-widest lg:basis-32 shrink-0">{{ date }}</div>
            <div class="text-lg lg:text-xl ml-5 tracking-wider mt-2 lg:mt-0">
                <slot />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            date: String,
            longterm: Boolean,
            shortterm: Boolean
        }
    }
</script>