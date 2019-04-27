<template>
    <div class="product">
        <div class="product-left product-column">
            <img class="product-image"
                 :src="imagePath()"
                 :alt="product.name"
                 :title="product.name"
            >
        </div>
        <div class="product-center product-column">
            <div class="product-name">
                {{ product.name }}
            </div>
            <div class="product-description">
                {{ product.description }}
            </div>
        </div>
        <div class="product-right product-column">
            <div class="product-price">
                {{ product.price }} €
            </div>
            <div class="product-add-to-cart">
                <div class="add-to-cart-button" @click="addToCart">
                    ADD TO CART
                </div>
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
        padding: 0 1em;
    }

    .product-column {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .product-left {
        width: 20%;
    }

    .product-image {
        width: 100%;
        height: auto;
    }

    .product-center {
        width: 30%;
        padding-left: 2em;
    }

    .product-name {
        font-size: 2.4em;
        font-weight: bold;
        font-style: italic;
    }

    .product-name,
    .product-price {
        font-size: 2.4em;
        margin-bottom: .5em;
    }

    .product-description {
        letter-spacing: 1px;
    }

    .product-right {
        width: 50%;
        text-align: right;
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

    @media only screen and (max-width: 650px) {
        .product-name,
        .product-price {
            font-size: 1.8em;
        }
        .product-description {
            font-size: .9em;
        }
        .add-to-cart-button {
            font-size: 1em;
        }
    }
</style>