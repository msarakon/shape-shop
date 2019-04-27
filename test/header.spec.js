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

});