// DrinkingFountain.js
'use strict';

const Category = 'DrinkingFountain';

function ComponentTable(category, lead, data) {
    let content = '';

    if (lead !== '') {
        lead = `<div class="alert alert-success" role="alert"> ${ lead } </div>`;
    }

    for (let i = 0; i < data.length; i++) {
        let file = '';

        if (data[i].docx) {
            file += `
                <a href="./assets/${ category }/${ data[i].docx }" download>
                    <span class="badge badge-primary">DOC</span>
                </a>
            `;
        }
        else if (data[i].doc) {
            file += `
                <a href="./assets/${ category }/${ data[i].doc }" download>
                    <span class="badge badge-primary">DOC</span>
                </a>
            `;
        }

        if (data[i].pdf) {
            file += `
                <a href="./assets/${ category }/${ data[i].pdf }" download>
                    <span class="badge badge-danger">PDF</span>
                </a>
            `;
        }
        if (data[i].opt) {
            file += `
                <a href="./assets/${ category }/${ data[i].opt }" download>
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
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">檔案名稱</th>
                        <th scope="col">上傳日期</th>
                        <th scope="col">下載</th>
                    </tr>
                </thead>
                <tbody>
                    ${ content }
                </tbody>
            </table>
        `;

    return tpl;
}

const TplDrinkingFountain = [
    function (lead='', data=[]) {
        return ComponentTable(Category, lead, data);
    },
    function (lead='', data=[]) {
        return ComponentTable(Category, lead, data);
    }
];

export {
    TplDrinkingFountain
};