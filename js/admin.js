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
        selectedCategory: '',
        selectedCategoryEdit: '',
        selectedSubpageEdit: ''
    },
    created: function () {
        // To prepare for `<select>` and `<option>`, initializing `category`, `subpage` from naviBar.js

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
    watch: {
        selectedCategoryEdit: function(value) {
            this.selectedSubpageEdit = 0;
            // console.log('cat:', value);
            this.getTargetData(this.selectedCategoryEdit, this.selectedSubpageEdit);
        },
        selectedSubpageEdit: function(value) {
            // console.log('sub:', value);
            this.getTargetData(this.selectedCategoryEdit, this.selectedSubpageEdit);
        },
    },
    methods: {
        CreateTargetTable(data, cat, sub) {
            let content = (data.length > 0) ? '' : '<tr><td>沒有資料</td><td></td><td></td><td></td></tr>';

            for (let i = data.length - 1; i >= 0; i--) {
                let file = '';
                let filename = '';
                let filenameExtension = '';

                if (data[i].docx) {
                    filename = data[i].docx;
                    file += `
                        <a href="./assets/${ filename }" download="${ data[i].title }">
                            <span class="badge badge-primary">DOCX</span>
                        </a>
                    `;
                    filenameExtension = 'docx';
                }
                else if (data[i].doc) {
                    filename = data[i].doc;
                    file += `
                        <a href="./assets/${ filename }" download="${ data[i].title }">
                            <span class="badge badge-primary">DOC</span>
                        </a>
                    `;
                    filenameExtension = 'doc';
                }

                if (data[i].pdf) {
                    filename = data[i].pdf;
                    file += `
                        <a href="./assets/${ filename }" download="${ data[i].title }">
                            <span class="badge badge-danger">PDF</span>
                        </a>
                    `;
                    filenameExtension = 'pdf';
                }
                if (data[i].opt) {
                    filename = data[i].opt;
                    file += `
                        <a href="./assets/${ filename }" download="${ data[i].title }">
                            <span class="badge badge-info">OPT</span>
                        </a>
                    `;
                    filenameExtension = 'opt';
                }

                let prepareData = `['${cat}', '${sub}', '${data[i].title}', '${filename}', '${filenameExtension}']`;

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
                        <td>
                            <!-- <form action="editTxtData.php" method="POST">
                                <input type="hidden" name="category_edit_item" value="${cat}">
                                <input type="hidden" name="subpage_edit_item" value="${sub}">
                                <input type="hidden" name="title_edit_item" value="${data[i].title}">
                                <input type="hidden" name="filename_edit_item" value="${filename}">
                                <input type="hidden" name="filenameExtension_edit_item" value="${filenameExtension}">
                                <button type="submit" class="btn btn-sm btn-danger" aria-label="Delete File">
                                    <i class="far fa-trash-alt" style="width: 12px; padding: 0; color: #fff;"></i>
                                </button>
                            </form> -->

                            <button type="button" class="btn btn-sm btn-danger" data-toggle="modal" data-target="#checkWhoUR" onclick="prepareEditDataToModal(${prepareData})">
                                <i class="far fa-trash-alt" style="width: 12px; padding: 0; color: #fff;"></i>
                            </button>
                        </td>
                    </tr>
                `;
            }

            let tpl =
                `
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th scope="col">檔案名稱</th>
                                <th scope="col">上傳日期</th>
                                <th scope="col">下載區</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            ${ content }
                        </tbody>
                    </table>
                `;

            return tpl;
        },
        testla() {alert('test ttttttttttttt')},
        getTargetData(cat, sub) {
            this.getDBFile(sub, cat).then(res => {
                let details = this.CreateTargetTable(res, cat, sub);
                $('#result').html(details);
            }).catch(err => {
                console.log('Failed to get data:', err);
            });
        },
        // To match every key of `NaviBar`(object)
        char1stUppercase(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
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
        getPageName(category) {
            let value = '';
            for (let j = 0; j < category.length; j++)
                value += this.char1stUppercase(category[j]);
            return value;
        },
        setData(rawData) {
            let dataFragment = rawData.split(';;;');
            let output = [];
            for (let i = 0; i < dataFragment.length - 1; i++) {
                let data = JSON.parse(dataFragment[i]);

                if (data !== null)
                    // 108.7.2 更新前上傳的資料：`status` === null
                    // 108.7.2 更新後上傳的資料：`status` === 1
                    // 已刪除：`status` === 0
                    if (data.status !== 0)
                        output.push(data);
            }

            return output;
        },
    },
    components: {
        'MainFooter': MainFooter,
        'MainHeader': MainHeader
    }
});