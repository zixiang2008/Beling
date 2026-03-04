/* ============================================
   行动建议模块 - actions.js
   用身体放下头脑的建议清单
   ============================================ */

const ActionsModule = (() => {
    const actions = [
        {
            icon: '🏃', title: '跑步', sub: '有氧运动 · 20-30分钟',
            why: '有氧运动能促进内啡肽分泌，有效减少反刍思维（rumination）。跑步时注意力自然从思考转移到身体感受。',
            how: '不需要跑很快。穿上舒服的鞋，出门慢跑。注意脚与地面接触的节奏。当想法出现时，回到脚步和呼吸上。',
            time: '20-30分钟'
        },
        {
            icon: '🧘', title: '瑜伽', sub: '身心合一 · 15-45分钟',
            why: '瑜伽通过体式和呼吸的配合，帮助你从"头脑模式"回到"身体模式"。每个体式都在邀请你感受身体的极限和边界。',
            how: '找一个安静的角落，铺上垫子。可以跟着手机上的瑜伽视频做。起初不要追求完美姿势，重点是感受。',
            time: '15-45分钟'
        },
        {
            icon: '💃', title: '自由舞动', sub: '情绪释放 · 5-15分钟',
            why: '舞蹈是人类最古老的表达方式。当你不用大脑编排动作，而是让身体自由移动时，被压抑的情绪会自然流动出来。',
            how: '关上门，播放喜欢的音乐。不要管动作好不好看。从手指开始，慢慢让全身都动起来。闭上眼睛更容易放开。',
            time: '5-15分钟'
        },
        {
            icon: '📝', title: '直接写出想法', sub: '自由书写 · 10分钟',
            why: '自由书写是"清空大脑"最有效的方法。不经过滤的写作能帮你看到真实的想法和情绪，而不是你"以为"的想法。',
            how: '拿一张纸和笔（不用电脑），设定10分钟计时器。开始写，不停笔、不修改、不评判。即使写"我不知道写什么"也继续写。',
            time: '10分钟'
        },
        {
            icon: '🚶', title: '正念散步', sub: '接地练习 · 15-30分钟',
            why: '散步时不带手机、不听音乐，用五感感受环境。这是最简单的正念练习，帮助你从"做事模式"切换到"存在模式"。',
            how: '放下手机，出门走走。注意脚步的节奏，观察周围的颜色和形状，听各种声音，感受风和阳光。走慢一点。',
            time: '15-30分钟'
        },
        {
            icon: '🎨', title: '创意表达', sub: '非语言表达 · 15-30分钟',
            why: '绘画、捏泥、撕纸……这些创意活动绕过了左脑的逻辑分析，让右脑的感受直接表达。你不需要有艺术天赋。',
            how: '随手找到的材料都可以。随意涂画颜色、形状来表达此刻的心情。不要画"东西"，而是画"感觉"。',
            time: '15-30分钟'
        },
        {
            icon: '🌳', title: '自然浸泡', sub: '感官恢复 · 20分钟起',
            why: '日本的"森林浴"研究证明，在自然中待20分钟就能显著降低皮质醇水平。自然环境能自然地让你从思考回到感受。',
            how: '去最近的公园或有绿植的地方。找一棵树坐下来，摸摸树皮，闻闻泥土，听听鸟叫。脱掉鞋子，赤脚踩在草地上。',
            time: '20分钟以上'
        },
        {
            icon: '🫁', title: '呼吸练习', sub: '快速平静 · 3-5分钟',
            why: '呼吸是连接身体和心灵的桥梁。通过有意识地改变呼吸节奏，可以在几分钟内改变你的神经系统状态。',
            how: 'Box Breathing: 吸气4秒→屏住4秒→呼气4秒→屏住4秒。重复5-8个循环。你会感到明显的平静。',
            time: '3-5分钟'
        },
        {
            icon: '🛁', title: '热水疗愈', sub: '身体放松 · 15-30分钟',
            why: '温水能帮助肌肉放松，降低交感神经活跃度。洗热水澡时，注意力自然从思维转移到触觉——水温、水流、皮肤的感觉。',
            how: '洗一个比平时更长的热水澡或泡脚。关掉手机。注意水的温度、水珠滑过皮肤的感觉。这就是正念练习。',
            time: '15-30分钟'
        },
        {
            icon: '🎵', title: '听觉冥想', sub: '声音聚焦 · 5-15分钟',
            why: '声音是最容易将你带回当下的感官。当你专注于听，思考自然减少。音乐能直接触发情绪，绕过理性分析。',
            how: '戴上耳机，选一首纯音乐或自然声音。闭上眼睛，把全部注意力放在声音上。注意每一个乐器、每一个层次。',
            time: '5-15分钟'
        },
    ];

    function init() { render(); }

    function render() {
        const container = document.getElementById('actions-container');
        if (!container) return;
        container.innerHTML = `
            <div class="actions-header">
                <h3>行动建议</h3>
                <p>放下头脑最好的方式，是让身体动起来。以下每一个行动都能帮你从"想"回到"感受"。</p>
            </div>
            ${actions.map((a, i) => `
                <div class="action-card" data-idx="${i}">
                    <div class="action-card-header">
                        <span class="action-icon">${a.icon}</span>
                        <div>
                            <div class="action-title">${a.title}</div>
                            <div class="action-subtitle">${a.sub}</div>
                        </div>
                    </div>
                    <div class="action-details">
                        <div class="action-detail-section">
                            <h5>💡 为什么有效</h5>
                            <p>${a.why}</p>
                        </div>
                        <div class="action-detail-section">
                            <h5>🎯 如何开始</h5>
                            <p>${a.how}</p>
                        </div>
                        <span class="action-time-tag">⏱ ${a.time}</span>
                    </div>
                </div>
            `).join('')}
        `;
        container.querySelectorAll('.action-card').forEach(card => {
            card.addEventListener('click', () => {
                card.classList.toggle('expanded');
            });
        });
    }

    return { init, render };
})();
