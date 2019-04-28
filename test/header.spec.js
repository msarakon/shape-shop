import { shallowMount } from '@vue/test-utils';
import AppHeader from '../src/components/header.vue';

describe('AppHeader', () => {

    const wrapper = shallowMount(AppHeader);

    it('should fix header on scroll', () => {
        expect(wrapper.vm.fixedHeader).toBeFalsy();

        window.scrollY = 100;
        window.dispatchEvent(new Event('scroll'));

        expect(wrapper.vm.fixedHeader).toBeTruthy();

        window.scrollY = 0;
        window.dispatchEvent(new Event('scroll'));

        expect(wrapper.vm.fixedHeader).toBeFalsy();
    });

    it('should open the shopping cart', () => {
        expect(wrapper.vm.shoppingCartOpen).toBeFalsy();
        wrapper.find('.shopping-cart-icon').trigger('click');
        expect(wrapper.vm.shoppingCartOpen).toBeTruthy();
    });

    it('should close the shopping cart', () => {
        wrapper.vm.closeShoppingCart();
        expect(wrapper.vm.shoppingCartOpen).toBeFalsy();
    });

});