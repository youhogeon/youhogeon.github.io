<template>
    <div class="mb-5 last:mb-0" :aria-labelledby="id">
        <h3 :id="id" class="text-xl font-bold flex">
            <span class="block w-8 text-center">{{ icon }}</span>
            {{ question }}
        </h3>
        <div class="mt-1 ml-8 leading-relaxed">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
    import * as _ from "lodash"

    export default {
        props: {
            question: String,
            icon: String
        },
        data() {
            return {
                id: _.uniqueId('id'),
            }
        },
    }
</script>