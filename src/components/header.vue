<template>
    <div class="header" :class="{ 'fixed': fixedHeader }">
        <div class="header-container">
            <div class="header-left">
                <span class="site-title">whee</span>
                <span class="subtitle">
                    <span>The most definitive shape store in the world</span>
                </span>
            </div>
            <div class="header-right">
                <div class="shopping-cart-corner">
                    <div class="shopping-cart-text">
                        <span>{{ shoppingCart.itemCount || 'No' }} item(s) in cart</span>
                    </div>
                    <div class="shopping-cart-icon" @click="toggleShoppingCart">
                        <div v-if="shoppingCart.itemCount > 0" class="shopping-cart-notif" />
                        <img 
                            svg-inline 
                            src="../assets/shopping-cart.svg" 
                            alt="Shopping cart"
                            title="Shopping cart">
                    </div>
                </div>
            </div>
            <transition name="slide">
                <shopping-cart v-if="shoppingCartOpen" @close="closeShoppingCart" />
            </transition>
        </div>
    </div>
</template>

<script>
    import { shoppingCart } from '../data-store.js';
    import ShoppingCart from './shopping-cart.vue';

    export default {
        name: 'AppHeader',
        components: {
            ShoppingCart
        },
        data() {
            return {
                shoppingCart: shoppingCart,
                shoppingCartOpen: false,
                fixedHeader: false
            }
        },
        mounted() {
            window.onscroll = () => {
                this.fixedHeader = window.scrollY > 0;
            };
        },
        methods: {
            toggleShoppingCart() {
                this.shoppingCartOpen = !this.shoppingCartOpen;
            },
            closeShoppingCart() {
                this.shoppingCartOpen = false;
            }
        }
    }
</script>

<style lang="scss">
    @import '../styles/_variables.scss';

    .header {
        background-color: $gray;
        width: 100%;
        height: 8.5em;
        background-image: url('../assets/header-bg.png');
        background-position: bottom;
        background-repeat: repeat-x;
        transition: all .2s ease-in;
        z-index: 1000;
    }

    .header.fixed {
        position: fixed;
        top: 0;
        left: 0;
        height: 5.5em;
        background-image: none;
    }

    .header.fixed + .content {
        padding-top: 10.5em;
    }

    .header-container {
        position: relative;
        display: flex;
        flex-direction: row;
        padding: .5em 2em 0 2em;
    }

    .header.fixed .header-container {
        padding: .5em 1em 0 1em;
    }

    .header.fixed .header-left,
    .header.fixed .header-right {
        font-size: .9em;
    }

    .header-left,
    .header-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .header-left {
        width: 60%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }

    .site-title {
        font-family: $site-title-font;
        font-size: 4em;
        line-height: 1.2em;
        margin-right: .7em;
    }

    .subtitle {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .subtitle,
    .shopping-cart-corner {
        font-style: italic;
        font-size: 1.1em;
    }

    .header-right {
        width: 40%;
    }

    .shopping-cart-corner {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        position: relative;
    }

    .shopping-cart-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .shopping-cart-icon {
        width: 2em;
        height: 2em;
        background-color: $black;
        border-radius: 50%;
        padding: .7em;
        margin-left: 1.5em;
        box-sizing: content-box;
        transition: all .2s ease-in;
    }

    .shopping-cart-icon:hover {
        background-color: $hilight;
        cursor: pointer;
    }

    .shopping-cart-notif {
        background-color: $hilight2;
        width: .8em;
        height: .8em;
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 50%;
    }

    .slide-enter-active {
        transition: .3s;
    }

    .slide-enter {
        transform: translate(0, -20%);
    }

    @media only screen and (max-width: 600px) {
        .subtitle {
            display: none;
        }
        .header-left,
        .header-right {
            width: 50%;
        }
        .header {
            height: 100px;
        }
        .shopping-cart-text {
            font-size: .9em;
        }
    }
</style>
