'use strict';
import { naviBar } from '../naviBar.js';

const MainFooter = {
    template: `
        <footer id="footer">
            <address>版權所有 &copy; 2018 國立中正大學 環境保護及工業安全衛生中心 </address>
            <p>621 嘉義縣民雄鄉大學路168號  (05)2720411  Fax：(05)2722249</p>
            <p>最後更新日期：2018/10/25</p>
        </footer>
    `
};

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

const SideNav = {
    props: {
        id: {
            type: String
        }
    },
    computed: {
        contentInUl() {
            let contentInUl = '';
            let countNav = naviBar.length;
            for (let i = 0; i < countNav; i++) {
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
    template: `
        <nav>
            <ul v-html="contentInUl">
            </ul>
        </nav>
    `
};

export {
    MainFooter,
    MainHeader,
    SideNav
};
