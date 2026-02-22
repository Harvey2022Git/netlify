const translations = {
    zh: {
        nav: {
            home: '首页',
            about: '关于我',
            projects: '项目',
            blog: '博客',
            contact: '联系',
            contactMe: '联系我'
        },
        hero: {
            greeting: 'Hi, 我是',
            name: 'Harvey',
            subtitle: '数据科学家 | 供应链专家 | 机械工程背景',
            tag1: '需求预测',
            tag2: '库存优化',
            tag3: '智能诊断',
            viewProjects: '查看项目',
            learnMore: '了解更多',
            cardTitle: 'SKU 智能诊断系统',
            cardSubtitle: '实时库存健康评估',
            health: '健康度'
        },
        stats: {
            stat1Value: '10%↑',
            stat1Label: '需求预测准确率对比Baseline提升',
            stat2Value: '500+h',
            stat2Label: '低代码平台每人年均节省工时',
            stat3Value: '显著↓',
            stat3Label: '库存率与缺货率优化'
        },
        demo: {
            title: 'SKU 智能诊断系统演示',
            subtitle: '实时评估库存健康状态，辅助决策',
            salesLabel: '月销量:',
            daysLabel: '库存周转天数:',
            resultHealthy: '诊断：健康运行',
            resultHealthyDesc: '当前库存水平与周转率处于目标区间。',
            resultSlow: '诊断：滞销风险',
            resultSlowDesc: '库存天数过高且销量低迷，建议发起清理策略。',
            resultShortage: '诊断：缺货预警',
            resultShortageDesc: '销量增速快，库存即将耗尽，请立即补货。'
        },
        skills: {
            title: '专业技能',
            subtitle: '跨领域技术栈，数据驱动决策',
            category1: '数据科学栈',
            category2: '工程与自动化'
        },
        blog: {
            title: '技术博客',
            subtitle: '分享供应链优化与数据科学实践',
            post1Date: '2026年2月',
            post1Title: '需求预测模型实战',
            post1Excerpt: '如何使用LightGBM构建高精度的需求预测模型...',
            post2Date: '2026年1月',
            post2Title: '库存优化策略',
            post2Excerpt: '从安全库存到动态补货，库存管理的核心方法...',
            post3Date: '2025年12月',
            post3Title: '低代码平台实践',
            post3Excerpt: '如何搭建企业级低代码平台提升团队效率...'
        },
        footer: {
            brand: '数据科学家 | 供应链专家',
            brandDesc: '专注于数据驱动的供应链优化解决方案',
            navTitle: '导航',
            expertiseTitle: '专业领域',
            expertise1: '需求预测',
            expertise2: '库存优化',
            expertise3: '智能诊断',
            expertise4: '数据可视化',
            contactTitle: '联系',
            copyright: '© 2026 Harvey. All rights reserved.'
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            blog: 'Blog',
            contact: 'Contact',
            contactMe: 'Contact Me'
        },
        hero: {
            greeting: 'Hi, I\'m',
            name: 'Harvey',
            subtitle: 'Data Scientist | Supply Chain Expert | Mechanical Engineering',
            tag1: 'Demand Forecasting',
            tag2: 'Inventory Optimization',
            tag3: 'Intelligent Diagnosis',
            viewProjects: 'View Projects',
            learnMore: 'Learn More',
            cardTitle: 'SKU Intelligent Diagnosis System',
            cardSubtitle: 'Real-time Inventory Health Assessment',
            health: 'Health'
        },
        stats: {
            stat1Value: '10%↑',
            stat1Label: 'Demand Forecasting Accuracy Improvement vs Baseline',
            stat2Value: '500+h',
            stat2Label: 'Annual Hours Saved per Person via Low-code Platform',
            stat3Value: 'Significant↓',
            stat3Label: 'Inventory & Stockout Rate Optimization'
        },
        demo: {
            title: 'SKU Intelligent Diagnosis System Demo',
            subtitle: 'Real-time inventory health assessment for decision support',
            salesLabel: 'Monthly Sales:',
            daysLabel: 'Inventory Turnover Days:',
            resultHealthy: 'Diagnosis: Healthy Operation',
            resultHealthyDesc: 'Current inventory level and turnover rate are within target range.',
            resultSlow: 'Diagnosis: Slow-moving Risk',
            resultSlowDesc: 'High inventory days with low sales. Recommend clearance strategy.',
            resultShortage: 'Diagnosis: Stockout Warning',
            resultShortageDesc: 'Fast sales growth, inventory running low. Replenish immediately.'
        },
        skills: {
            title: 'Professional Skills',
            subtitle: 'Cross-domain tech stack, data-driven decision making',
            category1: 'Data Science Stack',
            category2: 'Engineering & Automation'
        },
        blog: {
            title: 'Tech Blog',
            subtitle: 'Sharing supply chain optimization and data science practices',
            post1Date: 'Feb 2026',
            post1Title: 'Demand Forecasting Model in Practice',
            post1Excerpt: 'How to build high-accuracy demand forecasting models with LightGBM...',
            post2Date: 'Jan 2026',
            post2Title: 'Inventory Optimization Strategies',
            post2Excerpt: 'From safety stock to dynamic replenishment, core methods for inventory management...',
            post3Date: 'Dec 2025',
            post3Title: 'Low-code Platform Practice',
            post3Excerpt: 'How to build enterprise-level low-code platforms to boost team efficiency...'
        },
        footer: {
            brand: 'Data Scientist | Supply Chain Expert',
            brandDesc: 'Focused on data-driven supply chain optimization solutions',
            navTitle: 'Navigation',
            expertiseTitle: 'Expertise',
            expertise1: 'Demand Forecasting',
            expertise2: 'Inventory Optimization',
            expertise3: 'Intelligent Diagnosis',
            expertise4: 'Data Visualization',
            contactTitle: 'Contact',
            copyright: '© 2026 Harvey. All rights reserved.'
        }
    }
};

function getTranslation(key) {
    const keys = key.split('.');
    let value = translations[currentLang];
    for (const k of keys) {
        value = value[k];
    }
    return value;
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    updatePageContent();
    updateLangButton();
}

function updateLangButton() {
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        langBtn.textContent = currentLang === 'zh' ? 'EN' : '中文';
    }
}

function updatePageContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = getTranslation(key);
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = getTranslation(key);
    });
    
    updateDemoResult();
    
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
}

function updateDemoResult() {
    const diagResult = document.getElementById('diagResult');
    const salesInput = document.getElementById('sales');
    const daysInput = document.getElementById('days');
    
    if (!diagResult || !salesInput || !daysInput) return;
    
    const sales = parseInt(salesInput.value);
    const days = parseInt(daysInput.value);
    
    if (days > 60 && sales < 200) {
        diagResult.className = 'demo-result danger';
        diagResult.innerHTML = `<div class="demo-result-title">${getTranslation('demo.resultSlow')}</div><div class="demo-result-desc">${getTranslation('demo.resultSlowDesc')}</div>`;
    } else if (days < 7 && sales > 800) {
        diagResult.className = 'demo-result warning';
        diagResult.innerHTML = `<div class="demo-result-title">${getTranslation('demo.resultShortage')}</div><div class="demo-result-desc">${getTranslation('demo.resultShortageDesc')}</div>`;
    } else {
        diagResult.className = 'demo-result success';
        diagResult.innerHTML = `<div class="demo-result-title">${getTranslation('demo.resultHealthy')}</div><div class="demo-result-desc">${getTranslation('demo.resultHealthyDesc')}</div>`;
    }
}
