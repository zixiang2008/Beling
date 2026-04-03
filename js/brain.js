/* ============================================
   感受模式模块 - brain.js (i18n)
   v2.2.0: 选择练习后进入气球动画+倒计时
   ============================================ */
const BrainModule = (() => {
    function getData() { return window.BrainLang?.[I18n.getLang()] || window.BrainLang?.zh; }
    let balloonTimer = null;

    function init() { render(); }

    function render() {
        const container = document.getElementById('brain-container');
        if (!container) return;
        const data = getData();
        if (!data) return;
        if (balloonTimer) { clearInterval(balloonTimer); balloonTimer = null; }

        container.innerHTML = `
            <div class="brain-intro">
                <h3>${data.title}</h3>
                <p>${data.intro}</p>
            </div>
            <div class="brain-comparison">
                <div class="brain-side left">
                    <div class="brain-side-icon">🧠</div>
                    <h4>${data.leftBrain}</h4>
                    <p>${data.leftDesc}</p>
                </div>
                <div class="brain-arrow">→</div>
                <div class="brain-side right">
                    <div class="brain-side-icon">💗</div>
                    <h4>${data.rightBrain}</h4>
                    <p>${data.rightDesc}</p>
                </div>
            </div>
            <h4 class="practices-title">${data.practiceTitle}</h4>
            <div class="practices-list">
                ${data.practices.map((p, i) => `
                    <div class="practice-card" data-idx="${i}">
                        <div class="practice-icon">${p.icon}</div>
                        <div class="practice-info">
                            <div class="practice-title">${p.title}</div>
                            <div class="practice-desc">${p.desc}</div>
                            <div class="practice-time">⏱ ${p.time}</div>
                        </div>
                        <button class="practice-start-btn" data-idx="${i}">${data.startBtn || '开始'}</button>
                    </div>
                `).join('')}
            </div>
        `;

        // 点击开始按钮进入气球模式
        container.querySelectorAll('.practice-start-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const idx = parseInt(btn.dataset.idx);
                const practice = data.practices[idx];
                const seconds = parseTimeToSeconds(practice.time);
                startBalloon(container, practice, seconds, data);
            });
        });
    }

    function parseTimeToSeconds(timeStr) {
        const match = timeStr.match(/(\d+)/);
        return match ? parseInt(match[1]) * 60 : 180;
    }

    function startBalloon(container, practice, totalSecs, data) {
        let remaining = totalSecs;

        container.innerHTML = `
            <div class="balloon-mode">
                <div class="balloon-practice-name">${practice.icon} ${practice.title}</div>
                <div class="balloon-wrapper">
                    <div class="balloon-circle" id="balloon-circle">
                        <div class="balloon-timer" id="balloon-timer">${formatTime(remaining)}</div>
                    </div>
                </div>
                <p class="balloon-hint">${practice.desc}</p>
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
                showComplete(container, practice, data);
            }
        }, 1000);

        document.getElementById('balloon-stop')?.addEventListener('click', () => {
            if (balloonTimer) { clearInterval(balloonTimer); balloonTimer = null; }
            showComplete(container, practice, data);
        });
    }

    function showComplete(container, practice, data) {
        container.innerHTML = `
            <div class="balloon-complete">
                <div class="complete-icon">🎉</div>
                <h3>${data.completeMsg || '练习完成！'}</h3>
                <p>${practice.icon} ${practice.title}</p>
                <p class="balloon-complete-sub">${data.completeSub || '很好，你刚刚给了自己一段觉察时光'}</p>
                <div class="checkout-section">
                    <p class="checkout-question">${data.checkoutQ || '✨ 与练习前相比，你现在的感受如何？'}</p>
                    <textarea class="checkout-textarea" id="checkout-textarea" placeholder="${data.checkoutPlaceholder || '写下你此刻的感受……'}"></textarea>
                    <button class="checkout-save-btn" id="checkout-save">${data.checkoutSave || '💾 保存反思'}</button>
                </div>
                <button class="meditation-start-btn" id="balloon-return">${data.returnBtn || '返回'}</button>
            </div>
        `;
        document.getElementById('balloon-return')?.addEventListener('click', () => init());
        document.getElementById('checkout-save')?.addEventListener('click', () => {
            const text = document.getElementById('checkout-textarea')?.value?.trim();
            if (!text) return;
            const reflections = JSON.parse(localStorage.getItem('sa_brain_reflections') || '[]');
            reflections.unshift({ practice: practice.title, text, date: new Date().toISOString() });
            localStorage.setItem('sa_brain_reflections', JSON.stringify(reflections));
            const btn = document.getElementById('checkout-save');
            if (btn) { btn.textContent = data.checkoutSaved || '已保存 ✓'; btn.classList.add('saved'); }
        });
    }

    function formatTime(secs) {
        const m = Math.floor(secs / 60).toString().padStart(2, '0');
        const s = (secs % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    }

    return { init };
})();
