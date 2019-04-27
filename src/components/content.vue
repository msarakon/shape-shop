<template>
    <div class="content">
        <div class="product-list">
            <product
                v-for="product in products"
                :key="product.id"
                :product="product" />
        </div>
    </div>
</template>

<script>
    import Product from './product.vue';

    export default {
        name: 'AppContent',
        components: {
            Product
        },
        data() {
            return {
                products: []
            }
        }
    }
</script>

<style lang="scss">
    @import '../styles/_colors.scss';

    .content {
        padding-top: 2em;
    }

    .product-list {
        margin: 0 auto;
        width: 100%;
        max-width: 800px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>