<template>
    <div class="content">
        <product-list />
    </div>
</template>

<script>
    import ProductList from './product-list.vue';

    export default {
        name: 'AppContent',
        components: {
            ProductList
        }
    }
</script>

<style lang="scss" scoped>
    .content {
        padding-top: 2em;
    }
</style>