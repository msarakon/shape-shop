<template>
    <div class="header">
        <div class="header-container">
            <div class="title header-col">
                whee
            </div>
            <div class="subtitle header-col">
                The most definitive shape store in the world
            </div>
            <div class="shopping-cart header-col">
                <div class="shopping-cart-container">
                    <div class="shopping-cart-text">
                        <span>No items in cart</span>
                    </div>
                    <div class="shopping-cart-icon">
                        <img svg-inline 
                             src="../assets/shopping-cart.svg" 
                             alt="Shopping cart"
                             title="Shopping cart" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AppHeader'
    }
</script>

<style lang="scss">
    @import '../styles/_colors.scss';

    .header {
        background-color: $gray;
        width: 100%;
        height: 100px;
    }

    .header-container {
        display: flex;
        flex-direction: row;
        padding: .5em 2em 0 2em;
    }

    .header-col {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .title {
        font-family: 'Pacifico', cursive;
        font-size: 4em;
        width: 20%;
        line-height: 1em;
    }

    .subtitle {
        width: 40%;
    }

    .subtitle,
    .shopping-cart {
        font-style: italic;
    }

    .shopping-cart {
        width: 40%;
    }

    .shopping-cart-container {
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
        width: 25px;
        height: 25px;
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
</style>
