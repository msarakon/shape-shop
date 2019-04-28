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
                    <transition name="slide-fade">
                        <div v-if="itemAddedNotif" class="item-added-notif">
                            Item added!
                        </div>
                    </transition>
                    <span>ADD TO CART</span>
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
        data() {
            return {
                itemAddedNotif: false
            }
        },
        methods: {
            imagePath() {
                return shoppingCart.imagePath(this.product.id);
            },
            addToCart() {
                shoppingCart.addItem(this.product);
                this.itemAddedNotif = true;
                setTimeout(() => this.itemAddedNotif = false, 500);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../styles/_variables.scss';

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

    .item-added-notif {
        position: absolute;
        right: 100%;
        margin-right: .5em;
        white-space: nowrap;
        font-size: .9em;
        font-weight: bold;
        color: $success;
    }

    .slide-fade-enter-active {
        transition: .3s;
    }

    .slide-fade-leave-active {
        transition: opacity .5s;
    }

    .slide-fade-enter {
        transform: translate(20%, 0);
    }

    .slide-fade-leave-to, {
        opacity: 0;
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