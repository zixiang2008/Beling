/* ============================================
   24小时回忆模块 - recall.js
   时间轴回忆练习
   ============================================ */

const RecallModule = (() => {
    const timeSlots = [
        { time: '昨天此刻', prompt: '24小时前，你在做什么？那时的感受是什么？' },
        { time: '昨晚睡前', prompt: '躺下时，脑海中出现了什么？身体感觉如何？' },
        { time: '昨天晚饭', prompt: '和谁一起吃的？食物的味道带来了什么感受？' },
        { time: '昨天下午', prompt: '下午精力最低的时刻，你在做什么？那时有什么情绪？' },
        { time: '昨天午后', prompt: '午饭后有没有一个"暂停"的瞬间？你注意到了什么？' },
        { time: '昨天上午', prompt: '上午最重要的一件事是什么？它给你带来什么感受？' },
        { time: '昨天醒来', prompt: '醒来的第一个念头是什么？身体感觉如何？' },
    ];

    const guidingQuestions = [
        '在这段时间里，你的身体有什么感觉？',
        '你注意到了什么情绪？',
        '有什么想法反复出现吗？',
        '谁影响了你的心情？',
        '有没有一个瞬间让你感到"活着"的感觉？',
        '你是否对自己够温柔？',
    ];

    let isStarted = false;

    function init() {
        render();
    }

    function render() {
        const container = document.getElementById('recall-container');
        if (!container) return;

        const savedData = getSavedRecall();
        const today = new Date().toLocaleDateString('zh-CN');

        if (!isStarted && !savedData.date) {
            container.innerHTML = `
                <div class="recall-header">
                    <h3>24小时回忆</h3>
                    <p>通过回忆过去24小时的经历，练习觉察你的感受、身体感觉和思维模式。<br>
                    这是T-Group练习中重要的觉察工具。</p>
                </div>
                <div style="text-align:center;padding:40px 0;">
                    <div style="font-size:3rem;margin-bottom:16px;">🕐</div>
                    <p style="font-size:0.9rem;color:var(--text-secondary);margin-bottom:24px;line-height:1.7;">
                        找一个安静的地方坐下<br>
                        做3次深呼吸<br>
                        准备好后，点击开始
                    </p>
                    <button class="recall-start-btn" id="recall-start-btn">开始24小时回忆</button>
                </div>
                <div style="text-align:center;padding:10px 0;">
                    <p style="font-size:0.78rem;color:var(--text-muted);">建议在安静环境下进行，约需10-15分钟</p>
                </div>
            `;
            document.getElementById('recall-start-btn')?.addEventListener('click', () => {
                isStarted = true;
                render();
            });
            return;
        }

        container.innerHTML = `
            <div class="recall-header">
                <h3>24小时回忆</h3>
                <p>按时间顺序回忆，用感受而非思考来记录</p>
            </div>
            <div class="timeline">
                ${timeSlots.map((slot, i) => `
                    <div class="timeline-item">
                        <div class="timeline-time">${slot.time}</div>
                        <div class="timeline-content">
                            <div class="timeline-prompt">${slot.prompt}</div>
                            <textarea placeholder="写下你的回忆和感受……" data-slot="${i}">${savedData.slots?.[i] || ''}</textarea>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div style="background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:var(--radius-md);padding:16px;margin:16px 0;">
                <div style="font-size:0.82rem;color:var(--text-accent);margin-bottom:10px;">💡 引导提问</div>
                ${guidingQuestions.map(q => `
                    <div style="font-size:0.82rem;color:var(--text-secondary);padding:4px 0;">· ${q}</div>
                `).join('')}
            </div>
            <button class="recall-save-btn" id="recall-save-btn">💾 保存今天的回忆</button>
        `;

        // 绑定保存
        document.getElementById('recall-save-btn')?.addEventListener('click', () => {
            const slots = {};
            container.querySelectorAll('textarea[data-slot]').forEach(ta => {
                slots[ta.dataset.slot] = ta.value;
            });
            localStorage.setItem('sa_recall', JSON.stringify({ date: today, slots }));
            showToast('已保存今天的回忆 ✓');
        });

        // 自动保存
        container.querySelectorAll('textarea[data-slot]').forEach(ta => {
            ta.addEventListener('blur', () => {
                const data = getSavedRecall();
                if (!data.slots) data.slots = {};
                data.slots[ta.dataset.slot] = ta.value;
                data.date = today;
                localStorage.setItem('sa_recall', JSON.stringify(data));
            });
        });
    }

    function getSavedRecall() {
        try {
            return JSON.parse(localStorage.getItem('sa_recall') || '{}');
        } catch { return {}; }
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
