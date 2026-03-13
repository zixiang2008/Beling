/* ============================================
   24h回忆模块 - recall.js (i18n + auth)
   ============================================ */
const RecallModule = (() => {
    function getData() { return window.RecallLang?.[I18n.getLang()] || window.RecallLang?.zh; }

    function init() {
        if (Auth.isLoggedIn()) {
            render();
        } else {
            renderPreview();
        }
    }

    function renderPreview() {
        const container = document.getElementById('recall-container');
        if (!container) return;
        const data = getData();
        if (!data) return;
        const lang = I18n.getLang();
        const loginHint = { zh: '🔐 登录后记录你的 24 小时觉察之旅', en: '🔐 Log in to record your 24-hour awareness journey', ja: '🔐 ログインして24時間の気づきの旅を記録', th: '🔐 เข้าสู่ระบบเพื่อบันทึกการตระหนักรู้ 24 ชม.' };
        const loginBtn = { zh: '立即登录', en: 'Log In', ja: 'ログイン', th: 'เข้าสู่ระบบ' };

        container.innerHTML = `
            <div class="recall-intro">
                <h3>${data.title}</h3>
                <p>${data.intro}</p>
            </div>
            <div class="recall-timeline" style="opacity:0.35;pointer-events:none;">
                ${data.slots.slice(0, 3).map(slot => `
                    <div class="recall-slot">
                        <div class="recall-time">${slot.time}</div>
                        <div class="recall-prompt">${slot.prompt}</div>
                    </div>
                `).join('')}
            </div>
            <div class="login-prompt-card">
                <p>${loginHint[lang] || loginHint.zh}</p>
                <button class="login-prompt-btn" id="recall-login-btn">${loginBtn[lang] || loginBtn.zh}</button>
            </div>
        `;
        document.getElementById('recall-login-btn')?.addEventListener('click', () => {
            Auth.requireLogin(() => render());
        });
    }

    function render() {
        const container = document.getElementById('recall-container');
        if (!container) return;
        const data = getData();
        if (!data) return;
        const t = I18n.t.bind(I18n);
        const saved = JSON.parse(localStorage.getItem('sa_recall') || '{}');

        container.innerHTML = `
            <div class="recall-intro">
                <h3>${data.title}</h3>
                <p>${data.intro}</p>
            </div>
            <div class="recall-timeline">
                ${data.slots.map((slot, i) => `
                    <div class="recall-slot">
                        <div class="recall-time">${slot.time}</div>
                        <div class="recall-prompt">${slot.prompt}</div>
                        <textarea class="recall-answer" data-idx="${i}" placeholder="${t('common.writeHere')}">${saved[i] || ''}</textarea>
                    </div>
                `).join('')}
            </div>
            <button class="recall-save-btn" id="recall-save-btn">${data.saveBtn}</button>
        `;

        // Auto-save on input
        container.querySelectorAll('.recall-answer').forEach(ta => {
            ta.addEventListener('input', () => {
                const saved = JSON.parse(localStorage.getItem('sa_recall') || '{}');
                saved[ta.dataset.idx] = ta.value;
                localStorage.setItem('sa_recall', JSON.stringify(saved));
            });
        });

        document.getElementById('recall-save-btn')?.addEventListener('click', () => {
            const btn = document.getElementById('recall-save-btn');
            btn.textContent = data.savedMsg;
            btn.classList.add('saved');
            setTimeout(() => { btn.textContent = data.saveBtn; btn.classList.remove('saved'); }, 2000);
        });
    }

    return { init };
})();
