'use strict';

// 引入獨立的導覽列 js 檔
import { naviBar } from '../naviBar.js';

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
                    <img src="./img/logo.png" alt="國立中正大學">
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
        contentInNav() {
            let contentInUl = '';

            let countNav = naviBar.length;
            for (let i = 0; i < countNav; i++) {
                // 判斷如果是在某個頁面，增加 .active 在那個 <li> 上
                let isActive = (this.id === i) ? 'class="active"' : '';
                contentInUl += `
                    <li>
                        <a ${ isActive } href="${ naviBar[i].link }">
                            <i class="fas fa-angle-right"></i>
                            ${ naviBar[i].title }
                        </a>
                    </li>
                `;
            }
            return contentInUl;
        }
    },
    // 用 v-html 才能把 DOM 渲染也出來
    // (!) 用 {{ <variable> }} 的話會出現純文字
    // (!) 用 v-html 無法成功渲染 v-bind 的動作
    template: `
        <nav>
            <ul v-html="contentInNav">
            </ul>
        </nav>
    `
};

export {
    MainFooter,
    MainHeader,
    SideNav
};
