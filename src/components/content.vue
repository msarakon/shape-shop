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
    import axios from 'axios';
    import Product from './product.vue';

    export default {
        name: 'AppContent',
        components: {
            Product
        },
        data() {
            return {
                products: [],
                productsLoading: true,
                productsError: false
            }
        },
        created() {
            axios.get('api/products').then(response => {
                this.products = response.data;
                this.productsLoading = false;
            }).catch(error => {
                this.productsError = true;
                this.productsLoading = false;
            });
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