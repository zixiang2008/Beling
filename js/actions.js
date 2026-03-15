/* ============================================
   行动建议模块 - actions.js (i18n)
   v2.2.0: 选择行动后进入气球动画+倒计时
   ============================================ */
const ActionsModule = (() => {
    function getData() { return window.ActionsLang?.[I18n.getLang()] || window.ActionsLang?.zh; }
    let balloonTimer = null;

    function init() { render(); }

    function render() {
        const container = document.getElementById('actions-container');
        if (!container) return;
        const data = getData();
        if (!data) return;
        if (balloonTimer) { clearInterval(balloonTimer); balloonTimer = null; }

        container.innerHTML = `
            <div class="actions-intro">
                <h3>${data.title}</h3>
                <p>${data.intro}</p>
            </div>
            <div class="actions-list">
                ${data.actions.map((a, i) => `
                    <div class="action-card" data-idx="${i}">
                        <div class="action-header">
                            <span class="action-icon">${a.icon}</span>
                            <span class="action-title">${a.title}</span>
                            <span class="action-time">⏱ ${a.time}</span>
                            <span class="action-expand">▼</span>
                        </div>
                        <div class="action-detail">
                            <p><strong>${I18n.getLang() === 'en' ? 'Why' : I18n.getLang() === 'ja' ? 'なぜ' : I18n.getLang() === 'th' ? 'ทำไม' : '为什么'}：</strong>${a.why}</p>
                            <p><strong>${I18n.getLang() === 'en' ? 'How' : I18n.getLang() === 'ja' ? 'やり方' : I18n.getLang() === 'th' ? 'วิธี' : '怎么做'}：</strong>${a.how}</p>
                            <button class="action-start-btn" data-idx="${i}">${data.startBtn || '开始练习'}</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        // Toggle expand
        container.querySelectorAll('.action-card').forEach(card => {
            card.querySelector('.action-header').addEventListener('click', () => {
                card.classList.toggle('expanded');
            });
        });

        // Start balloon
        container.querySelectorAll('.action-start-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const idx = parseInt(btn.dataset.idx);
                const action = data.actions[idx];
                const seconds = parseTimeToSeconds(action.time);
                startBalloon(container, action, seconds, data);
            });
        });
    }

    function parseTimeToSeconds(timeStr) {
        const match = timeStr.match(/(\d+)/);
        return match ? parseInt(match[1]) * 60 : 300;
    }

    function startBalloon(container, action, totalSecs, data) {
        let remaining = totalSecs;

        container.innerHTML = `
            <div class="balloon-mode">
                <div class="balloon-practice-name">${action.icon} ${action.title}</div>
                <div class="balloon-wrapper">
                    <div class="balloon-circle" id="balloon-circle">
                        <div class="balloon-timer" id="balloon-timer">${formatTime(remaining)}</div>
                    </div>
                </div>
                <p class="balloon-hint">${action.how || ''}</p>
                <button class="med-ctrl-btn balloon-stop-btn" id="balloon-stop">${data.stopBtn || '结束'}</button>
            </div>
        `;

        balloonTimer = setInterval(() => {
            remaining--;
            const el = document.getElementById('balloon-timer');
            if (el) el.textContent = formatTime(remaining);
            if (remaining <= 0) {
                clearInterval(balloonTimer);
                balloonTimer = null;
                showComplete(container, action, data);
            }
        }, 1000);

        document.getElementById('balloon-stop')?.addEventListener('click', () => {
            if (balloonTimer) { clearInterval(balloonTimer); balloonTimer = null; }
            showComplete(container, action, data);
        });
    }

    function showComplete(container, action, data) {
        container.innerHTML = `
            <div class="balloon-complete">
                <div class="complete-icon">🎉</div>
                <h3>${data.completeMsg || '活动完成！'}</h3>
                <p>${action.icon} ${action.title}</p>
                <p class="balloon-complete-sub">${data.completeSub || '很好，你用行动回到了当下'}</p>
                <button class="meditation-start-btn" id="balloon-return">${data.returnBtn || '返回'}</button>
            </div>
        `;
        document.getElementById('balloon-return')?.addEventListener('click', () => init());
    }

    function formatTime(secs) {
        const m = Math.floor(secs / 60).toString().padStart(2, '0');
        const s = (secs % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    }

    return { init };
})();
