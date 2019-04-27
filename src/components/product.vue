<template>
    <div class="product">
        <div class="product-image" />
        <div class="product-center">
            <div class="product-name">
                {{ product.name }}
            </div>
            <div class="product-description">
                {{ product.description }}
            </div>
        </div>
        <div class="product-right">
            <div class="product-price">
                {{ product.price }}
            </div>
            <div class="product-add-to-cart">
                ADD TO CART
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Product',
        props: {
            product: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss">
    @import '../styles/_colors.scss';
</style>