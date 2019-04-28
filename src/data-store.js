/**
 * Contains information of items added to the shopping cart.
 * Each product object is added only once.
 * If multiple items of the same product are added, product count is incremented.
 */
export const shoppingCart = {

    products: [],

    itemCount: 0,

    addItem(product) {
        let found = false;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === product.id) {
                this.products[i].count++;
                found = true;
                break;
            }
        }
        if (!found) {
            this.products.push({
                id: product.id,
                name: product.name,
                price: product.price,
                count: 1
            });
        }
        this.itemCount++;
    },

    removeItem(id) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                this.products[i].count--;
                this.itemCount--;
                if (this.products[i].count === 0) {
                    this.products.splice(i, 1);
                }
                break;
            }
        }
    },

    removeProduct(id) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                this.itemCount = this.itemCount - this.products[i].count;
                this.products.splice(i, 1);
                break;
            }
        }
    },

    imagePath(id) {
        try {
            return require('./assets/product-images/' + id + '.png');
        } catch (ex) {
            return require('./assets/product-images/no_image.png');
        }
    },

    clear() {
        this.products = [];
        this.itemCount = 0;
    }
};