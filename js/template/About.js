// About.js
'use strict';

const tplAbout = [
    function () {
        let tpl =
            `<!-- 環安衛政策 -->
                <img src="./img/certificate.jpg" class="img-fluid img-thumbnail rounded" alt="policy">
            `;

        return tpl;
    },
    function () {
        let tpl =
            `<!-- 歷史沿革 -->
                <p>
                    國立中正大學創校之初便設有「環境保護組」，原隸屬總務處；後更名為「環境保護小組」，直至民國87年12月依學校組織規程改置為現今之「環境保護及工業安全衛生中心」，為一級單位，辦理校園環境保護與實驗場所安全衛生等事項。本中心下設兩組，分別為「環境保護組」及「安全衛生組」。
                </p>
            `;

        return tpl;
    },
    function () {
        let tpl =
            `<!-- 組織編制 -->
                <p>
                    置中心主任1人、組長2人、技正1人、技士1人、技佐2人、專案人員1人、技工1人及工友1人。
                </p>
            `;

        return tpl;
    },
    function () {
        let tpl =
            `<!-- 歷任中心主任 -->
                <p>
                    黃奇 1999/4~2004/7 <br>
                    張仁瑞教授 2004/8~2006/6 <br>
                    敖仲寧教授 2008/7~2016/1 <br>
                    許昺慕教授 2016/2~迄今
                </p>
            `;

        return tpl;
    }
];

export {
    tplAbout
};