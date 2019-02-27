// Download.js
'use strict';

const tplDownload = [
    `
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">檔案名稱</th>
                    <th scope="col">上傳日期</th>
                    <th scope="col">下載</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        107飲水機第四季報告 1
                    </td>
                    <td>
                        2019 /  1 / 23
                    </td>
                    <td>
                        <a href="./assets/107飲水機第四季報告1.doc" download>
                            <span class="badge badge-primary">DOC</span>
                        </a>
                        <a href="./assets/107飲水機第四季報告1.pdf" download>
                            <span class="badge badge-danger">PDF</span>
                        </a>
                        <a href="./assets/107飲水機第四季報告1.pdf" download>
                            <span class="badge badge-info">ODT</span>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    `
];

export {
    tplDownload
};