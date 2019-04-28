<template>
    <div class="product-list">
        <product 
            v-for="product in products"
            :key="product.id"
            :product="product" />
    </div>
</template>

<script>
    import axios from 'axios';
    import Product from './product.vue';

    export default {
        name: 'ProductList',
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

<style lang="scss" scoped>
    .product-list {
        margin: 0 auto;
        width: 100%;
        max-width: 800px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>