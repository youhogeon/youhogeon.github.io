<template>
    <div class="text-xs py-1 px-2 rounded text-white cursor-default" :class="color">
        {{ lang }}
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            lang: String
        },
        computed: {
            color: function (this: any) {
                switch (this.lang) {
                    case 'HTML5':
                        return 'bg-orange-600'
                    case 'jQuery':
                        return 'bg-blue-600'
                    case 'Vue.js':
                        return 'bg-emerald-600'
                    case 'PHP':
                        return 'bg-indigo-400'
                    case 'Java':
                        return 'bg-orange-400'
                    case 'Spring':
                        return 'bg-lime-600'
                    case 'Python':
                        return 'bg-sky-600'
                    case 'Android':
                        return 'bg-green-400'
                    case 'SQL':
                        return 'bg-orange-400'
                    case 'Docker':
                        return 'bg-sky-400'
                    case 'Laravel':
                        return 'bg-red-500'
                    case 'Node.js':
                        return 'bg-lime-500'
                    case 'React Native':
                        return 'bg-sky-300 text-black'
                    case 'React':
                        return 'bg-sky-300 text-black'
                    case 'AWS':
                        return 'bg-amber-500'
                }

                return 'bg-slate-400'
            },
        }
    }
</script>