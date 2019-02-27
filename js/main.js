'use strict';

import {
    MainFooter,
    MainHeader,
    SideNav,
    SubNavAndContent
} from './components.js';

let main = new Vue({
    el: '#app',
    data: {
        // data
    },
    methods: {
        // methods
    },
    components: {
        'MainFooter': MainFooter,
        'MainHeader': MainHeader,
        'SideNav': SideNav,
        'SubNavAndContent': SubNavAndContent
    }
});