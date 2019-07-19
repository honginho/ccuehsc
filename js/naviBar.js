// naviBar.js
'use strict';

const News = {
    id: 0,
    title: '最新消息',
    link: './news.html',
    details: [
        {
            title: '',
            lead: '',
        }
    ]
};

const About = {
    id: 1,
    title: '關於中心',
    link: './about.html',
    details: [
        {
            title: '環安衛政策',
            lead: '',
        },
        {
            title: '歷史沿革',
            lead: '',
        },
        {
            title: '組織編制',
            lead: '',
        },
        {
            title: '歷任中心主任',
            lead: '',
        }
    ]
};

const Team = {
    id: 2,
    title: '業務職掌',
    link: './team.html',
    details: [
        {
            title: '中心',
            lead: '',
        },
        {
            title: '環境保護組',
            lead: '',
        },
        {
            title: '安全衛生組',
            lead: '',
        }
    ]
};

const Trash = {
    id: 3,
    title: '實驗廢棄物管理',
    link: './trash.html',
    details: [
        {
            title: '',
            lead: '',
        }
    ]
};

const Hygiene = {
    id: 4,
    title: '實驗室安全衛生管理',
    link: './hygiene.html',
    details: [
        {
            title: '',
            lead: '',
        }
    ]
};

const Animal = {
    id: 5,
    title: '實驗動物管理',
    link: './animal.html',
    details: [
        {
            title: '設置',
            lead: '',
        },
        {
            title: '相關表單',
            lead: '',
        },
        {
            title: '其它',
            lead: '',
        }
    ]
};

const Biosecurity = {
    id: 6,
    title: '生物安全管理',
    link: './biosecurity.html',
    details: [
        {
            title: '設置',
            lead: '',
        },
        {
            title: '相關表單',
            lead: `
                申請審查所需備妥文件<br>
                (1) 生物實驗安全委員會基因重組實驗申請書<br>
                (2) 國科會計畫申請書第一頁<br>
                (3) 研究計畫中英文摘要<br>
                (4) 基因重組相關之研究方法與材`,
        },
        {
            title: '其它',
            lead: '',
        }
    ]
};

const Radioprotection = {
    id: 7,
    title: '輻射防護管理',
    link: './radioprotection.html',
    details: [
        {
            title: '設置',
            lead: '',
        },
        {
            title: '輻射防護計畫書',
            lead: '',
        },
        {
            title: '相關表單',
            lead: '',
        }
    ]
};

const LaborHealth = {
    id: 8,
    title: '勞工管理',
    link: './labor-health.html',
    details: [
        {
            title: '健康管理',
            lead: '',
        },
        {
            title: '四大計畫',
            lead: '',
        },
    ]
};

const Train = {
    id: 9,
    title: '教育訓練',
    link: './train.html',
    details: [
        {
            title: '108年',
            lead: '',
        },
        {
            title: '107年',
            lead: '',
        }
    ]
};

const StrayAnimal = {
    id: 10,
    title: '校園流浪犬',
    link: './stray-animal.html',
    details: [
        {
            title: '政策',
            lead: '',
        },
        {
            title: '活動',
            lead: '',
        },
        {
            title: '相關表單',
            lead: '',
        }
    ]
};

const DrinkingFountain = {
    id: 11,
    title: '飲水機管理',
    link: './drinking-fountain.html',
    details: [
        {
            title: '108年',
            lead: '',
        },
        {
            title: '107年',
            lead: '',
        }
    ]
};

const Download = {
    id: 12,
    title: '表單下載',
    link: './download.html',
    details: [
        {
            title: '',
            lead: '',
        }
    ]
};

const NaviBar = [
    News,
    About,
    Team,
    Trash,
    Hygiene,
    Animal,
    Biosecurity,
    Radioprotection,
    LaborHealth,
    Train,
    StrayAnimal,
    DrinkingFountain,
    Download
];

export {
    NaviBar
};
