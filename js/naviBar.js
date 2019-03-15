// naviBar.js
'use strict';

import { tplNews } from './template/News.js';
import { tplAbout } from './template/About.js';
import { tplTeam } from './template/Team.js';
import { tplTrash } from './template/Trash.js';
import { tplHygiene } from './template/Hygiene.js';
import { tplAnimal } from './template/Animal.js';
import { tplBiosecurity } from './template/Biosecurity.js';
import { tplRadioprotection } from './template/Radioprotection.js';
import { tplLaborHealth } from './template/LaborHealth.js';
import { tplTrain } from './template/Train.js';
import { tplStrayAnimal } from './template/StrayAnimal.js';
import { tplDrinkingFountain } from './template/DrinkingFountain.js';
import { tplDownload } from './template/Download.js';

const News = {
    id: 0,
    title: '最新消息',
    link: './index.html',
    details: [
        {
            title: '',
            data: [],
            get template() { return tplNews[0](this.data); }
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
            data: [],
            get template() { return tplAbout[0](this.data); }
        },
        {
            title: '歷史沿革',
            data: [],
            get template() { return tplAbout[1](this.data); }
        },
        {
            title: '組織編制',
            data: [],
            get template() { return tplAbout[2](this.data); }
        },
        {
            title: '歷任中心主任',
            data: [],
            get template() { return tplAbout[3](this.data); }
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
            data: [],
            get template() { return tplTeam[0](this.data); }
        },
        {
            title: '環境保護組',
            data: [],
            get template() { return tplTeam[1](this.data); }
        },
        {
            title: '安全衛生組',
            data: [],
            get template() { return tplTeam[2](this.data); }
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
            data: [],
            get template() { return tplTrash[0](this.data); }
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
            data: [],
            get template() { return tplHygiene[0](this.data); }
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
            data: [],
            get template() { return tplAnimal[0](this.data); }
        },
        {
            title: '相關表單',
            data: [],
            get template() { return tplAnimal[1](this.data); }
        },
        {
            title: '其它',
            data: [],
            get template() { return tplAnimal[2](this.data); }
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
            data: [],
            get template() { return tplBiosecurity[0](this.data); }
        },
        {
            title: '相關表單',
            data: [],
            get template() { return tplBiosecurity[1](this.data); }
        },
        {
            title: '其它',
            data: [],
            get template() { return tplBiosecurity[2](this.data); }
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
            data: [],
            get template() { return tplRadioprotection[0](this.data); }
        },
        {
            title: '輻射防護計畫書',
            data: [],
            get template() { return tplRadioprotection[1](this.data); }
        },
        {
            title: '相關表單',
            data: [],
            get template() { return tplRadioprotection[2](this.data); }
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
            data: [],
            get template() { return tplLaborHealth[0](this.data); }
        },
        {
            title: '生安第二等級健檢',
            data: [],
            get template() { return tplLaborHealth[1](this.data); }
        },
        {
            title: '一般勞工健檢',
            data: [],
            get template() { return tplLaborHealth[2](this.data); }
        },
        {
            title: '輻射防護健檢',
            data: [],
            get template() { return tplLaborHealth[3](this.data); }
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
            data: [],
            get template() { return tplTrain[0](this.data); }
        },
        {
            title: '107年',
            data: [],
            get template() { return tplTrain[1](this.data); }
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
            data: [],
            get template() { return tplStrayAnimal[0](this.data); }
        },
        {
            title: '活動',
            data: [],
            get template() { return tplStrayAnimal[1](this.data); }
        },
        {
            title: '相關表單',
            data: [],
            get template() { return tplStrayAnimal[2](this.data); }
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
            data: [],
            get template() { return tplDrinkingFountain[0](this.data); }
        },
        {
            title: '107年',
            data: [],
            get template() { return tplDrinkingFountain[1](this.data); }
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
            data: [],
            get template() { return tplDownload[0](this.data); }
        }
    ]
};

const naviBar = [
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
    naviBar
};
