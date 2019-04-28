<template>
    <div class="product">
        <div>
            <img 
                class="product-image"
                :src="cart.imagePath(product.id)"
                :alt="product.name"
                :title="product.name">
        </div>
        <div class="product-name-container">
            <div class="product-name">{{ product.name }}</div>
            <div>{{ product.price }} €</div>
        </div>
        <div>
            <div class="product-actions">
                <div class="button small" @click="cart.removeItem(product.id)">
                    -
                </div>
                <div class="product-count">
                    {{ product.count }}
                </div>
                <div class="button small" @click="cart.addItem(product)">
                    +
                </div>
                <div class="button small remove-product-button">
                    <img
                        svg-inline 
                        class="remove-product-icon"
                        src="../assets/trash.svg" 
                        alt="Remove this product"
                        title="Remove this product"
                        @click="cart.removeProduct(product.id)">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { shoppingCart } from '../data-store.js';

    export default {
        name: 'ShoppingCartProduct',
        props: {
            product: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                cart: shoppingCart
            }
        }
    }
</script>

<style lang="scss" scoped>
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
</style>