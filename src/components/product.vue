<template>
    <div class="product">
        <div class="product-left product-column">
            <img class="product-image"
                 :src="imagePath()"
                 :alt="product.name"
                 :title="product.name">
        </div>
        <div class="product-center product-column">
            <div class="product-name title">
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
                <div class="button" @click="addToCart">
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
                return shoppingCart.imagePath(this.product.id);
            },
            addToCart() {
                shoppingCart.addItem(this.product);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .product {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
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

    @media only screen and (max-width: 600px) {
        .product-left {
            width: 25%;
        }
        .product-center {
            width: 75%;
        }
        .product-right {
            width: 100%;
            text-align: center;
        }
        .product-name {
            font-size: 2em;
        }
        .product-price {
            font-size: 1.5em;
        }
    }
</style>