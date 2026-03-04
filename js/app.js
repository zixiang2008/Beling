/* ============================================
   主应用逻辑 - app.js
   SPA路由 · 每日T语言 · 全局控制
   ============================================ */

(() => {
    // ---- 每日T语言库 ----
    const tLanguages = [
        '你不需要修复自己——你只需要看见自己。',
        '感受没有对错，它只是在告诉你一些事情。',
        '当你说"我觉得"的时候，试着换成"我感到"。',
        '"我注意到……"是觉察最有力的开场白。',
        '悲伤说明你曾深深在乎过。',
        '愤怒的背后，通常藏着受伤的边界。',
        '你可以同时感到害怕和勇敢。',
        '不评判自己的情绪，就是最大的慈悲。',
        '当你停下来深呼吸的那一刻，觉察就开始了。',
        '你的身体比你的头脑更诚实。',
        '放下"应该"，拥抱"此刻"。',
        '脆弱不是软弱，而是连接的入口。',
        '每一种情绪都有它存在的意义和智慧。',
        '在关系中，被听见比被理解更重要。',
        '"我不知道"也是一个有价值的答案。',
        '感受是流动的——如果你允许它来，它也会走。',
        '对自己温柔一些，就像你对最好的朋友那样。',
        '你不需要在每个场合都坚强。',
        '觉察的第一步：停下来，感受你的脚正踩着大地。',
        '真正的力量，是敢于面对自己的脆弱。',
        '没有人能"让"你生气——愤怒是你自己的反应。觉察它。',
        '今天你为自己做了一件好事了吗？',
        '呼吸，是连接身体和心灵最简单的桥梁。',
        '当头脑太吵时，试试移动身体。',
        '你的感受值得被听见，首先是被你自己听见。',
        '不是所有问题都需要立刻有答案。',
        '正念不是"不想"，而是"注意到你在想什么"。',
        '接纳不等于放弃，它是改变的第一步。',
        '当你对别人真诚，你同时也在对自己真诚。',
        '每一次冲突都是了解自己的机会。',
        '平静不需要被创造——它一直在噪音的底层。',
    ];

    // ---- 初始化 ----
    const pageModules = {
        emotions: EmotionsModule,
        questioning: QuestioningModule,
        recall: RecallModule,
        meditation: MeditationModule,
        brain: BrainModule,
        dialogue: DialogueModule,
        actions: ActionsModule,
        sharing: SharingModule,
    };

    const pageNames = {
        home: '觉察',
        emotions: '情绪罗盘',
        questioning: '深度发问',
        recall: '24h 回忆',
        meditation: '冥想空间',
        brain: '感受模式',
        dialogue: '觉察对话',
        actions: '行动建议',
        sharing: '分享句式',
    };

    let currentPage = 'home';

    // ---- Splash Screen ----
    window.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            document.getElementById('splash-screen').classList.add('hidden');
            document.getElementById('app').style.display = '';
            initApp();
        }, 2200);
    });

    function initApp() {
        setGreeting();
        setDailyT();
        bindNavigation();
        // Init all modules
        Object.values(pageModules).forEach(m => m.init());
    }

    // ---- Greeting ----
    function setGreeting() {
        const h = new Date().getHours();
        let greeting = '晚上好';
        if (h >= 5 && h < 12) greeting = '早上好';
        else if (h >= 12 && h < 14) greeting = '中午好';
        else if (h >= 14 && h < 18) greeting = '下午好';
        document.getElementById('home-greeting').textContent = greeting + '，今天你感觉如何？';
    }

    // ---- Daily T Language ----
    function setDailyT() {
        const today = new Date().toLocaleDateString('zh-CN');
        let saved = {};
        try { saved = JSON.parse(localStorage.getItem('sa_daily_t') || '{}'); } catch { }
        let text;
        if (saved.date === today && saved.text) {
            text = saved.text;
        } else {
            text = tLanguages[Math.floor(Math.random() * tLanguages.length)];
            localStorage.setItem('sa_daily_t', JSON.stringify({ date: today, text }));
        }
        document.getElementById('daily-t-text').textContent = text;

        // 刷新按钮
        document.getElementById('daily-t-refresh').addEventListener('click', () => {
            const newText = tLanguages[Math.floor(Math.random() * tLanguages.length)];
            document.getElementById('daily-t-text').textContent = newText;
            localStorage.setItem('sa_daily_t', JSON.stringify({ date: today, text: newText }));
        });
    }

    // ---- Navigation ----
    function bindNavigation() {
        // 底部导航
        document.querySelectorAll('.nav-item').forEach(btn => {
            btn.addEventListener('click', () => {
                const page = btn.dataset.page;
                if (page === 'more') {
                    toggleMoreMenu(true);
                } else {
                    navigateTo(page);
                }
            });
        });

        // 首页卡片导航
        document.querySelectorAll('.home-card').forEach(card => {
            card.addEventListener('click', () => {
                navigateTo(card.dataset.page);
            });
        });

        // 返回按钮
        document.getElementById('back-btn').addEventListener('click', () => {
            navigateTo('home');
        });

        // 更多菜单
        document.getElementById('more-menu-overlay').addEventListener('click', () => {
            toggleMoreMenu(false);
        });
        document.querySelectorAll('.more-menu-item').forEach(item => {
            item.addEventListener('click', () => {
                toggleMoreMenu(false);
                navigateTo(item.dataset.page);
            });
        });
    }

    function navigateTo(page) {
        if (page === currentPage) return;
        // 隐藏所有页面
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        // 显示目标页面
        const targetPage = document.getElementById('page-' + page);
        if (targetPage) targetPage.classList.add('active');

        // 更新底部导航
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        const navBtn = document.querySelector(`.nav-item[data-page="${page}"]`);
        if (navBtn) navBtn.classList.add('active');

        // 更新头部
        document.getElementById('header-title').textContent = pageNames[page] || '觉察';
        document.getElementById('back-btn').style.display = page === 'home' ? 'none' : '';

        // 重新渲染模块
        if (pageModules[page]) {
            pageModules[page].render?.();
        }

        currentPage = page;
        // 滚动到顶部
        document.querySelector('.page-container').scrollTop = 0;
        window.scrollTo(0, 0);
    }

    function toggleMoreMenu(show) {
        const menu = document.getElementById('more-menu');
        if (show) {
            menu.classList.add('open');
        } else {
            menu.classList.remove('open');
        }
    }
})();
