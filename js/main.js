'use strict';

import {
    MainFooter,
    MainHeader,
    SideNav,
    SubNav,
    SubNavContent
} from './component/common.js';

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
        'SubNav': SubNav,
        'SubNavContent': SubNavContent
    }
});