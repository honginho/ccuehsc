'use strict';

// 引入獨立的導覽列 js 檔
import {
    NaviBar
} from './naviBar.js';

import {
    MainFooter,
    MainHeader
} from './components.js';

let main = new Vue({
    el: '#app',
    data: {
        category: [],
        subpage: {},
        selectedCategory: ''
    },
    created: function () {
        // Initialize `category`, `subpage` from naviBar.js

        // Initialize `News`
        let newsData = '{ "title": "最新消息", "value": "News"}';
        this.category.push(JSON.parse(newsData));
        this.subpage['News'] = [NaviBar[0].details[0].title];

        // Initialize the rest
        for (let i = 3; i < NaviBar.length; i++) {
            let value = this.getPageName(NaviBar[i].link.split('/')[1].split('.')[0].split('-'));
            let dataCategory = '{ "title": "' + NaviBar[i].title + '", "value": "' + value + '" }';
            let dataSubpage;
            this.subpage[value] = [];
            for (let j = 0; j < NaviBar[i].details.length; j++) {
                this.subpage[value].push(NaviBar[i].details[j].title);
            }
            this.category.push(JSON.parse(dataCategory));
        }

        // console.log('Category:', this.category);
        // console.log('Subpage:', this.subpage);
    },
    methods: {
        getPageName(category) {
            let value = '';
            for (let j = 0; j < category.length; j++)
                value += this.char1Uppercase(category[j]);
            return value;
        },
        char1Uppercase(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    },
    components: {
        'MainFooter': MainFooter,
        'MainHeader': MainHeader
    }
});