// naviBar.js
'use strict';

const News = {
    id: 0,
    title: '最新消息',
    titleEng: 'Latest news',
    link: './news.html',
    details: [
        {
            title: '',
            titleEng: '',
            lead: '',
        }
    ]
};

const About = {
    id: 1,
    title: '關於中心',
    titleEng: 'About EHS center',
    link: './about.html',
    details: [
        {
            title: '環安衛政策',
            titleEng: '',
            lead: '',
        },
        {
            title: '歷史沿革',
            titleEng: '',
            lead: '',
        },
        {
            title: '組織編制',
            titleEng: '',
            lead: '',
        },
        {
            title: '歷任中心主任',
            titleEng: '',
            lead: '',
        }
    ]
};

const Team = {
    id: 2,
    title: '業務職掌',
    titleEng: 'EHS divisions',
    link: './team.html',
    details: [
        {
            title: '中心',
            titleEng: '',
            lead: '',
        },
        {
            title: '環境保護組',
            titleEng: '',
            lead: '',
        },
        {
            title: '安全衛生組',
            titleEng: '',
            lead: '',
        }
    ]
};

const Trash = {
    id: 3,
    title: '實驗廢棄物管理',
    titleEng: 'Laboratory waste management',
    link: './trash.html',
    details: [
        {
            title: '',
            titleEng: '',
            lead: '',
        }
    ]
};

const Hygiene = {
    id: 4,
    title: '實驗室安全衛生管理',
    titleEng: 'Laboratory safety & health management',
    link: './hygiene.html',
    details: [
        {
            title: '',
            titleEng: '',
            lead: '',
        }
    ]
};

const Animal = {
    id: 5,
    title: '實驗動物管理',
    titleEng: 'Laboratory animal management',
    link: './animal.html',
    details: [
        {
            title: '設置',
            titleEng: '',
            lead: '',
        },
        {
            title: '相關表單',
            titleEng: '',
            lead: '',
        },
        {
            title: '其它',
            titleEng: '',
            lead: '',
        }
    ]
};

const Biosecurity = {
    id: 6,
    title: '生物安全管理',
    titleEng: 'Biosafety management',
    link: './biosecurity.html',
    details: [
        {
            title: '設置',
            titleEng: '',
            lead: '',
        },
        {
            title: '相關表單',
            titleEng: '',
            lead: `
                申請審查所需備妥文件<br>
                (1) 生物實驗安全委員會基因重組實驗申請書<br>
                (2) 國科會計畫申請書第一頁<br>
                (3) 研究計畫中英文摘要<br>
                (4) 基因重組相關之研究方法與材`,
        },
        {
            title: '其它',
            titleEng: '',
            lead: '',
        }
    ]
};

const Radioprotection = {
    id: 7,
    title: '輻射防護管理',
    titleEng: 'Radiation protection & management',
    link: './radioprotection.html',
    details: [
        {
            title: '設置',
            titleEng: '',
            lead: '',
        },
        {
            title: '輻射防護計畫書',
            titleEng: '',
            lead: '',
        },
        {
            title: '相關表單',
            titleEng: '',
            lead: '',
        }
    ]
};

const LaborHealth = {
    id: 8,
    title: '勞工管理',
    titleEng: 'Labor management',
    link: './labor-health.html',
    details: [
        {
            title: '健康管理',
            titleEng: 'Healthy Management',
            lead: '',
        },
        {
            title: '四大計畫',
            titleEng: 'Four-major programme',
            lead: '',
        },
    ]
};

const Train = {
    id: 9,
    title: '教育訓練',
    titleEng: 'Educational training',
    link: './train.html',
    details: [
        {
            title: '108年',
            titleEng: '',
            lead: '',
        },
        {
            title: '107年',
            titleEng: '',
            lead: '',
        }
    ]
};

const StrayAnimal = {
    id: 10,
    title: '校園流浪犬',
    titleEng: 'Stray dogs on campus',
    link: './stray-animal.html',
    details: [
        {
            title: '政策',
            titleEng: '',
            lead: '',
        },
        {
            title: '活動',
            titleEng: '',
            lead: '',
        },
        {
            title: '相關表單',
            titleEng: '',
            lead: '',
        }
    ]
};

const DrinkingFountain = {
    id: 11,
    title: '飲水機管理',
    titleEng: 'Drinking fountain management',
    link: './drinking-fountain.html',
    details: [
        {
            title: '108年',
            titleEng: '',
            lead: '',
        },
        {
            title: '107年',
            titleEng: '',
            lead: '',
        }
    ]
};

const Download = {
    id: 12,
    title: '表單下載',
    titleEng: 'Form download',
    link: './download.html',
    details: [
        {
            title: '',
            titleEng: '',
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
