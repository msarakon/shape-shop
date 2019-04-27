import { shoppingCart } from '../src/data-store.js';

describe('shoppingCart', () => {

    const item1 = { id: 1, name: 'Lorem ipsum' };
    const item2 = { id: 2, name: 'Dolor sit amet' };

    it('should add a new item', () => {
        shoppingCart.clear();
    
        shoppingCart.addItem(item1);
    
        expect(shoppingCart.itemCount).toBe(1);
        expect(shoppingCart.products).toEqual([ { id: 1, name: 'Lorem ipsum', count: 1 } ]);
    });
    
    it('should add multiple items of the same product', () => {
        shoppingCart.clear();
    
        shoppingCart.addItem(item1);
        shoppingCart.addItem(item1);
        shoppingCart.addItem(item1);
    
        expect(shoppingCart.itemCount).toBe(3);
        expect(shoppingCart.products).toEqual([ { id: 1, name: 'Lorem ipsum', count: 3 } ]);
    });
    
    it('should remove an item', () => {
        shoppingCart.clear();
    
        shoppingCart.addItem(item1);
        shoppingCart.addItem(item2);
    
        shoppingCart.removeItem(2);
    
        expect(shoppingCart.itemCount).toBe(1);
        expect(shoppingCart.products).toEqual([ { id: 1, name: 'Lorem ipsum', count: 1 } ]);
    });
    
    it('should remove multiple items of the same product', () => {
        shoppingCart.clear();
    
        shoppingCart.addItem(item1);
        shoppingCart.addItem(item1);
    
        shoppingCart.removeItem(1);
    
        expect(shoppingCart.itemCount).toBe(1);
        expect(shoppingCart.products).toEqual([ { id: 1, name: 'Lorem ipsum', count: 1 } ]);
    
        shoppingCart.removeItem(1);
    
        expect(shoppingCart.itemCount).toBe(0);
        expect(shoppingCart.products).toEqual([]);
    });
    
    
    it('should not remove an item that does not exist', () => {
        shoppingCart.clear();
    
        shoppingCart.addItem(item1);
    
        shoppingCart.removeItem(2);
    
        expect(shoppingCart.itemCount).toBe(1);
        expect(shoppingCart.products).toEqual([ { id: 1, name: 'Lorem ipsum', count: 1 } ]);
    });

});