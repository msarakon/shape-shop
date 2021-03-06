import { shallowMount } from '@vue/test-utils';
import Product from '../src/components/product.vue';
import { shoppingCart } from '../src/data-store.js';

describe('Product', () => {

    const wrapper = shallowMount(Product, {
        propsData: {
            product: {
                id: 123,
                name: 'Lorem ipsum',
                description: 'Dolor sit amet',
                price: 42
            }
        }
    });

    it('should display product information', () => {
        expect(wrapper.find('.product-name').text()).toEqual('Lorem ipsum');
        expect(wrapper.find('.product-description').text()).toEqual('Dolor sit amet');
        expect(wrapper.find('.product-price').text()).toEqual('42 €');
    });

    it('should add an item to shopping cart', (done) => {
        expect(shoppingCart.itemCount).toBe(0);
        expect(wrapper.vm.itemAddedNotif).toBeFalsy();

        wrapper.find('.product-add-to-cart > .button').trigger('click');

        expect(shoppingCart.itemCount).toBe(1);

        wrapper.find('.product-add-to-cart > .button').trigger('click');

        expect(shoppingCart.itemCount).toBe(2);

        expect(wrapper.vm.itemAddedNotif).toBeTruthy();
        setTimeout(() => {
            expect(wrapper.vm.itemAddedNotif).toBeFalsy();
            done();
        }, 500)
    });

});