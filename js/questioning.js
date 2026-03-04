/* ============================================
   深度发问模块 - questioning.js
   多维度自我探索问题树
   ============================================ */

const QuestioningModule = (() => {
    const dimensions = [
        { id: 'body', name: '🫀 身体', color: '#ec4899' },
        { id: 'emotion', name: '💧 情绪', color: '#8b5cf6' },
        { id: 'thought', name: '💭 思维', color: '#6366f1' },
        { id: 'relation', name: '🤝 关系', color: '#14b8a6' },
        { id: 'meaning', name: '🌟 意义', color: '#f59e0b' },
    ];

    const questions = {
        body: [
            { depth: 1, text: '此刻你的身体有什么感觉？', hint: '暂停下来，扫描全身：从头顶到脚底' },
            { depth: 1, text: '哪个部位感觉最紧张？', hint: '肩膀？下巴？胃部？' },
            { depth: 2, text: '这个紧张的感觉，是什么形状？什么温度？', hint: '给它一个具体的描述' },
            { depth: 2, text: '如果让这个身体部位说话，它想对你说什么？', hint: '不要用大脑思考，而是倾听身体' },
            { depth: 3, text: '这个身体感觉，在你的生命中什么时候第一次出现过？', hint: '让记忆自然浮现' },
            { depth: 3, text: '你的身体此刻需要什么？', hint: '可能是移动、休息、拥抱、温暖……' },
        ],
        emotion: [
            { depth: 1, text: '你现在最主要的情绪是什么？', hint: '可以回到"情绪罗盘"中找找看' },
            { depth: 1, text: '这个情绪的强度有多大？（1-10）', hint: '不必精确，感受就好' },
            { depth: 2, text: '在这个主要情绪的下面，还隐藏着什么情绪？', hint: '愤怒下面可能有受伤，焦虑下面可能有恐惧' },
            { depth: 2, text: '你通常怎样处理这种情绪？回避？压抑？爆发？', hint: '不评判，只是观察你的模式' },
            { depth: 3, text: '如果完全接纳这个情绪，不试图改变它，会怎样？', hint: '让情绪像波浪一样来去' },
            { depth: 3, text: '这个情绪想要提醒你什么？它在保护你什么？', hint: '每种情绪都有它存在的意义' },
        ],
        thought: [
            { depth: 1, text: '你脑海中现在反复出现的想法是什么？', hint: '不过滤，直接写下来' },
            { depth: 1, text: '这个想法让你感到什么？', hint: '从想法回到感受' },
            { depth: 2, text: '这个想法是事实，还是你的解读？', hint: '区分"发生了什么"和"我怎么想的"' },
            { depth: 2, text: '如果换一个角度看，还有什么其他可能的解读？', hint: '至少想出3种不同的解读' },
            { depth: 3, text: '你的"内在批评者"在说什么？ 你的"内在支持者"会怎么回应？', hint: '两个声音都是你的一部分' },
            { depth: 3, text: '如果放下所有的思考，只是存在于当下，你注意到什么？', hint: '尝试30秒不思考' },
        ],
        relation: [
            { depth: 1, text: '今天谁对你的情绪影响最大？', hint: '可以是正面的，也可以是负面的' },
            { depth: 1, text: '你在这段关系中最渴望什么？', hint: '被理解？被接纳？被看见？' },
            { depth: 2, text: '你在这段关系中扮演什么角色？', hint: '拯救者？迎合者？退缩者？' },
            { depth: 2, text: '你在关系中通常不敢表达什么？', hint: '那些被你吞下去的话' },
            { depth: 3, text: '如果你完全真实，你想对这个人说什么？', hint: '不需要真的说出来，先写下来' },
            { depth: 3, text: '这段关系在反映你和自己的什么关系？', hint: '外在关系是内在关系的投射' },
        ],
        meaning: [
            { depth: 1, text: '今天对你来说最重要的一刻是什么？', hint: '不必是大事，小细节也算' },
            { depth: 1, text: '你现在的生活跟你真正想要的生活有多远？', hint: '不评判，诚实面对' },
            { depth: 2, text: '什么事情会让你感到"活着"的感觉？', hint: '回忆那些充满生命力的时刻' },
            { depth: 2, text: '如果不考虑他人的期望，你想成为什么样的人？', hint: '放下"应该"，探索"想要"' },
            { depth: 3, text: '你最害怕面对的人生真相是什么？', hint: '那个你一直在回避的问题' },
            { depth: 3, text: '如果你的生命只剩一年，你会怎样度过？', hint: '这个问题可能揭示你真正的优先级' },
        ],
    };

    let currentDimension = 'body';
    let currentDepth = 1;

    function init() {
        render();
    }

    function render() {
        const container = document.getElementById('questioning-container');
        if (!container) return;

        const dimQuestions = questions[currentDimension].filter(q => q.depth <= currentDepth);

        container.innerHTML = `
            <div class="questioning-intro">
                <h3>深度发问</h3>
                <p>通过多维度的自我提问，一层层深入觉察真实的内在。选择一个维度，从表层开始探索。</p>
            </div>
            <div class="dimension-tabs">
                ${dimensions.map(d => `
                    <button class="dimension-tab ${d.id === currentDimension ? 'active' : ''}" 
                            data-dim="${d.id}" style="${d.id === currentDimension ? `background:${d.color};border-color:${d.color}` : ''}">
                        ${d.name}
                    </button>
                `).join('')}
            </div>
            <div class="questions-list">
                ${dimQuestions.map((q, i) => `
                    <div class="question-card">
                        <div class="question-depth">
                            ${[1, 2, 3].map(d => `<div class="depth-dot ${d <= q.depth ? 'filled' : ''}"></div>`).join('')}
                            <span class="depth-label">深度 ${q.depth}</span>
                        </div>
                        <div class="question-text">${q.text}</div>
                        <div class="question-hint">${q.hint}</div>
                        <textarea class="question-answer" placeholder="在这里写下你的回答……" rows="2" data-dim="${currentDimension}" data-idx="${i}">${getAnswer(currentDimension, i)}</textarea>
                    </div>
                `).join('')}
            </div>
            ${currentDepth < 3 ? `
                <button class="deeper-btn" id="deeper-btn">
                    ✨ 更深一层探索
                </button>
            ` : `
                <div style="text-align:center;padding:20px 0;">
                    <p style="font-size:0.85rem;color:var(--text-secondary);line-height:1.7;">
                        你已经到达最深层的探索。<br>给自己一个拥抱，感谢自己的勇气。
                    </p>
                </div>
            `}
        `;

        // Bind events
        container.querySelectorAll('.dimension-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                currentDimension = tab.dataset.dim;
                currentDepth = 1;
                render();
            });
        });

        const deeperBtn = document.getElementById('deeper-btn');
        if (deeperBtn) {
            deeperBtn.addEventListener('click', () => {
                currentDepth = Math.min(currentDepth + 1, 3);
                render();
            });
        }

        // Save answers on blur
        container.querySelectorAll('.question-answer').forEach(ta => {
            ta.addEventListener('blur', () => {
                saveAnswer(ta.dataset.dim, parseInt(ta.dataset.idx), ta.value);
            });
        });
    }

    function getAnswer(dim, idx) {
        try {
            const data = JSON.parse(localStorage.getItem('sa_questioning') || '{}');
            return (data[dim] && data[dim][idx]) || '';
        } catch { return ''; }
    }

    function saveAnswer(dim, idx, value) {
        try {
            const data = JSON.parse(localStorage.getItem('sa_questioning') || '{}');
            if (!data[dim]) data[dim] = {};
            data[dim][idx] = value;
            localStorage.setItem('sa_questioning', JSON.stringify(data));
        } catch { }
    }

    return { init, render };
})();
