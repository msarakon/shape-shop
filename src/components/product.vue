<template>
    <div class="product">
        <div class="product-left">
            <img class="product-image"
                 :src="imagePath()"
                 :alt="product.name"
                 :title="product.name" />
        </div>
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
                {{ product.price }} €
            </div>
            <div class="product-add-to-cart">
                <div @click="addToCart()" class="add-to-cart-button">ADD TO CART</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { shoppingCart } from '../data-store.js';

    export default {
        name: 'Product',
        props: {
            product: {
                type: Object,
                required: true
            }
        },
        methods: {
            imagePath() {
                try {
                    return require('../assets/product-images/' + this.product.id + '.png');
                } catch (ex) {
                    return require('../assets/product-images/no_image.png');
                }
            },
            addToCart() {
                shoppingCart.addItem(this.product);
            }
        }
    }
</script>

<style lang="scss">
    @import '../styles/_colors.scss';

    .product {
        display: flex;
        flex-direction: row;
        margin-bottom: 3em;
    }

    .product-left {
        width: 20%;
    }

    .product-image {
        width: 100%;
        height: 100%;
    }

    .product-center {
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 2em;
    }

    .product-name {
        font-size: 2.4em;
        font-weight: bold;
        font-style: italic;
        margin-bottom: .5em;
    }

    .product-description {
        letter-spacing: 1px;
    }

    .product-right {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: right;
    }

    .product-price {
        font-size: 2.4em;
        margin-bottom: .5em;
    }

    .add-to-cart-button {
        display: inline-block;
        font-size: 1.2em;
        font-weight: bold;
        border: 1px solid $black;
        padding: .5em 1.5em;
        letter-spacing: 1px;
        transition: all .2s ease-in;
    }

    .add-to-cart-button:hover {
        cursor: pointer;
        background-color: $hilight;
        border-color: transparent;
        color: #fff;
    }

</style>