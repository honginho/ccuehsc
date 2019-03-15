// Team.js
'use strict';

const TplTeam = [
    function () {
        let tpl =
            `<!-- 中心 -->
                <table class="table table-bordered table-td-larger">
                    <!-- <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">姓名 / 職稱</th>
                            <th scope="col">工作項目</th>
                            <th scope="col">分機 / 信箱</th>
                        </tr>
                    </thead> -->
                    <tbody scope="center">
                        <tr>
                            <td>
                                <b>許昺慕 主任</b>
                                <br>
                                地環系教授
                            </td>
                            <td>
                                <ul>
                                    <li>綜理環境保護及安全衛生業務</li>
                                </ul>
                            </td>
                            <td>
                                <i class="fas fa-phone"></i>52000
                                <br>
                                <i class="fas fa-envelope"></i><a class="td-a" href="mailto:bmhsu@ccu.edu.tw">bmhsu@ccu.edu.tw</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>張碧兒 技正</b>
                                <br>
                                環境教育人員
                            </td>
                            <td>
                                <ul>
                                    <li>協助主任協調中心各組間業務</li>
                                    <li>評鑑業務及綜合性業務</li>
                                    <li>各項會議聯繫及資料彙整管理</li>
                                    <li>預算編列及經費控管</li>
                                </ul>
                            </td>
                            <td>
                                <i class="fas fa-phone"></i>52001
                                <br>
                                <i class="fas fa-envelope"></i><a class="td-a" href="mailto:chepec@ccu.edu.tw">chepec@ccu.edu.tw</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            `;

        return tpl;
    },
    function () {
        let tpl =
            `<!-- 環境保護組 -->
                <table class="table table-bordered table-td-larger">
                    <tbody scope="environment">
                        <tr>
                            <td>
                                <b>吳淑芬 組長</b>
                                <br>
                                獸醫師
                                <br>
                                生醫系教授
                            </td>
                            <td>
                                <ul>
                                    <li>統籌環境保護組業務規劃與監督</li>
                                </ul>
                            </td>
                            <td>
                                <i class="fas fa-phone"></i>66509
                                <br>
                                <i class="fas fa-envelope"></i><a class="td-a" href="mailto:biosfw@ccu.edu.tw">biosfw@ccu.edu.tw</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>詹聖偉 技士</b>
                                <br>
                                甲級廢水處理專責人員
                            </td>
                            <td>
                                <ul>
                                    <li>污水處理廠管理與操作</li>
                                    <li>污泥操作與清運作業</li>
                                    <li>校園蓄水池清洗作業</li>
                                    <li>廢棄物清除作業</li>
                                    <li>資源回收業務管理</li>
                                    <li>校園流浪犬管理</li>
                                </ul>
                            </td>
                            <td>
                                <i class="fas fa-phone"></i>52101
                                <br>
                                <i class="fas fa-envelope"></i><a class="td-a" href="mailto:admswchan@ccu.edu.tw">admswchan@ccu.edu.tw</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>張文林 技工</b>
                                <br>
                                乙級廢水處理專責人員訓練
                            </td>
                            <td>
                                <ul>
                                    <li>協助污水處理廠管理與操作</li>
                                    <li>協助污泥操作與清運作業</li>
                                    <li>緊急發電機組保養維修</li>
                                    <li>協助廢棄物清除作業</li>
                                    <li>協助資源回收業務管理</li>
                                    <li>公務車輛管理業務</li>
                                    <li>校園流浪犬收容暫置管理</li>
                                </ul>
                            </td>
                            <td>
                                <i class="fas fa-phone"></i>52107
                                <br>
                                <i class="fas fa-envelope"></i><a class="td-a" href="mailto:admcwl@ccu.edu.tw">admcwl@ccu.edu.tw</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>張宏志 工友</b>
                            </td>
                            <td>
                                <ul>
                                    <li>協助污泥機操作及污泥清除</li>
                                    <li>廠區環境整理及花木養護值</li>
                                    <li>垃圾子車清潔維護及活動借用</li>
                                    <li>資源回收分類</li>
                                    <li>校園流浪犬驅捕</li>
                                    <li>收發公文</li>
                                </ul>
                            </td>
                            <td>
                                <i class="fas fa-phone"></i>52104
                                <br>
                                <i class="fas fa-envelope"></i><a class="td-a" href="mailto:admhjc@ccu.edu.tw">admhjc@ccu.edu.tw</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            `;

        return tpl;
    },
    function () {
        let tpl =
            `<!-- 安全衛生組 -->
                <table class="table table-bordered table-td-larger">
                    <tbody scope="hygiene">
                        <tr>
                            <td>
                                <b>王朝弘 組長</b>
                                <br>
                                甲種職業安全衛生業務主管
                                <br>
                                化工系教授
                            </td>
                            <td>
                                <ul>
                                    <li>統籌安全衛生組業務規劃與監督</li>
                                </ul>
                            </td>
                            <td>
                                <i class="fas fa-phone"></i>33411
                                <br>
                                <i class="fas fa-envelope"></i><a class="td-a" href="mailto:chmchw@ccu.edu.tw">chmchw@ccu.edu.tw</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>段怡如 技佐</b>
                                <br>
                                勞工健康服務護理人員
                            </td>
                            <td>
                                <ul>
                                    <li>職場健康服務與管理</li>
                                    <li>職場健康計畫推動宣傳與教育訓練</li>
                                    <li>健康檢查及管理</li>
                                    <li>實驗動物照護及使用委員會業務</li>
                                    <li>生物實驗安全委員會業務</li>
                                </ul>
                            </td>
                            <td>
                                <i class="fas fa-phone"></i>52108
                                <br>
                                <i class="fas fa-envelope"></i><a class="td-a" href="mailto:admtiger@ccu.edu.tw">admtiger@ccu.edu.tw</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>陳立國 專案人員</b>
                                <br>
                                安全管理師
                            </td>
                            <td>
                                <ul>
                                    <li>實驗場所安全衛生業務推動與輔導</li>
                                    <li>實驗場所自主管理與危害預防</li>
                                    <li>實驗室暨化學品線上管理系統</li>
                                    <li>毒性化學物質管理</li>
                                    <li>實驗場所安全衛生教育訓練</li>
                                </ul>
                            </td>
                            <td>
                                <i class="fas fa-phone"></i>52201
                                <br>
                                <i class="fas fa-envelope"></i><a class="td-a" href="mailto:admlkc@ccu.edu.tw">admlkc@ccu.edu.tw</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                待聘 技佐
                                <br>
                                安全衛生管理員
                            </td>
                            <td>
                                <ul>
                                    <li>實驗場所自主管理與危害預防</li>
                                    <li>實驗場所安全衛生教育訓練</li>
                                    <li>校園飲水機管理</li>
                                    <li>登革熱防治及宿舍消毒作業</li>
                                    <li>室內空氣品質相關業務</li>
                                    <li>輻射防護管理委員會業務</li>
                                </ul>
                            </td>
                            <td>
                                <i class="fas fa-phone"></i>52103
                            </td>
                        </tr>
                    </tbody>
                </table>
            `;

        return tpl;
    }
];

export {
    TplTeam
};