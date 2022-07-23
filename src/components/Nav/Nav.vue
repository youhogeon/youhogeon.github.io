<template>
    <nav>
        <NavItem url="#home" name="배너 바로가기" />
        <NavItem url="#profile" name="소개글 바로가기" />
        <NavItem url="#projects" name="프로젝트 바로가기" />
        <NavItem url="#links" name="연락처 및 링크 바로가기" />
    </nav>
</template>

<script lang="ts">
    import NavItem from './NavItem.vue'

    export default {
        components: {
            NavItem
        }
    }
</script>