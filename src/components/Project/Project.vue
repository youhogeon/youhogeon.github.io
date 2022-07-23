<template>
    <Section title="Projects" black>
        <Cards class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectItem v-for="(obj, idx) in projectData.projects.slice().reverse()" :key="idx" :data="obj" @click="openLayer($event, obj)" @keypress.enter="openLayer($event, obj)" role="button" tabindex="0" aria-haspopup="dialog" aria-expanded="false" aria-controls="id-layer-project" />
        </Cards>
        
        <Transition>
            <div id="id-layer-project" class="fixed z-40 bg-slate-900 bg-opacity-80 top-0 left-0 w-full h-full" v-if="layerOpened" role="dialog" aria-modal="true" ref="layer">
                <div class="fixed -top-10 left-0 w-full h-full z-50 p-4 md:p-10 flex items-center justify-center" @click.self="closeLayer">
                    <div class="w-full max-w-3xl p-6 md:px-10 rounded-lg bg-slate-50 outline-none" tabindex="0" @keydown.esc.prevent="closeLayer" ref="layerContent">
                        <ProjectContent :data="layerData" />
                    </div>
                </div>
            </div>
        </Transition>
    </Section>
</template>

<script lang="ts">
    import Section from '../Section.vue'
    import Cards from '../Cards.vue'
    import ProjectItem from './ProjectItem.vue'
    import ProjectContent from './ProjectContent.vue'

    export default {
        inject: ['projectData'],
        components: {
            Section,
            Cards,
            ProjectItem,
            ProjectContent
        },
        data () {
            return {
                layerOpened: false,
                layerData: null,
            }
        },
        methods: {
            openLayer(this: any, e: any, obj: Object): void {
                let dom = e.currentTarget;

                this.layerOpened = true
                dom.setAttribute('aria-expanded', 'true')
                document.body.style.overflow = 'hidden'

                let focusable = document.querySelectorAll('*');
                focusable.forEach(v => {
                    if (v.tagName == 'SCRIPT' || v.tagName == 'STYLE' || v.id == 'id-layer-project') return

                    let ariaHidden = v.getAttribute('aria-hidden')
                    let tabIndex = v.getAttribute('tabindex')

                    if (ariaHidden) v.setAttribute('data-aria-hidden', ariaHidden)
                    if (tabIndex) v.setAttribute('data-tabindex', tabIndex)

                    v.setAttribute('aria-hidden', 'true')
                    v.setAttribute('tabindex', '-1')
                    v.setAttribute('data-autohidden', 'true')
                })

                setTimeout(function (this: any) {
                    this.$refs.layerContent.focus()
                }.bind(this));

                this.layerData = obj;
            },
            closeLayer(this: any): void {
                this.layerOpened = false

                let dom = document.querySelector('[aria-expanded=true]')
                if (dom) {
                    (dom as HTMLElement).focus()
                    dom.setAttribute('aria-expanded', 'false')
                }
                document.body.style.overflow = 'auto'

                let focusable = document.querySelectorAll('[data-autohidden]')
                focusable.forEach(v => {
                    let ariaHidden = v.getAttribute('data-aria-hidden')
                    let tabIndex = v.getAttribute('data-tabindex')

                    if (ariaHidden !== null) v.setAttribute('aria-hidden', ariaHidden)
                    else v.removeAttribute('aria-hidden')
                    if (tabIndex !== null) v.setAttribute('tabindex', tabIndex)
                    else v.removeAttribute('tabindex')

                    v.removeAttribute('data-aria-hidden')
                    v.removeAttribute('data-tabindex')
                    v.removeAttribute('data-autohidden')
                })
            },
        },
    }
</script>

<style scoped>
    .v-enter-active, .v-leave-active {
        transition: opacity 0.5s ease;
    }

    .v-enter-from, .v-leave-to {
        opacity: 0.01;
    }
</style>