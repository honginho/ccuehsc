// naviBar.js
'use strict';

import { TplNews } from './template/News.js';
import { TplAbout } from './template/About.js';
import { TplTeam } from './template/Team.js';
import { TplTrash } from './template/Trash.js';
import { TplHygiene } from './template/Hygiene.js';
import { TplAnimal } from './template/Animal.js';
import { TplBiosecurity } from './template/Biosecurity.js';
import { TplRadioprotection } from './template/Radioprotection.js';
import { TplLaborHealth } from './template/LaborHealth.js';
import { TplTrain } from './template/Train.js';
import { TplStrayAnimal } from './template/StrayAnimal.js';
import { TplDrinkingFountain } from './template/DrinkingFountain.js';
import { TplDownload } from './template/Download.js';

const News = {
    id: 0,
    title: '最新消息',
    link: './news.html',
    details: [
        {
            title: '',
            lead: '',
            data: [
                {
                    title: '學校學習與職業安全衛生政策目標',
                    date: '2019 / 2 / 23',
                    content: '教育部「學校學習與職業安全衛生政策目標」公告',
                    pdf: '20190315_00.pdf'
                },
                {
                    title: '學校學習與職業安全衛生政策目標',
                    date: '2019 / 2 / 23',
                    content: '教育部「學校學習與職業安全衛生政策目標」公告',
                    pdf: '20190315_00.pdf'
                }
            ],
            // get template() { return TplNews[0](this.lead, this.data); }
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
            // data: [],
            // get template() { return TplAbout[0](this.lead, this.data); }
        },
        {
            title: '歷史沿革',
            lead: '',
            // data: [],
            // get template() { return TplAbout[1](this.lead, this.data); }
        },
        {
            title: '組織編制',
            lead: '',
            // data: [],
            // get template() { return TplAbout[2](this.lead, this.data); }
        },
        {
            title: '歷任中心主任',
            lead: '',
            // data: [],
            // get template() { return TplAbout[3](this.lead, this.data); }
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
            // data: [],
            // get template() { return TplTeam[0](this.lead, this.data); }
        },
        {
            title: '環境保護組',
            lead: '',
            // data: [],
            // get template() { return TplTeam[1](this.lead, this.data); }
        },
        {
            title: '安全衛生組',
            lead: '',
            // data: [],
            // get template() { return TplTeam[2](this.lead, this.data); }
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
            // data: [],
            // get template() { return TplTrash[0](this.lead, this.data); }
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
            // data: [],
            // get template() { return TplHygiene[0](this.lead, this.data); }
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
            // data: [
            //     {
            //         title: '實驗動物照護及使用委員會設置及管理要點',
            //         date: '2019 / 3 / 15',
            //         doc: '20190315_00.doc'
            //     }
            // ],
            // get template() { return TplAnimal[0](this.lead, this.data); }
            // data: '',
            // template: ''
        },
        {
            title: '相關表單',
            lead: '',
            // data: [
            //     {
            //         title: '實驗動物照護及使用申請表填寫說明',
            //         date: '2019 / 3 / 15',
            //         doc: '20190315_08.doc'
            //     },
            //     {
            //         title: '實驗動物照護及使用申請表',
            //         date: '2019 / 3 / 15',
            //         doc: '20190315_07.doc'
            //     },
            //     {
            //         title: '實驗動物照護及使用申請表修正申請單',
            //         date: '2019 / 3 / 15',
            //         doc: '20190315_06.doc'
            //     },
            //     {
            //         title: '實驗動物照護及使用委員會審查同意書',
            //         date: '2019 / 3 / 15',
            //         doc: '20190315_05.doc'
            //     },
            //     {
            //         title: '實驗動物照護及使用申請表送件證明',
            //         date: '2019 / 3 / 15',
            //         doc: '20190315_04.doc'
            //     },
            //     {
            //         title: '實驗動物照護及使用申請檢查表',
            //         date: '2019 / 3 / 15',
            //         doc: '20190315_03.doc'
            //     },
            //     {
            //         title: '動物實驗人道管理替代、減量及精緻化(3R)說明',
            //         date: '2019 / 3 / 15',
            //         doc: '20190315_02.doc'
            //     },
            //     {
            //         title: '動物實驗實地查核PAM查核表',
            //         date: '2019 / 3 / 15',
            //         doc: '20190315_01.doc'
            //     }
            // ],
            // get template() { return TplAnimal[1](this.lead, this.data); }
            // data: '',
            // template: ''
        },
        {
            title: '其它',
            lead: '',
            // data: [
            //     {
            //         title: '104年度動物科學應用機構實地查核評比結果',
            //         date: '2019 / 3 / 15',
            //         pdf: '20190315_10.pdf'
            //     },
            //     {
            //         title: '98年動物科學應用機構查核輔導結果',
            //         date: '2019 / 3 / 15',
            //         pdf: '20190315_09.pdf'
            //     }
            // ],
            // get template() { return TplAnimal[2](this.lead, this.data); }
            // data: '',
            // template: ''
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
            // data: [
                // {
                //     title: '國立中正大學生物實驗安全委員會組織要點',
                //     date: '2019 / 3 / 15',
                //     pdf: '20190315_11.pdf'
                // }
            // ],
            // get template() { return TplBiosecurity[0](this.lead, this.data); }
        },
        {
            title: '相關表單',
            lead: `
                申請審查所需備妥文件<br>
                (1)生物實驗安全委員會基因重組實驗申請書<br>
                (2)國科會計畫申請書第一頁<br>
                (3)研究計畫中英文摘要<br>
                (4)基因重組相關之研究方法與材`,
            // data: [
                // {
                //     title: '生物實驗安全委員會基因重組實驗申請書',
                //     date: '2019 / 3 / 15',
                //     doc: '20190315_13.doc'
                // },
                // {
                //     title: '生物實驗安全委員會第二級以上感染性生物材料使用申請單',
                //     date: '2019 / 3 / 15',
                //     docx: '20190315_12.docx'
                // }
            // ],
            // get template() { return TplBiosecurity[1](this.lead, this.data); }
        },
        {
            title: '其它',
            lead: '',
            // data: [],
            // get template() { return TplBiosecurity[2](this.lead, this.data); }
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
            // data: [],
            // get template() { return TplRadioprotection[0](this.lead, this.data); }
        },
        {
            title: '輻射防護計畫書',
            lead: '',
            // data: [],
            // get template() { return TplRadioprotection[1](this.lead, this.data); }
        },
        {
            title: '相關表單',
            lead: '',
            // data: [],
            // get template() { return TplRadioprotection[2](this.lead, this.data); }
        }
    ]
};

const LaborHealth = {
    id: 8,
    title: '勞工健康管理',
    link: './labor-health.html',
    details: [
        {
            title: '特殊化學品健檢',
            lead: '',
            // data: [],
            // get template() { return TplLaborHealth[0](this.lead, this.data); }
        },
        {
            title: '生安第二等級健檢',
            lead: '',
            // data: [],
            // get template() { return TplLaborHealth[1](this.lead, this.data); }
        },
        {
            title: '一般勞工健檢',
            lead: '',
            // data: [],
            // get template() { return TplLaborHealth[2](this.lead, this.data); }
        },
        {
            title: '輻射防護健檢',
            lead: '',
            // data: [],
            // get template() { return TplLaborHealth[3](this.lead, this.data); }
        }
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
            // data: [],
            // get template() { return TplTrain[0](this.lead, this.data); }
        },
        {
            title: '107年',
            lead: '',
            // data: [],
            // get template() { return TplTrain[1](this.lead, this.data); }
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
            // data: [],
            // get template() { return TplStrayAnimal[0](this.lead, this.data); }
        },
        {
            title: '活動',
            lead: '',
            // data: [],
            // get template() { return TplStrayAnimal[1](this.lead, this.data); }
        },
        {
            title: '相關表單',
            lead: '',
            // data: [],
            // get template() { return TplStrayAnimal[2](this.lead, this.data); }
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
            // data: [],
            // get template() { return TplDrinkingFountain[0](this.lead, this.data); }
        },
        {
            title: '107年',
            lead: '',
            // data: [
                // {
                //     title: '107飲水機第四季報告1',
                //     date: '2019 / 2 / 27',
                //     pdf: '20190227_00.pdf'
                // }
            // ],
            // get template() { return TplDrinkingFountain[1](this.lead, this.data); }
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
            // data: [],
            // get template() { return TplDownload[0](this.lead, this.data); }
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
