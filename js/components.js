'use strict';

// 引入獨立的導覽列 js 檔
import {
    NaviBar
} from './naviBar.js';

// 頁尾 (( © 之類的那些
const MainFooter = {
    template: `
        <footer>
            <div class="text-center py-3 text-white">
                <address>版權所有 &copy; 2018 國立中正大學 環境保護及工業安全衛生中心 </address>
                <p>621 嘉義縣民雄鄉大學路168號 (05)2720411 Fax：(05)2722249</p>
                <p class="mb-0">最後更新日期：2019/3/15</p>
            </div>
        </footer>
    `
};

// 頁首 (( banner, logo 之類的
const MainHeader = {
    template: `
        <section id="banner">
            <div class="container">
                <div class="row flex-lg-row-reverse">
                    <div class="col-lg-4 col-sm-6">
                        <nav>
                            <ol class="breadcrumb justify-content-center">
                                <li class="breadcrumb-item">
                                    <a href="http://www.ccu.edu.tw/">中正大學</a>
                                </li>
                                <li class="breadcrumb-item active">
                                    <a href="#">中文</a>
                                </li>
                                <li class="breadcrumb-item">
                                    <a href="#">English</a>
                                </li>
                            </ol>
                        </nav>
                    </div>

                    <div class="col-lg-8">
                        <img src="./img/logo2.png" alt="國立中正大學" class="img-fluid py-4">
                    </div>
                </div>

                <hr>
            </div>
        </section>
    `
};

// 左側導覽列
const SideNav = {
    props: {
        id: {
            type: String
        }
    },
    computed: {
        // 透過外部引入的 js 來動態產生「左側」導覽列的內容
        titleInNav() {
            let htmlInUl = '';

            let countNav = NaviBar.length;
            for (let i = 0; i < countNav; i++) {
                let isActive = (this.id === i) ? 'active' : '';
                htmlInUl += `
                    <a href="${ NaviBar[i].link }" class="list-group-item list-group-item-action ${ isActive }">
                        ${ NaviBar[i].title }
                    </a>
                `;
            }
            return htmlInUl;
        }
    },
    // 用 v-html 才能把 DOM 渲染也出來
    // (!) 用 {{ <variable> }} 的話會出現純文字
    // (!) 用 v-html 無法成功渲染 v-bind 的動作
    template: `
        <div class="col-md-3 col-lg-2 d-none d-md-block list-group" v-html="titleInNav"></div>
    `
};

// 內容導覽列
const SubNavAndContent = {
    props: {
        id: {
            type: String
        }
    },
    computed: {
        // 透過外部引入的 js 來動態產生「右側」副導覽列的內容
        title() {
            let html = '';
            let subNav = NaviBar[this.id];
            let countSubNav = subNav.details.length;

            if (countSubNav === 1) return html;

            for (let i = 0; i < countSubNav; i++) {
                let isActive = (i === 0) ? 'active show' : '';
                let isSelected = (i === 0) ? 'true' : 'false';
                let targetTab = 'sub-nav-' + this.id + '-' + i + '-tab'; // aria-labelledby
                let targetHref = 'sub-nav-' + this.id + '-' + i;
                html += `
                    <a class="nav-item nav-link ${ isActive }" id="${ targetTab }" data-toggle="tab" href="#${ targetHref }" role="tab" aria-controls="${ targetHref }" aria-selected="${ isSelected }">
                        ${ subNav.details[i].title }
                    </a>
                `;
            }
            return html;
        },
        content() {
            let html = '';
            let subNav = NaviBar[this.id];
            let countSubNav = subNav.details.length;

            if (countSubNav === 0);

            for (let i = 0; i < countSubNav; i++) {
                let isActive = (i === 0) ? 'active show' : '';
                let targetTab = 'sub-nav-' + this.id + '-' + i + '-tab'; // aria-labelledby
                let targetHref = 'sub-nav-' + this.id + '-' + i;
                html += `
                    <div class="tab-pane fade ${ isActive }" id="${ targetHref }" role="tabpanel" aria-labelledby="${ targetTab }">
                        ${ subNav.details[i].template }
                    </div>
                `;
            }
            return html;
        }
    },
    template: `
        <div class="col-md-9 col-lg-10">
            <nav>
                <div class="nav nav-tabs" id="sub-nav" role="tablist" v-html="title"></div>
            </nav>
            <div id="nav-tabContent" class="tab-content p-3 bg-white border border-top-0 rounded-bottom shadow-sm" v-html="content">
            </div>
        </div>
    `
};

export {
    MainFooter,
    MainHeader,
    SideNav,
    SubNavAndContent
};