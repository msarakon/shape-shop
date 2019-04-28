import { shallowMount } from '@vue/test-utils';
import { shoppingCart } from '../src/data-store.js';
import ShoppingCart from '../src/components/shopping-cart.vue';

describe('ShoppingCart', () => {

    shoppingCart.addItem({ id: 1, name: 'foobar' });
    shoppingCart.addItem({ id: 2, name: 'test' });
    shoppingCart.addItem({ id: 1, name: 'foobar' });

    const wrapper = shallowMount(ShoppingCart);

    it('should display products in the shopping cart', () => {
        expect(wrapper.findAll('.product').length).toBe(2);
    });

    it('should add and remove items', () => {
        expect(shoppingCart.itemCount).toBe(3);

        wrapper.findAll('.product').at(0)
            .findAll('.product-actions .button').at(1)
            .trigger('click');

        expect(shoppingCart.itemCount).toBe(4);

        wrapper.findAll('.product').at(0)
            .findAll('.product-actions .button').at(1)
            .trigger('click');

        expect(shoppingCart.itemCount).toBe(5);

        wrapper.findAll('.product').at(1)
            .findAll('.product-actions .button').at(0)
            .trigger('click');

        expect(shoppingCart.itemCount).toBe(4);
        expect(wrapper.findAll('.product').length).toBe(1);
    });

    it('should close the shopping cart', () => {
        wrapper.find('.close-button').trigger('click');
        expect(wrapper.emitted('close')).toBeTruthy();
    });

});