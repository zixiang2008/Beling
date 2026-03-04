/* ============================================
   冥想空间模块 - meditation.js
   T-Group冥想引导 + 呼吸练习 + 计时器
   ============================================ */

const MeditationModule = (() => {
    let timerInterval = null;
    let totalSeconds = 300; // 默认5分钟
    let remainingSeconds = 300;
    let isRunning = false;
    let breathPhase = 'idle'; // idle, inhale, hold, exhale
    let breathInterval = null;
    let selectedDuration = 5;

    const breathCycle = [
        { phase: 'inhale', text: '吸 气', duration: 4000 },
        { phase: 'hold', text: '停 顿', duration: 4000 },
        { phase: 'exhale', text: '呼 气', duration: 6000 },
    ];

    const guidanceTexts = [
        '找到一个舒服的坐姿，轻轻闭上眼睛……',
        '将注意力带到呼吸上，不需要控制，只是观察……',
        '注意吸气的感觉，空气从鼻腔进入……',
        '注意呼气的感觉，身体慢慢放松……',
        '如果念头出现了，温柔地把注意力带回呼吸……',
        '你不需要做任何事，只是存在于此刻……',
        '感受身体坐在这里的重量……',
        '每一次呼吸，都是一次回到当下的邀请……',
        '放下过去，放下未来，只是这里，只是现在……',
        '你是安全的，你是被爱的，你是完整的……',
    ];

    let currentGuideIndex = 0;
    let guideInterval = null;

    function init() {
        render();
    }

    function render() {
        const container = document.getElementById('meditation-container');
        if (!container) return;

        const circumference = 2 * Math.PI * 108;
        const progress = isRunning ? ((totalSeconds - remainingSeconds) / totalSeconds) : 0;
        const dashoffset = circumference * (1 - progress);

        container.innerHTML = `
            <div class="meditation-view">
                <div class="meditation-title">冥想空间</div>
                <div class="meditation-desc">
                    T-Group从冥想开始。<br>
                    选择时长，找到一个安静的地方，让自己完全放松。
                </div>

                <div class="meditation-timer-visual">
                    <svg viewBox="0 0 240 240" width="240" height="240">
                        <defs>
                            <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:#8b5cf6"/>
                                <stop offset="100%" style="stop-color:#ec4899"/>
                            </linearGradient>
                        </defs>
                        <circle cx="120" cy="120" r="108" class="timer-ring-bg"/>
                        <circle cx="120" cy="120" r="108" class="timer-ring-progress"
                                stroke-dasharray="${circumference}"
                                stroke-dashoffset="${dashoffset}"/>
                    </svg>
                    <div class="timer-display">
                        <div class="timer-time" id="timer-time">${formatTime(remainingSeconds)}</div>
                        <div class="timer-label" id="timer-label">${isRunning ? '冥想中…' : '准备好了吗？'}</div>
                    </div>
                </div>

                <div class="breath-guide" id="breath-guide" style="${isRunning ? '' : 'display:none'}">
                    <div class="breath-guide-circle ${breathPhase !== 'idle' ? breathPhase : ''}" id="breath-circle"></div>
                    <div class="breath-guide-text" id="breath-text">${breathPhase === 'idle' ? '' : getBreathText()}</div>
                </div>

                ${!isRunning ? `
                    <div class="meditation-durations">
                        ${[5, 10, 15, 20].map(d => `
                            <button class="duration-btn ${d === selectedDuration ? 'active' : ''}" data-dur="${d}">${d}分钟</button>
                        `).join('')}
                    </div>
                ` : ''}

                <button class="meditation-start-btn ${isRunning ? 'running' : ''}" id="meditation-toggle-btn">
                    ${isRunning ? '⏹ 结束冥想' : '▶ 开始冥想'}
                </button>

                <div class="meditation-guide-text" id="meditation-guide-text">
                    <p id="guide-text-content">${isRunning ? guidanceTexts[currentGuideIndex] : '冥想引导：闭上眼睛，将全部注意力带到呼吸上。不需要改变什么，只是观察每一次呼和吸。当思绪漂走时，温柔地把它带回来。'}</p>
                </div>
            </div>
        `;

        bindEvents();
    }

    function bindEvents() {
        // 时长选择
        document.querySelectorAll('.duration-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                selectedDuration = parseInt(btn.dataset.dur);
                totalSeconds = selectedDuration * 60;
                remainingSeconds = totalSeconds;
                render();
            });
        });

        // 开始/停止
        document.getElementById('meditation-toggle-btn')?.addEventListener('click', () => {
            if (isRunning) {
                stopMeditation();
            } else {
                startMeditation();
            }
        });
    }

    function startMeditation() {
        isRunning = true;
        remainingSeconds = totalSeconds;
        currentGuideIndex = 0;
        render();

        // 计时器
        timerInterval = setInterval(() => {
            remainingSeconds--;
            const timeEl = document.getElementById('timer-time');
            if (timeEl) timeEl.textContent = formatTime(remainingSeconds);

            // 更新进度环
            const circumference = 2 * Math.PI * 108;
            const progress = (totalSeconds - remainingSeconds) / totalSeconds;
            const circle = document.querySelector('.timer-ring-progress');
            if (circle) circle.style.strokeDashoffset = circumference * (1 - progress);

            if (remainingSeconds <= 0) {
                stopMeditation();
                showComplete();
            }
        }, 1000);

        // 呼吸引导循环
        startBreathCycle();

        // 引导文字切换
        guideInterval = setInterval(() => {
            currentGuideIndex = (currentGuideIndex + 1) % guidanceTexts.length;
            const el = document.getElementById('guide-text-content');
            if (el) {
                el.style.opacity = '0';
                setTimeout(() => {
                    el.textContent = guidanceTexts[currentGuideIndex];
                    el.style.opacity = '1';
                }, 300);
            }
        }, 15000);
    }

    function stopMeditation() {
        isRunning = false;
        clearInterval(timerInterval);
        clearInterval(guideInterval);
        clearTimeout(breathInterval);
        breathPhase = 'idle';
        remainingSeconds = totalSeconds;
        render();
    }

    function startBreathCycle() {
        let cycleIndex = 0;
        function runPhase() {
            if (!isRunning) return;
            const phase = breathCycle[cycleIndex];
            breathPhase = phase.phase;

            const circle = document.getElementById('breath-circle');
            const text = document.getElementById('breath-text');
            if (circle) {
                circle.className = 'breath-guide-circle ' + phase.phase;
            }
            if (text) text.textContent = phase.text;

            cycleIndex = (cycleIndex + 1) % breathCycle.length;
            breathInterval = setTimeout(runPhase, phase.duration);
        }
        runPhase();
    }

    function showComplete() {
        const container = document.getElementById('meditation-container');
        if (!container) return;
        container.innerHTML = `
            <div class="meditation-view">
                <div style="font-size:3rem;margin-bottom:16px;">🙏</div>
                <div class="meditation-title">冥想完成</div>
                <div class="meditation-desc">
                    你刚刚完成了 ${selectedDuration} 分钟的冥想。<br>
                    在睁开眼睛之前，注意一下自己此刻的感受。
                </div>
                <div class="meditation-guide-text">
                    <p>你现在感觉如何？可以在 <strong>深度发问</strong> 或 <strong>分享句式</strong> 中记录你冥想后的感受。</p>
                </div>
                <button class="meditation-start-btn" onclick="MeditationModule.init()">返回冥想空间</button>
            </div>
        `;
    }

    function getBreathText() {
        const map = { inhale: '吸 气', hold: '停 顿', exhale: '呼 气' };
        return map[breathPhase] || '';
    }

    function formatTime(s) {
        const m = Math.floor(s / 60);
        const sec = s % 60;
        return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    }

    return { init, render };
})();
