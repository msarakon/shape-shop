<template>
    <div class="header" :class="{ 'fixed': fixedHeader }">
        <div class="header-container">
            <div class="header-left">
                <span class="title">whee</span>
                <span class="subtitle">
                    <span>The most definitive shape store in the world</span>
                </span>
            </div>
            <div class="header-right">
                <div class="shopping-cart">
                    <div class="shopping-cart-text">
                        <span>{{ shoppingCart.itemCount || 'No' }} items in cart</span>
                    </div>
                    <div class="shopping-cart-icon">
                        <img 
                            svg-inline 
                            src="../assets/shopping-cart.svg" 
                            alt="Shopping cart"
                            title="Shopping cart"
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { shoppingCart } from '../data-store.js';

    export default {
        name: 'AppHeader',
        data() {
            return {
                shoppingCart: shoppingCart,
                fixedHeader: false
            }
        },
        mounted() {
            window.onscroll = () => {
                this.fixedHeader = window.scrollY > 10;
            };
        }
    }
</script>

<style lang="scss">
    @import '../styles/_colors.scss';

    .header {
        background-color: $gray;
        width: 100%;
        height: 130px;
        background-image: url('../assets/header-bg.png');
        background-position: bottom;
        background-repeat: repeat-x;
        transition: all .2s ease-in;
    }

    .header.fixed {
        position: fixed;
        top: 0;
        left: 0;
        height: 70px;
        background-image: none;
        font-size: .9em;
    }

    .header.fixed + .content {
        padding-top: 10em;
    }

    .header-container {
        display: flex;
        flex-direction: row;
        padding: .5em 2em 0 2em;
    }

    .header.fixed .header-container {
        padding: .5em 1em 0 1em;
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

    .title {
        font-family: 'Pacifico', cursive;
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
    .shopping-cart {
        font-style: italic;
        font-size: 1.1em;
    }

    .header-right {
        width: 40%;
    }

    .shopping-cart {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
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
        transition: all .2s ease-in;
    }

    .shopping-cart-icon:hover {
        background-color: $hilight;
        cursor: pointer;
    }

    @media only screen and (max-width: 650px) {
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
    }
</style>
