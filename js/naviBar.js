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
            template: tplNews[0]
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
            template: tplAbout[0]
        },
        {
            title: '歷史沿革',
            template: tplAbout[1]
        },
        {
            title: '組織編制',
            template: tplAbout[2]
        },
        {
            title: '歷任中心主任',
            template: tplAbout[3]
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
            template: tplTeam[0]
        },
        {
            title: '環境保護組',
            template: tplTeam[1]
        },
        {
            title: '安全衛生組',
            template: tplTeam[2]
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
            template: tplTrash[0]
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
            template: tplHygiene[0]
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
            template: tplAnimal[0]
        },
        {
            title: '相關表單',
            template: tplAnimal[1]
        },
        {
            title: '其它',
            template: tplAnimal[2]
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
            template: tplBiosecurity[0]
        },
        {
            title: '相關表單',
            template: tplBiosecurity[1]
        },
        {
            title: '其它',
            template: tplBiosecurity[2]
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
            template: tplRadioprotection[0]
        },
        {
            title: '輻射防護計畫書',
            template: tplRadioprotection[1]
        },
        {
            title: '相關表單',
            template: tplRadioprotection[2]
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
            template: tplLaborHealth[0]
        },
        {
            title: '生安第二等級健檢',
            template: tplLaborHealth[1]
        },
        {
            title: '一般勞工健檢',
            template: tplLaborHealth[2]
        },
        {
            title: '輻射防護健檢',
            template: tplLaborHealth[3]
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
            template: tplTrain[0]
        },
        {
            title: '107年',
            template: tplTrain[1]
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
            template: tplStrayAnimal[0]
        },
        {
            title: '活動',
            template: tplStrayAnimal[1]
        },
        {
            title: '相關表單',
            template: tplStrayAnimal[2]
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
            template: tplDrinkingFountain[0]
        },
        {
            title: '107年',
            template: tplDrinkingFountain[1]
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
            template: tplDownload[0]
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
