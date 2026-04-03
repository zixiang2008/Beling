/* ============================================
   冥想空间模块 - meditation.js (i18n)
   v2.2.0: 颂钵音效 + 15秒准备倒计时 + 结束提醒
   ============================================ */
const MeditationModule = (() => {
    function getData() { return window.MeditationLang?.[I18n.getLang()] || window.MeditationLang?.zh; }
    const durations = [3, 5, 10, 15]; // minutes
    let timer = null, elapsed = 0, totalSeconds = 0, isPaused = false, guideIdx = 0, guideTimer = null;
    let audioCtx = null, bowlInterval = null;
    let voiceEnabled = true;

    // ---- Speech Synthesis: 语音引导 ----
    const langMap = { zh: 'zh-CN', en: 'en-US', ja: 'ja-JP', th: 'th-TH' };

    function speak(text) {
        if (!voiceEnabled || !window.speechSynthesis) return;
        window.speechSynthesis.cancel();
        const utt = new SpeechSynthesisUtterance(text);
        utt.lang = langMap[I18n.getLang()] || 'zh-CN';
        utt.rate = 0.85;
        utt.pitch = 1;
        utt.volume = 0.8;
        window.speechSynthesis.speak(utt);
    }

    // ---- Web Audio API: 颂钵音效 ----
    function getAudioCtx() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        return audioCtx;
    }

    function playSingingBowl(duration = 4) {
        try {
            const ctx = getAudioCtx();
            const now = ctx.currentTime;
            const freqs = [174, 285, 396]; // 低频颂钵谐波
            freqs.forEach(freq => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, now);
                gain.gain.setValueAtTime(0, now);
                gain.gain.linearRampToValueAtTime(0.06, now + 0.3);
                gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now);
                osc.stop(now + duration);
            });
        } catch (e) { /* audio not supported */ }
    }

    function playBell() {
        try {
            const ctx = getAudioCtx();
            const now = ctx.currentTime;
            [528, 639, 741].forEach(freq => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, now);
                gain.gain.setValueAtTime(0.15, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 3);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now);
                osc.stop(now + 3);
            });
        } catch (e) { }
    }

    function init() { render(); }

    function render() {
        const container = document.getElementById('meditation-container');
        if (!container) return;
        const data = getData();
        if (!data) return;
        clearTimers();

        container.innerHTML = `
            <div class="meditation-intro">
                <h3>${data.title}</h3>
                <p>${data.intro}</p>
                <div class="med-focus-hint">
                    <span class="med-hint-icon">🔔</span>
                    <span>${data.focusHint || '专注冥想即可，时间到会有提醒'}</span>
                </div>
            </div>
            <div class="meditation-setup" id="meditation-setup">
                <div class="duration-options">
                    ${durations.map((d, i) => `
                        <button class="duration-btn ${i === 1 ? 'active' : ''}" data-mins="${d}">${data.durations[i]}</button>
                    `).join('')}
                </div>
                <button class="meditation-start-btn" id="meditation-start">${data.startBtn}</button>
            </div>
            <div class="meditation-prepare" id="meditation-prepare" style="display:none;">
                <div class="prepare-circle">
                    <div class="prepare-countdown" id="prepare-countdown">15</div>
                </div>
                <p class="prepare-text">${data.prepareMsg || '准备进入冥想...'}</p>
                <p class="prepare-sub">${data.prepareSub || '调整姿势，闭上眼睛，深呼吸...'}</p>
            </div>
            <div class="meditation-active" id="meditation-active" style="display:none;">
                <div class="meditation-timer" id="meditation-timer">05:00</div>
                <div class="meditation-breath" id="meditation-breath"></div>
                <div class="meditation-guide-text" id="meditation-guide-text"></div>
                <button class="med-voice-toggle" id="med-voice-toggle" title="${data.voiceToggle || '语音引导'}">
                    ${voiceEnabled ? '🔊' : '🔇'}
                </button>
                <div class="meditation-controls">
                    <button class="med-ctrl-btn" id="med-pause">${data.pauseBtn}</button>
                    <button class="med-ctrl-btn" id="med-stop">${data.stopBtn}</button>
                </div>
            </div>
            <div class="meditation-complete" id="meditation-complete" style="display:none;">
                <div class="complete-icon">${data.complete}</div>
                <p>${data.completeMsg}</p>
                <button class="meditation-start-btn" id="med-return">${data.returnBtn}</button>
            </div>
        `;

        let selectedMins = 5;
        container.querySelectorAll('.duration-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                container.querySelectorAll('.duration-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                selectedMins = parseInt(btn.dataset.mins);
            });
        });

        document.getElementById('meditation-start')?.addEventListener('click', () => startPrepare(selectedMins));
        document.getElementById('med-pause')?.addEventListener('click', togglePause);
        document.getElementById('med-stop')?.addEventListener('click', stopMeditation);
        document.getElementById('med-return')?.addEventListener('click', () => init());
        document.getElementById('med-voice-toggle')?.addEventListener('click', () => {
            voiceEnabled = !voiceEnabled;
            const btn = document.getElementById('med-voice-toggle');
            if (btn) btn.textContent = voiceEnabled ? '🔊' : '🔇';
            if (!voiceEnabled) window.speechSynthesis?.cancel();
        });
    }

    // 15秒准备倒计时
    function startPrepare(mins) {
        document.getElementById('meditation-setup').style.display = 'none';
        document.getElementById('meditation-prepare').style.display = '';
        playSingingBowl(6);
        const data = getData();
        speak(data.prepareMsg || '准备进入冥想');

        let countdown = 15;
        const el = document.getElementById('prepare-countdown');
        const prepTimer = setInterval(() => {
            countdown--;
            if (el) el.textContent = countdown;
            if (countdown <= 0) {
                clearInterval(prepTimer);
                document.getElementById('meditation-prepare').style.display = 'none';
                startMeditation(mins);
            }
        }, 1000);
    }

    function startMeditation(mins) {
        const data = getData();
        totalSeconds = mins * 60;
        elapsed = 0;
        isPaused = false;
        guideIdx = 0;

        document.getElementById('meditation-active').style.display = '';
        document.getElementById('meditation-complete').style.display = 'none';

        updateTimerDisplay();
        startBreathCycle();
        showGuideText();

        // 持续播放颂钵背景音
        playSingingBowl(8);
        bowlInterval = setInterval(() => {
            if (!isPaused) playSingingBowl(8);
        }, 12000);

        timer = setInterval(() => {
            if (isPaused) return;
            elapsed++;
            updateTimerDisplay();
            if (elapsed >= totalSeconds) {
                clearTimers();
                playBell(); // 结束提醒铃声
                setTimeout(() => playBell(), 1500);
                document.getElementById('meditation-active').style.display = 'none';
                document.getElementById('meditation-complete').style.display = '';
            }
        }, 1000);

        guideTimer = setInterval(() => {
            if (!isPaused) showGuideText();
        }, 15000);
    }

    function updateTimerDisplay() {
        const remaining = totalSeconds - elapsed;
        const m = Math.floor(remaining / 60).toString().padStart(2, '0');
        const s = (remaining % 60).toString().padStart(2, '0');
        const el = document.getElementById('meditation-timer');
        if (el) el.textContent = `${m}:${s}`;
    }

    function startBreathCycle() {
        const data = getData();
        const breathEl = document.getElementById('meditation-breath');
        if (!breathEl) return;
        let phase = 0;
        const phases = [data.breatheIn, data.hold, data.breatheOut, data.hold];
        const times = [4000, 2000, 6000, 2000];

        function cycle() {
            if (!document.getElementById('meditation-breath')) return;
            breathEl.textContent = phases[phase];
            breathEl.className = 'meditation-breath phase-' + phase;
            if (phase === 0 || phase === 2) speak(phases[phase]);
            setTimeout(() => {
                phase = (phase + 1) % 4;
                if (document.getElementById('meditation-breath')) cycle();
            }, times[phase]);
        }
        cycle();
    }

    function showGuideText() {
        const data = getData();
        const el = document.getElementById('meditation-guide-text');
        if (!el || !data?.guides) return;
        el.style.opacity = '0';
        setTimeout(() => {
            const text = data.guides[guideIdx % data.guides.length];
            el.textContent = text;
            el.style.opacity = '1';
            speak(text);
            guideIdx++;
        }, 500);
    }

    function togglePause() {
        const data = getData();
        isPaused = !isPaused;
        const btn = document.getElementById('med-pause');
        if (btn) btn.textContent = isPaused ? data.resumeBtn : data.pauseBtn;
    }

    function stopMeditation() {
        clearTimers();
        playBell();
        window.speechSynthesis?.cancel();
        document.getElementById('meditation-active').style.display = 'none';
        document.getElementById('meditation-complete').style.display = '';
    }

    function clearTimers() {
        if (timer) { clearInterval(timer); timer = null; }
        if (guideTimer) { clearInterval(guideTimer); guideTimer = null; }
        if (bowlInterval) { clearInterval(bowlInterval); bowlInterval = null; }
    }

    return { init };
})();
