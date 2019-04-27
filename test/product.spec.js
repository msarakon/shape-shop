import { shallowMount } from '@vue/test-utils';
import Product from '../src/components/product.vue';

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
    });

});