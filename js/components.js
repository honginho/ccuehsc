'use strict';

// 引入獨立的導覽列 js 檔
import {
    NaviBar
} from './naviBar.js';

// 頁尾 (( © 之類的那些
const MainFooter = {
    template: `
        <footer>
            <template v-if="isEnglish">
                <div class="container-fluid p-5 text-white text-center">
                    <div class="row">
                        <div class="col-md-4 p-2">
                            <h3 class="pb-2" style="letter-spacing: 4px">About us</h3>
                            <p style="padding: .75rem 0;">We are dedicated to providing professional service in the evaluation, development, implementation, and operation of comprehensive environmental health and safety programs to injuries prevention, illnesses reduction, and environmental protection on our campus.</p>
                        </div>
                        <div class="col-md-4 p-2">
                            <h3 class="pb-2" style="letter-spacing: 4px">Contact information</h3>
                            <p style="padding: .75rem 0;">
                                E-mail: chepec@ccu.edu.tw<br>
                                Tel: 05-2720411<br>
                                Fax: 05-2722249<br>
                                No.168, Sec. 1, University Rd., Minhsiung, Chiayi 621301, Taiwan (R.O.C.)
                            </p>
                        </div>
                        <div class="col-md-4 p-2">
                            <h3 class="pb-2" style="letter-spacing: 4px">Links</h3>
                            <div class="list-group list-group-flush">
                                <a class="list-group-item text-overflow-ellipsis" href="https://www026190.ccu.edu.tw/ccuehsc/index.php" target="_blank" title="實驗室暨化學品管理系統">
                                    實驗室暨化學品管理系統
                                </a>
                            </div>
                        </div>
                    </div>

                    <hr>

                    <div class="copyright">
                        <p><hd title="Honginho" style="cursor: pointer">Copyright</hd> &copy; <span v-html="getYearForCopyright"></span> CCU Environmental Hygiene and Safety Center All rights reserved</p>
                        <p class="mb-0" v-html="updateDate"></p>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="container-fluid p-5 text-white text-center">
                    <div class="row">
                        <div class="col-md-4 p-2">
                            <h3 class="pb-2" style="letter-spacing: 4px">關於我們</h3>
                            <p style="padding: .75rem 0;">國立中正大學以獨特、卓越、前瞻的思維培養全方位人才，積極發展成為國際一流大學。本校基於關心生態環境保護、重視實驗場所安全衛生等議題，為達到「生態保護、節能減碳、永續發展」的綠色大學目標。</p>
                        </div>
                        <div class="col-md-4 p-2">
                            <h3 class="pb-2" style="letter-spacing: 4px">聯絡資訊</h3>
                            <p style="padding: .75rem 0;">
                                E-mail：chepec@ccu.edu.tw<br>
                                621301嘉義縣民雄鄉大學路168號<br>
                                電話：05-2720411<br>
                                傳真：05-2722249
                            </p>
                        </div>
                        <div class="col-md-4 p-2">
                            <h3 class="pb-2" style="letter-spacing: 4px">友站連結</h3>
                            <div class="list-group list-group-flush">
                                <a class="list-group-item text-overflow-ellipsis" href="https://www026190.ccu.edu.tw/ccuehsc/index.php" target="_blank" title="實驗室暨化學品管理系統">
                                    實驗室暨化學品管理系統
                                </a>
                            </div>
                        </div>
                    </div>

                    <hr>

                    <div class="copyright">
                        <p><hd title="Honginho" style="cursor: pointer">版權所有</hd> &copy; <span v-html="getYearForCopyright"></span> 國立中正大學 環境保護及工業安全衛生中心</p>
                        <p class="mb-0" v-html="updateDate"></p>
                    </div>
                </div>
            </template>
        </footer>
    `,
    computed: {
        updateDate: function () {
            let date = new Date();
            let yyyy = date.getFullYear();
            let mm = date.getMonth() + 1;
            mm = (mm > 9 ? '' : '0') + mm;
            if (this.isEnglish)
                return `Maintenance date: ${yyyy}/${mm}/01`;
            return `最後更新日期：${yyyy}/${mm}/01`;
        },
        getYearForCopyright: function () {
            return new Date().getFullYear();
        },
        isEnglish() {
            let lang = new URLSearchParams(window.location.search).get('lang');
            return (lang == 'en') ? true : false;
        }
    }
};

// 頁首 (( banner, logo 之類的
const MainHeader = {
    template: `
        <section id="banner">
            <nav class="navbar navbar-expand-lg navbar-dark py-0">
                <a id="nav-logo" class="navbar-brand d-flex align-items-end" :href="changeLang[4]">
                    <img src="./img/cculogo.png" alt="CCU LOGO">
                    <span style="padding-left: 2px; font-family: 'DFKai-sb'; font-weight: bold;">環安中心</span>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" :href="changeLang[5]" v-html="changeLang[1]"></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" @click="switchLang()" href="#" v-html="changeLang[2]"></a>
                        </li>
                    </ul>
                    <a class="btn btn-outline-light my-2 my-sm-0" href="mailto:chepec@ccu.edu.tw"><i class="fas fa-envelope"></i><span v-html="changeLang[3]"></span></a>
                </div>
            </nav>
            <form id="switchLangForm" action="">
                <input type="hidden" name="lang" :value="changeLang[0]">
            </form>
        </section>
    `,
    computed: {
        changeLang: function () {
            let formValue = 'en';
            let ccu = '中正大學首頁';
            let mode = 'English Mode';
            let contact = '聯絡我們';
            let linkIndexPage = './index.html';
            let linkCcu = 'https://www.ccu.edu.tw/';

            let lang = new URLSearchParams(window.location.search).get('lang');
            if (lang == 'en') {
                formValue = 'zh-tw';
                ccu = 'CCU Website'
                mode = '中文版';
                contact = 'Contact Us';
                linkIndexPage = './index.html?lang=en';
                linkCcu = 'https://www.ccu.edu.tw/eng/index.php';
            }

            return [formValue, ccu, mode, contact, linkIndexPage, linkCcu];
        },
    },
    methods: {
        switchLang: function () {
            document.forms['switchLangForm'].submit();
        }
    }
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
            let lang = new URLSearchParams(window.location.search).get('lang');

            let htmlInUl = '';

            let countNav = NaviBar.length;
            for (let i = 0; i < countNav; i++) {
                let isActive = (this.id === i) ? 'active' : '';
                let naviBarTitle = (lang == 'en') ? NaviBar[i].titleEng : NaviBar[i].title;
                let naviBarLink = (lang == 'en') ? NaviBar[i].link + '?lang=en' : NaviBar[i].link;
                htmlInUl += `
                    <a href="${ naviBarLink }" class="list-group-item list-group-item-action ${ isActive }">
                        ${ naviBarTitle }
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
            let lang = new URLSearchParams(window.location.search).get('lang');
            let html = '';
            let subNav = NaviBar[this.id];
            let countSubNav = subNav.details.length;

            if (countSubNav === 1) return html;

            for (let i = 0; i < countSubNav; i++) {
                let isActive = (i === 0) ? 'active show' : '';
                let isSelected = (i === 0) ? 'true' : 'false';
                let targetTab = 'sub-nav-' + this.id + '-' + i + '-tab'; // aria-labelledby
                let targetHref = 'sub-nav-' + this.id + '-' + i;
                let subNavTitle = subNav.details[i].title;
                if (lang == 'en')
                    if (subNav.details[i].titleEng != '')
                        subNavTitle = subNav.details[i].titleEng;
                html += `
                    <a class="nav-item nav-link ${ isActive }" id="${ targetTab }" data-toggle="tab" href="#${ targetHref }" role="tab" aria-controls="${ targetHref }" aria-selected="${ isSelected }">
                        ${ subNavTitle }
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