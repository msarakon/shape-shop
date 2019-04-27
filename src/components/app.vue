<template>
    <div class="app-container">
        <app-header />
        <app-content />
    </div>
</template>

<script>
    import AppHeader from './header.vue';
    import AppContent from './content.vue';

    export default {
        name: 'App',
        components: {
            AppHeader,
            AppContent
        }
    }
</script>

<style lang="scss">
    @import '../styles/_colors.scss';

    body {
        margin: 0;
        background-color: #fff;
        font-family: 'Playfair Display', serif;
        font-size: 14px;
        color: $black;
    }

    .app-container {
        width: 100%;
        height: 100%;
        position: relative;
    }

    @media only screen and (max-width: 650px) {
        body {
            font-size: 12px;
        }
    }
</style>