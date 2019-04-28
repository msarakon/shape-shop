import { shallowMount } from '@vue/test-utils';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import flushPromises from 'flush-promises';
import ProductList from '../src/components/product-list.vue';

describe('ProductList', () => {

    const mock = new MockAdapter(axios);

    it('should fetch product information', async () => {
        mock.onGet('api/products').reply(200, [ { id: 1 }, { id: 2 } ]);

        const wrapper = shallowMount(ProductList);

        expect(wrapper.vm.productsLoading).toBeTruthy();
        expect(wrapper.vm.products.length).toBe(0);

        await flushPromises();

        expect(wrapper.vm.productsLoading).toBeFalsy();
        expect(wrapper.vm.products.length).toBe(2);
    });

    it('should set an error flag if fetching for products fails', async () => {
        mock.onGet('api/products').reply(500);

        const wrapper = shallowMount(ProductList);

        expect(wrapper.vm.productsError).toBeFalsy();
        expect(wrapper.vm.products.length).toBe(0);

        await flushPromises();

        expect(wrapper.vm.productsError).toBeTruthy();
        expect(wrapper.vm.products.length).toBe(0);
    });

});