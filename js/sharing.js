/* ============================================
   分享句式模块 - sharing.js
   T语言沟通模板工具
   ============================================ */

const SharingModule = (() => {
    const tips = [
        { title: '专注"此时此地"', desc: '把分享的内容聚焦在当下房间里发生的事情上，而不是翻旧账或预测未来。' },
        { title: '区分感受与解读', desc: '直接说出"我感到难过"，而不是"我感到被忽视了"。前者是在分享自己的感受，后者更像是在解读对方的行为。' },
        { title: '需要时，放慢脚步', desc: '可以说："我想回应你，但需要一点时间消化一下。"这既能照顾好自己，又能保持连接。' },
        { title: '按照自己的节奏冒险', desc: '分享那些让你感到脆弱或害怕的事情，你永远可以自己决定冒险的程度。你的勇气会像一种许可，鼓励其他人也这样做。' },
    ];

    function init() { render(); }

    function render() {
        const container = document.getElementById('sharing-container');
        if (!container) return;

        container.innerHTML = `
            <div class="sharing-header">
                <h3>分享内心感受的句式</h3>
                <p>T语言帮助你安全、真诚、清晰地表达内心感受。<br>以下是一个实用的句式模板：</p>
            </div>

            <div class="sharing-template">
                <div class="sharing-template-label">❤️ 核心句式模板</div>
                <div class="sharing-sentence">
                    "当我看到你
                    <span class="sharing-input-field" contenteditable="true" data-field="behavior" data-placeholder="具体行为"></span>
                    时，我的想法是
                    <span class="sharing-input-field" contenteditable="true" data-field="interpretation" data-placeholder="我的解读"></span>
                    ，我感到
                    <span class="sharing-input-field" contenteditable="true" data-field="feeling" data-placeholder="我的感受"></span>
                    。我分享这个是希望
                    <span class="sharing-input-field" contenteditable="true" data-field="intention" data-placeholder="我的意图"></span>
                    。"
                </div>
            </div>

            <div style="background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:var(--radius-md);padding:16px;margin-bottom:16px;">
                <div style="font-size:0.82rem;color:var(--text-accent);margin-bottom:10px;">📖 句式要素说明</div>
                <div style="font-size:0.82rem;color:var(--text-secondary);line-height:1.8;">
                    <strong>· 具体行为</strong>：你用感官观察到的事（"你的声音变小了"、"我说话时你点了点头"）<br>
                    <strong>· 我的解读</strong>：你个人对这个行为的理解或故事（"我的想法是你很投入……"）<br>
                    <strong>· 我的感受</strong>：你身体里的核心感觉（"这让我感到很安心"）<br>
                    <strong>· 我的意图</strong>：你希望通过分享达到什么目的（"我分享这个是希望能和你感觉更亲近"）
                </div>
            </div>

            <div style="background:var(--bg-glass);border:1px solid var(--border-subtle);border-radius:var(--radius-md);padding:16px;margin-bottom:16px;">
                <div style="font-size:0.82rem;color:var(--text-accent);margin-bottom:8px;">💬 示例</div>
                <p style="font-size:0.88rem;color:var(--text-secondary);line-height:1.9;font-style:italic;">
                    "刚才我说话时，我看到你的目光移开了，我的想法是你可能有点走神了，这让我感到有些焦虑，也希望能和你感觉更连接。我分享出来是希望能坦诚地说出这种感觉。"
                </p>
            </div>

            <div style="background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:var(--radius-md);padding:16px;margin-bottom:16px;">
                <div style="font-size:0.82rem;color:var(--text-accent);margin-bottom:10px;">🔄 接收他人的反馈</div>
                <div style="font-size:0.82rem;color:var(--text-secondary);line-height:1.8;">
                    当接收到他人的反馈时，可以说：<br>
                    "听到你所听到的话，我感到【某种情绪】。"<br><br>
                    在任何时候你都可以简单分享：<br>
                    "现在，我感到【某种情绪】。"<br>
                    "我注意到我的身体有【某种感觉】。"
                </div>
            </div>

            <button class="recall-start-btn" id="sharing-generate-btn" style="margin-bottom:16px;">✨ 生成我的分享语句</button>

            <div class="sharing-result" id="sharing-result">
                <div class="sharing-result-text" id="sharing-result-text"></div>
                <button class="sharing-copy-btn" id="sharing-copy-btn">📋 复制到剪贴板</button>
            </div>

            <div class="sharing-tips">
                <h4>⚠️ 几个让沟通更顺畅的小技巧</h4>
                ${tips.map(t => `
                    <div class="tip-card">
                        <div class="tip-card-title">${t.title}</div>
                        <div class="tip-card-desc">${t.desc}</div>
                    </div>
                `).join('')}
            </div>
        `;

        // 生成按钮
        document.getElementById('sharing-generate-btn')?.addEventListener('click', () => {
            const fields = {};
            container.querySelectorAll('.sharing-input-field').forEach(f => {
                fields[f.dataset.field] = f.textContent.trim() || f.dataset.placeholder;
            });
            const text = `当我看到你${fields.behavior}时，我的想法是${fields.interpretation}，我感到${fields.feeling}。我分享这个是希望${fields.intention}。`;
            const result = document.getElementById('sharing-result');
            const resultText = document.getElementById('sharing-result-text');
            resultText.textContent = text;
            result.classList.add('visible');
        });

        // 复制按钮
        document.getElementById('sharing-copy-btn')?.addEventListener('click', () => {
            const text = document.getElementById('sharing-result-text').textContent;
            navigator.clipboard.writeText(text).then(() => {
                showToast('已复制到剪贴板 ✓');
            });
        });
    }

    function showToast(msg) {
        let toast = document.querySelector('.toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'toast';
            document.body.appendChild(toast);
        }
        toast.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2500);
    }

    return { init, render };
})();
