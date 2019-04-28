<template>
    <div class="shopping-cart-container">
        <div class="shopping-cart">
            <div class="shopping-cart-title title">
                <span>Shopping cart</span>
                <img
                    class="close-button"
                    svg-inline 
                    src="../assets/cross.svg" 
                    alt="Close"
                    title="Close"
                    @click="close">
            </div>
            <div v-if="cart.itemCount < 1">No items added.</div>
            <shopping-cart-product
                v-for="product in cart.products"
                :key="product.id"
                :product="product" />
            <div class="go-to-checkout">
                <div class="button" :class="{ 'disabled': cart.itemCount < 1}">
                    GO TO CHECKOUT
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ShoppingCartProduct from './shopping-cart-product.vue';
    import { shoppingCart } from '../data-store.js';

    export default {
        name: 'ShoppingCart',
        components: {
            ShoppingCartProduct
        },
        data() {
            return {
                cart: shoppingCart
            }
        },
        methods: {
            close() {
                this.$emit('close');
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../styles/_variables.scss';

    .shopping-cart-container {
        position: absolute;
        top: 100%;
        right: 0;
        max-width: 100%;
        padding: 1em 1em 0 1em;
    }

    .shopping-cart {
        position: relative;
        width: auto;
        max-width: 100%;
        padding: .5em 1em 1em;
        background-color: #fff;
        border: 1px solid $black;
        box-shadow: 10px 10px 25px -10px rgba(0, 0, 0, .5);
    }

    .shopping-cart:after, .shopping-cart:before {
        bottom: 100%;
        left: 90%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .shopping-cart:after {
        border-color: rgba(255, 255, 255, 0);
        border-bottom-color: #ffffff;
        border-width: 10px;
        margin-left: -10px;
    }
    .shopping-cart:before {
        border-color: rgba(0, 0, 0, 0);
        border-bottom-color: $black;
        border-width: 11px;
        margin-left: -11px;
    }

    .shopping-cart-title {
        font-size: 1.5em;
        border-bottom: 1px solid $black;
        text-align: right;
        padding-bottom: .2em;
        margin-bottom: 1em;
    }

    .close-button {
        vertical-align: top;
        width: 1.5em;
        height: 1.5em;
    }

    .close-button:hover {
        cursor: pointer;
    }

    .product {
        display: flex;
        flex-direction: row;
    }

    .product > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .product > div:not(:first-child) {
        padding-left: 1em;
    }

    .product-image {
        height: 5em;
        width: auto;
    }

    .product-name-container {
        width: 10em;
        overflow: hidden;
    }

    .product-name {
        font-weight: bold;
        font-style: italic;
        font-size: 1.2em;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .product-right {
        display: flex;
        flex-direction: column;
    }

    .product-actions {
        display: flex;
        flex-direction: row;
        font-size: 1.4em;
    }

    .product-actions > div {
        padding: .2em .5em;
        box-sizing: content-box;
    }

    .product-count {
        text-align: center;
        width: 1em;
    }

    .remove-product-button {
        margin-left: 1em;
    }

    .remove-product-icon {
        height: 1em;
        width: 1em;
    }

    .go-to-checkout {
        text-align: right;
        margin-top: 2em;
    }
</style>