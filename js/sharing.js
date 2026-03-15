/* ============================================
   分享句式模块 - sharing.js (i18n)
   v2.2.0: 增强分享功能，复制到聊天软件提示
   ============================================ */
const SharingModule = (() => {
    function getData() { return window.SharingLang?.[I18n.getLang()] || window.SharingLang?.zh; }

    function init() { render(); }

    function render() {
        const container = document.getElementById('sharing-container');
        if (!container) return;
        const data = getData();
        if (!data) return;
        const t = I18n.t.bind(I18n);

        container.innerHTML = `
            <div class="sharing-intro">
                <h3>${data.title}</h3>
                <p>${data.intro}</p>
            </div>

            <div class="sharing-template">
                <h4>${data.template.label}</h4>
                <div class="template-fields">
                    <div class="template-row">
                        <label>${data.template.when}</label>
                        <input type="text" class="template-input" id="tpl-when" placeholder="${data.template.whenPlaceholder}" />
                    </div>
                    <div class="template-row">
                        <label>${data.template.interpret}</label>
                        <input type="text" class="template-input" id="tpl-interpret" placeholder="${data.template.interpretPlaceholder}" />
                    </div>
                    <div class="template-row">
                        <label>${data.template.feel}</label>
                        <input type="text" class="template-input" id="tpl-feel" placeholder="${data.template.feelPlaceholder}" />
                    </div>
                    <div class="template-row">
                        <label>${data.template.want}</label>
                        <input type="text" class="template-input" id="tpl-want" placeholder="${data.template.wantPlaceholder}" />
                    </div>
                </div>
                <button class="sharing-generate-btn" id="sharing-generate">${data.template.generate}</button>
                <div class="sharing-result" id="sharing-result" style="display:none;">
                    <h4>${data.template.result}</h4>
                    <p id="sharing-output"></p>
                    <div class="sharing-actions">
                        <button class="sharing-copy-btn" id="sharing-copy">${data.template.copyBtn}</button>
                    </div>
                    <div class="share-hint" id="share-hint" style="display:none;">
                        <span class="share-hint-icon">✅</span>
                        <span>${data.shareHint || '已复制！可粘贴到微信、WhatsApp等聊天软件发送'}</span>
                    </div>
                </div>
            </div>

            <div class="sharing-scenes">
                <h4>${data.scenesTitle || '💡 使用场景'}</h4>
                <div class="scenes-grid">
                    ${(data.scenes || []).map(s => `
                        <div class="scene-card">
                            <div class="scene-icon">${s.icon}</div>
                            <div class="scene-name">${s.name}</div>
                            <div class="scene-example">${s.example}</div>
                            <button class="scene-copy-btn" data-text="${s.example.replace(/"/g, '&quot;')}">${data.template.copyBtn}</button>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="sharing-examples">
                <h4>${data.examplesTitle}</h4>
                ${data.examples.map(ex => `
                    <div class="example-card">
                        <p>${ex}</p>
                        <button class="example-copy-btn" data-text="${ex.replace(/"/g, '&quot;')}">${data.template.copyBtn}</button>
                    </div>
                `).join('')}
            </div>

            <div class="sharing-tips">
                ${data.tips.map(tip => `
                    <div class="tip-card">
                        <h5>${tip.title}</h5>
                        <p>${tip.desc}</p>
                    </div>
                `).join('')}
            </div>
        `;

        // Generate
        document.getElementById('sharing-generate')?.addEventListener('click', () => {
            const when = document.getElementById('tpl-when').value.trim();
            const interpret = document.getElementById('tpl-interpret').value.trim();
            const feel = document.getElementById('tpl-feel').value.trim();
            const want = document.getElementById('tpl-want').value.trim();
            if (!when && !feel) return;

            const sentence = `${data.template.when}${when}，${data.template.interpret}${interpret}，${data.template.feel}${feel}，${data.template.want}${want}。`;
            document.getElementById('sharing-output').textContent = sentence;
            document.getElementById('sharing-result').style.display = '';
        });

        // Copy generated result
        document.getElementById('sharing-copy')?.addEventListener('click', () => {
            const text = document.getElementById('sharing-output').textContent;
            copyAndShowHint(text, 'sharing-copy', data);
        });

        // Copy scene examples
        container.querySelectorAll('.scene-copy-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                copyAndShowHint(btn.dataset.text, null, data, btn);
            });
        });

        // Copy example sentences
        container.querySelectorAll('.example-copy-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                copyAndShowHint(btn.dataset.text, null, data, btn);
            });
        });
    }

    function copyAndShowHint(text, mainBtnId, data, btn) {
        navigator.clipboard?.writeText(text).then(() => {
            // Show hint
            const hint = document.getElementById('share-hint');
            if (hint) { hint.style.display = ''; setTimeout(() => { hint.style.display = 'none'; }, 3000); }
            // Button feedback
            const target = btn || document.getElementById(mainBtnId);
            if (target) {
                const orig = target.textContent;
                target.textContent = '✅ ' + (data.copiedMsg || '已复制');
                target.classList.add('copied');
                setTimeout(() => { target.textContent = orig; target.classList.remove('copied'); }, 2000);
            }
        });
    }

    return { init };
})();
