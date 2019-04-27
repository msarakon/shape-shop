/**
 * Contains information of items added to the shopping cart.
 * Each product object is added only once.
 * If multiple items of the same product are added, product count is incremented.
 */
export const shoppingCart = {

    products: [],

    itemCount: 0,

    addItem(item) {
        let found = false;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === item.id) {
                this.products[i].count++;
                found = true;
                break;
            }
        }
        if (!found) {
            this.products.push({
                id: item.id,
                name: item.name,
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

    clear() {
        this.products = [];
        this.itemCount = 0;
    }
};