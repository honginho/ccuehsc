﻿'use strict';

// 引入獨立的導覽列 js 檔
import {
    NaviBar
} from './naviBar.js';

import {
    MainFooter,
    MainHeader,
    SideNav,
    SubNavAndContent
} from './components.js';

let main = new Vue({
    el: '#app',
    data: {
        // data
    },
    created: function () {
        let id = this.getMetaDesc().split(',')[0]; // e.g. 0 v.s. 9

        if (id > 2 || id == 0) {
            let category = this.getMetaDesc().split(',')[1]; // e.g. `News` v.s. `Train`
            let countSubNav = NaviBar[id].details.length; // e.g. 1 v.s. 2

            for (let i = 0; i < countSubNav; i++) {
                let subNavLead = NaviBar[id].details[i].lead;
                this.getDBFile(i, category).then(res => {
                    let details;
                    if (id > 2)
                        details = this.CreateFilesTable(subNavLead, res);
                    else
                        details = this.CreateNewsTable(subNavLead, res);

                    $('#sub-nav-' + id + '-' + i).html(details);
                }).catch(err => {
                    console.log('Failed to get data:', err);
                });
            }
        }
        else if (id == -1) {
            let category = 'News'; // e.g. `News` v.s. `Train`
            let realID = 0;
            let countSubNav = NaviBar[realID].details.length; // e.g. 1 v.s. 2

            for (let i = 0; i < countSubNav; i++) {
                let subNavLead = NaviBar[realID].details[i].lead;
                this.getDBFile(i, category).then(res => {
                    let details;
                    details = this.CreateMainNewsTable(subNavLead, res);

                    $('#news').html(details);
                }).catch(err => {
                    console.log('Failed to get data:', err);
                });
            }
        }
    },
    methods: {
        setData(rawData) {
            let dataFragment = rawData.split(';;;');
            let output = [];
            for (let i = 0; i < dataFragment.length - 1; i++) {
                output.push(JSON.parse(dataFragment[i]));
            }
            return output;
        },
        getDBFile(index, category) {
            let self = this;

            return new Promise((resolve, reject) => {
                $.ajax({
                    url: './getTxtData.php',
                    type: 'POST',
                    data: {
                        index: index,
                        category: category
                    },
                    success: function(res) {
                        resolve(self.setData(res));
                    },
                    error: function(err) {
                        reject(err);
                    }
                });
            });
        },
        getMetaDesc(metaName='description') {
            let metas = document.getElementsByTagName('meta');

            for (let i = 0; i < metas.length; i++) {
                if (metas[i].getAttribute('name') === metaName) {
                    return metas[i].getAttribute('content');
                }
            }

            return '';
        },
        CreateFilesTable(lead, data) {
            let content = '';

            if (lead !== '') {
                lead = `<div class="alert alert-success" role="alert"> ${ lead } </div>`;
            }

            for (let i = data.length - 1; i >= 0; i--) {
                let file = '';

                if (data[i].docx) {
                    file += `
                        <a href="./assets/${ data[i].docx }" download>
                            <span class="badge badge-primary">DOCX</span>
                        </a>
                    `;
                }
                else if (data[i].doc) {
                    file += `
                        <a href="./assets/${ data[i].doc }" download>
                            <span class="badge badge-primary">DOC</span>
                        </a>
                    `;
                }

                if (data[i].pdf) {
                    file += `
                        <a href="./assets/${ data[i].pdf }" download>
                            <span class="badge badge-danger">PDF</span>
                        </a>
                    `;
                }
                if (data[i].opt) {
                    file += `
                        <a href="./assets/${ data[i].opt }" download>
                            <span class="badge badge-info">OPT</span>
                        </a>
                    `;
                }

                content += `
                    <tr>
                        <td>
                            ${ data[i].title }
                        </td>
                        <td>
                            ${ data[i].date }
                        </td>
                        <td>
                            ${ file }
                        </td>
                    </tr>
                `;
            }

            let tpl =
                `
                    ${ lead }
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th scope="col">檔案名稱</th>
                                <th scope="col">上傳日期</th>
                                <th scope="col">下載區</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${ content }
                        </tbody>
                    </table>
                `;

            return tpl;
        },
        CreateNewsTable(lead, data) {
            let content = '';

            if (lead !== '') {
                lead = `<div class="alert alert-success" role="alert"> ${ lead } </div>`;
            }

            for (let i = data.length - 1; i >= 0; i--) {
                let file = '';
                let newpost = '';

                if (data[i].docx) {
                    file += `
                        <a href="./assets/${ data[i].docx }" download>
                            ${ data[i].title }
                        </a>
                    `;
                }
                else if (data[i].doc) {
                    file += `
                        <a href="./assets/${ data[i].doc }" download>
                            ${ data[i].title }
                        </a>
                    `;
                }

                if (data[i].pdf) {
                    file += `
                        <a href="./assets/${ data[i].pdf }" download>
                            ${ data[i].title }
                        </a>
                    `;
                }
                if (data[i].opt) {
                    file += `
                        <a href="./assets/${ data[i].opt }" download>
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
                `
                    ${ lead }
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
        },
        CreateMainNewsTable(lead, data) {
            let content = '';

            if (lead !== '') {
                lead = `<div class="alert alert-success" role="alert"> ${ lead } </div>`;
            }

            let limit = (data.length - 6 >= 0) ? (data.length-6) : 0;
            for (let i = data.length - 1; i >= limit; i--) {
                let filePath = '';
                let newpost = '';

                if (data[i].docx) {
                    filePath += `./assets/${ data[i].docx }`;
                }
                else if (data[i].doc) {
                    filePath += `./assets/${ data[i].doc }`;
                }

                if (data[i].pdf) {
                    filePath += `./assets/${ data[i].pdf }`;
                }
                if (data[i].opt) {
                    filePath += `./assets/${ data[i].opt }`;
                }

                content += `
                    <a href="${ filePath }" download class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">
                                <strong style="font-size: 1.2rem; color: var(--main-color);">${ data[i].title }</strong>
                            </h5>
                            <small class="text-muted">${ data[i].date }</small>
                        </div>
                        <p class="mb-1 text-truncate" title="${ data[i].content }">${ data[i].content }</p>
                    </a>
                `;
            }

            let tpl =
                `
                    ${ lead }
                    <div class="list-group mt-5">
                        ${content}
                    </div>
                    <a href="./news.html" class="btn btn-primary mt-3" style="background-color: var(--main-color); border-color: var(--main-color);">查看所有消息</a>
                `;

            return tpl;
        }
    },
    components: {
        'MainFooter': MainFooter,
        'MainHeader': MainHeader,
        'SideNav': SideNav,
        'SubNavAndContent': SubNavAndContent
    }
});