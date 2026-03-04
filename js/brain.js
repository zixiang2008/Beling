/* ============================================
   左右脑切换模块 - brain.js
   从思考模式切换到感受模式的引导
   ============================================ */

const BrainModule = (() => {
    const practices = [
        {
            icon: '👁️', title: '身体扫描',
            desc: '闭上眼睛，从头顶开始，慢慢将注意力移动到身体的每个部位。不评判，只是观察——哪里紧张？哪里放松？哪里有温度变化？这是从思考回到身体最直接的方式。',
            time: '5-10分钟'
        },
        {
            icon: '👂', title: '感官聚焦',
            desc: '选择一个感官通道（听觉、触觉、嗅觉），专注于它30秒。听听此刻所有的声音——远的、近的、大的、小的。感受衣服与皮肤的接触。闻闻空气中的味道。',
            time: '1-3分钟'
        },
        {
            icon: '✋', title: '双手感知',
            desc: '将两只手掌合在一起，慢慢搓热。然后分开约3厘米，感受手掌之间的能量场。慢慢拉远、靠近，注意感觉的变化。',
            time: '2-3分钟'
        },
        {
            icon: '🌳', title: '自然连接',
            desc: '走到户外，赤脚踩在土地或草地上。触摸一棵树、一片叶子。不需要思考，只是用触觉和视觉去感受大自然的质感和生命力。',
            time: '10-20分钟'
        },
        {
            icon: '🎨', title: '自由绘画',
            desc: '拿一支笔或蜡笔，不要画任何具体的东西。闭上眼睛，让手自由移动。让颜色和线条表达你此刻的内在感受。没有对错，没有美丑。',
            time: '5-15分钟'
        },
        {
            icon: '💃', title: '自由舞动',
            desc: '播放一首音乐，关上房门，让身体自由移动。不要想动作好不好看。让身体自己决定怎么动——它比大脑更了解你需要什么。',
            time: '5-10分钟'
        },
        {
            icon: '📝', title: '自由书写',
            desc: '拿起笔，连续写10分钟，不停笔，不修改，不思考。无论脑海中出现什么，都写下来。这不是文学创作，是清空大脑的过程。',
            time: '10分钟'
        },
        {
            icon: '🫁', title: '4-7-8 呼吸',
            desc: '用鼻子吸气4秒，屏住7秒，用嘴呼气8秒。重复4次。这个呼吸节奏能激活副交感神经，让大脑的思考模式自然安静下来。',
            time: '2-3分钟'
        },
    ];

    function init() {
        render();
    }

    function render() {
        const container = document.getElementById('brain-container');
        if (!container) return;

        container.innerHTML = `
            <div class="brain-hero">
                <h3>从思考到感受</h3>
                <p>我们习惯了用左脑分析和思考，却常常忘了感受。<br>以下的练习帮助你暂停思维，打开感受的通道。</p>
            </div>

            <div class="brain-comparison">
                <div class="brain-side left-brain">
                    <div class="brain-side-icon">🔢</div>
                    <div class="brain-side-title">左脑·思考</div>
                    <ul>
                        <li>分析判断</li>
                        <li>逻辑推理</li>
                        <li>语言表达</li>
                        <li>计算规划</li>
                        <li>"应该""对错"</li>
                    </ul>
                </div>
                <div class="brain-side right-brain">
                    <div class="brain-side-icon">🎭</div>
                    <div class="brain-side-title">右脑·感受</div>
                    <ul>
                        <li>直觉感知</li>
                        <li>情感体验</li>
                        <li>身体感觉</li>
                        <li>创造想象</li>
                        <li>"我感到""我注意到"</li>
                    </ul>
                </div>
            </div>

            <div style="background:var(--bg-card);border:1px solid var(--border-glow);border-radius:var(--radius-lg);padding:18px;margin-bottom:20px;">
                <div style="font-size:0.85rem;color:var(--text-accent);margin-bottom:8px;">💡 如何开启感受模式</div>
                <div style="font-size:0.85rem;color:var(--text-secondary);line-height:1.8;">
                    <strong>第一步</strong>：停下正在做的事情，做3次深呼吸<br>
                    <strong>第二步</strong>：把注意力从头脑移到身体，感受脚踩地面<br>
                    <strong>第三步</strong>：问自己"我现在身体有什么感觉？"<br>
                    <strong>第四步</strong>：当思考出现时，不评判，温柔地回到感受<br>
                    <strong>关键词</strong>：用"我感到……"替代"我觉得……"
                </div>
            </div>

            <div class="brain-practices">
                <h4>🧘 感受模式练习</h4>
                ${practices.map((p, i) => `
                    <div class="practice-card" data-idx="${i}">
                        <div class="practice-card-title">
                            <span>${p.icon}</span>
                            <span>${p.title}</span>
                            <span class="action-time-tag">${p.time}</span>
                        </div>
                        <div class="practice-card-desc">${p.desc}</div>
                    </div>
                `).join('')}
            </div>

            <div style="background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:var(--radius-lg);padding:18px;margin-top:20px;">
                <div style="font-size:0.85rem;color:var(--text-accent);margin-bottom:8px;">🏃 运动帮你放下头脑</div>
                <div style="font-size:0.85rem;color:var(--text-secondary);line-height:1.8;">
                    研究表明，有氧运动能有效减少反刍思维（rumination），帮助从"过度思考"中解放出来。<br><br>
                    <strong>推荐方式：</strong><br>
                    · <strong>跑步</strong>：注意脚与地面接触的感觉<br>
                    · <strong>游泳</strong>：感受水的阻力和身体的移动<br>
                    · <strong>瑜伽</strong>：在每个体式中感受身体的极限<br>
                    · <strong>跳舞</strong>：让身体跟随音乐自由表达<br>
                    · <strong>太极</strong>：慢速运动，注意每一个动作的细节<br>
                    · <strong>散步</strong>：不带手机，用五感感受环境
                </div>
            </div>
        `;
    }

    return { init, render };
})();
