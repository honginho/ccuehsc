// naviBar.js
'use strict';

const news = {
    id: 0,
    title: '最新消息',
    link: './index.html',
    details: []
};

const about = {
    id: 1,
    title: '關於中心',
    link: './about.html',
    details: ['中心簡介', '組織編制', '法規編彙', '活動照片']
};

const business = {
    id: 2,
    title: '業務組別',
    link: './business.html',
    details: ['環保業務', '工安業務', '所屬委員會']
};

const topic = {
    id: 3,
    title: '主題專區',
    link: './topic.html',
    details: ['資源回收', '校園流浪犬', '飲水機水質檢測']
};

const download = {
    id: 4,
    title: '表單下載',
    link: './download.html',
    details: []
};

const naviBar = [
    news, about, business, topic, download
];

export {
    naviBar
};
