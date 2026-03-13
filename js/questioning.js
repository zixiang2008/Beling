/* ============================================
   深度发问模块 - questioning.js (i18n + auth)
   ============================================ */
const QuestioningModule = (() => {
    function getLang() { return I18n.getLang(); }
    function getData() { return window.QuestioningLang?.[getLang()] || window.QuestioningLang?.zh; }
    const dimKeys = ['body', 'emotion', 'thought', 'relation', 'meaning'];

    function init() {
        if (Auth.isLoggedIn()) {
            render();
        } else {
            renderPreview();
        }
    }

    function renderPreview() {
        const container = document.getElementById('questioning-container');
        if (!container) return;
        const data = getData();
        if (!data) return;
        const lang = I18n.getLang();
        const loginHint = { zh: '🔐 登录后解锁完整的深度发问体验', en: '🔐 Log in to unlock the full Deep Inquiry experience', ja: '🔐 ログインして深い問いの全体験を解除', th: '🔐 เข้าสู่ระบบเพื่อปลดล็อกประสบการณ์เต็ม' };
        const loginBtn = { zh: '立即登录', en: 'Log In', ja: 'ログイン', th: 'เข้าสู่ระบบ' };

        container.innerHTML = `
            <div class="questioning-intro">
                <h3>${data.title}</h3>
                <p>${data.intro}</p>
                <div class="dimension-tabs" style="opacity:0.5;pointer-events:none;">
                    ${data.dimensions.map((d, i) => `
                        <button class="dim-tab ${i === 0 ? 'active' : ''}" style="--dim-color:${d.color}">
                            ${d.name}
                        </button>
                    `).join('')}
                </div>
            </div>
            <div class="login-prompt-card">
                <p>${loginHint[lang] || loginHint.zh}</p>
                <button class="login-prompt-btn" id="questioning-login-btn">${loginBtn[lang] || loginBtn.zh}</button>
            </div>
        `;
        document.getElementById('questioning-login-btn')?.addEventListener('click', () => {
            Auth.requireLogin(() => render());
        });
    }

    function render() {
        const container = document.getElementById('questioning-container');
        if (!container) return;
        const data = getData();
        if (!data) return;
        const t = I18n.t.bind(I18n);

        container.innerHTML = `
            <div class="questioning-intro">
                <h3>${data.title}</h3>
                <p>${data.intro}</p>
                <div class="dimension-tabs">
                    ${data.dimensions.map((d, i) => `
                        <button class="dim-tab ${i === 0 ? 'active' : ''}" data-dim="${dimKeys[i]}" style="--dim-color:${d.color}">
                            ${d.name}
                        </button>
                    `).join('')}
                </div>
            </div>
            <div id="questions-list" class="questions-list"></div>
        `;

        renderQuestions(dimKeys[0]);

        container.querySelectorAll('.dim-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                container.querySelectorAll('.dim-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                renderQuestions(tab.dataset.dim);
            });
        });
    }

    function renderQuestions(dim) {
        const data = getData();
        const list = document.getElementById('questions-list');
        if (!list || !data?.questions?.[dim]) return;
        const t = I18n.t.bind(I18n);
        const saved = JSON.parse(localStorage.getItem('sa_answers_' + dim) || '{}');

        list.innerHTML = data.questions[dim].map((q, i) => `
            <div class="question-card">
                <div class="question-depth">
                    ${'<span class="depth-dot"></span>'.repeat(q.d)} ${I18n.getLang() === 'ja' ? '深さ' : I18n.getLang() === 'th' ? 'ระดับ' : I18n.getLang() === 'en' ? 'Depth' : '深度'} ${q.d}
                </div>
                <h4>${q.q}</h4>
                <p class="question-hint"><em>${q.h}</em></p>
                <textarea class="question-answer" data-dim="${dim}" data-idx="${i}" placeholder="${t('common.writeHere')}">${saved[i] || ''}</textarea>
            </div>
        `).join('');

        // Auto-save answers
        list.querySelectorAll('.question-answer').forEach(ta => {
            ta.addEventListener('input', () => {
                const saved = JSON.parse(localStorage.getItem('sa_answers_' + ta.dataset.dim) || '{}');
                saved[ta.dataset.idx] = ta.value;
                localStorage.setItem('sa_answers_' + ta.dataset.dim, JSON.stringify(saved));
            });
        });
    }

    return { init };
})();
