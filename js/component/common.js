'use strict';

// 引入獨立的導覽列 js 檔
import {
    naviBar
} from '../naviBar.js';

// 頁尾 (( © 之類的那些
const MainFooter = {
    template: `
        <footer id="footer">
            <address>版權所有 &copy; 2018 國立中正大學 環境保護及工業安全衛生中心 </address>
            <p>621 嘉義縣民雄鄉大學路168號  (05)2720411  Fax：(05)2722249</p>
            <p>最後更新日期：2018/10/25</p>
        </footer>
    `
};

// 頁首 (( banner, logo 之類的
const MainHeader = {
    template: `
        <header id="header">
            <nav id="nav">
                <ul>
                    <li>
                        <a href="">
                            English
                        </a>
                    </li>

                    <li>
                        <a href="">
                            中文版
                        </a>
                    </li>

                    <li>
                        <a href="http://www.ccu.edu.tw/">
                            中正大學首頁
                        </a>
                    </li>
                </ul>
            </nav>

            <div id="banner">
                <div class="logo">
                    <img src="./img/logo2.png" alt="國立中正大學">
                </div>
            </div>
        </header>
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
        // 透過外部引入的 js 來動態產生左側導覽列的內容
        titleInNav() {
            let htmlInUl = '';

            let countNav = naviBar.length;
            for (let i = 0; i < countNav; i++) {
                let isActive = (this.id === i) ? 'active' : '';
                htmlInUl += `
                    <a href="${ naviBar[i].link }" class="list-group-item list-group-item-action ${ isActive }">
                        ${ naviBar[i].title }
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
const SubNav = {
    props: {
        id: {
            type: String
        }
    },
    computed: {
        // 透過外部引入的 js 來動態產生左側導覽列的內容
        titleInSubNav() {
            let htmlInSubUl = '';

            let subNav = naviBar[this.id];
            let countSubNav = subNav.details.length;
            for (let i = 0; i < countSubNav; i++) {
                let isActive = (i === 0) ? 'active' : '';
                let isSelected = (i === 0) ? 'true' : 'false';
                let targetTab = 'sub-nav-' + this.id + '-' + i + '-tab'; // aria-labelledby
                let targetHref = 'sub-nav-' + this.id + '-' + i;
                htmlInSubUl += `
                    <a class="nav-item nav-link ${ isActive }" id="${ targetTab }" data-toggle="tab" href="#${ targetHref }" role="tab" aria-controls="${ targetHref }" aria-selected="${ isSelected }">
                        ${ subNav.details[i] }
                    </a>
                `;
            }
            return htmlInSubUl;
        }
    },
    template: `
        <nav>
            <div class="nav nav-tabs" id="sub-nav" role="tablist" v-html="titleInSubNav"></div>
        </nav>
    `
};

// 內容導覽列
const SubNavContent = {
    props: {
        id: { // self id
            type: String
        },
        rId: { // reference id
            type: String
        }
    },

    data: function () {
        return {
            isActive: (this.id === 0) ? true : false,
            targetHref: 'sub-nav-' + this.rId + '-' + this.id,
            targetTab: 'sub-nav-' + this.rId + '-' + this.id + '-tab'
        }
    },
    template: `
        <div :class="{'tab-pane fade': true, 'show active': isActive}" :id="targetHref" role="tabpanel" :aria-labelledby="targetTab">
            <slot></slot>
        </div>
    `
};

export {
    MainFooter,
    MainHeader,
    SideNav,
    SubNav,
    SubNavContent
};