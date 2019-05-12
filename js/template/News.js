// News.js
'use strict';

const TplNews = [
    function (lead='', data=[]) {
        let content = '';
        for (let i = 0; i < data.length; i++) {
            let file = '';
            let newpost = '';

            if (data[i].docx) {
                file += `
                    <a href="./assets/News/${ data[i].docx }" download>
                        ${ data[i].title }
                    </a>
                `;
            }
            else if (data[i].doc) {
                file += `
                    <a href="./assets/News/${ data[i].doc }" download>
                        ${ data[i].title }
                    </a>
                `;
            }

            if (data[i].pdf) {
                file += `
                    <a href="./assets/News/${ data[i].pdf }" download>
                        ${ data[i].title }
                    </a>
                `;
            }
            if (data[i].opt) {
                file += `
                    <a href="./assets/News/${ data[i].opt }" download>
                        ${ data[i].title }
                    </a>
                `;
            }

            if (i < 3) newpost = 'class="new-post"';
            content += `
                <li ${ newpost }>
                    <small>${ data[i].date }</small> <strong style="font-size: 1.2rem;">${ file }</strong><br>
                    ${ data[i].content }
                </li>
            `;
        }

        let tpl =
            `<!-- 最新消息列表 -->
                <div class="container-fluid">
                    <div class="row">
                        <div id="news-list">
                            <ul>
                                ${ content }
                            </ul>
                        </div>
                    </div>
                </div>
            `;

        return tpl;
    }
];

export {
    TplNews
};