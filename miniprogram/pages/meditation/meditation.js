const i18n = require('../../utils/i18n.js');

const meditationData = {
    zh: { title: '冥想空间', intro: '找一个安静的地方，舒适地坐下。闭上眼睛，跟随呼吸的节奏。', startBtn: '开始冥想', pauseBtn: '暂停', resumeBtn: '继续', stopBtn: '结束', completeMsg: '冥想完成 🙏\n愿你带着这份平静继续前行', returnBtn: '返回', breatheIn: '吸气...', hold: '保持...', breatheOut: '呼气...', guides: ['感受空气流过鼻腔的温度', '放松你的肩膀和下巴', '不需要控制什么，只是观察', '你是天空，思绪是飘过的云', '此刻你是安全的', '让每一次呼吸都更深一些', '感恩这一刻的宁静'] },
    en: { title: 'Meditation Space', intro: 'Find a quiet place, sit comfortably. Close your eyes and follow the rhythm of your breath.', startBtn: 'Start', pauseBtn: 'Pause', resumeBtn: 'Resume', stopBtn: 'Stop', completeMsg: 'Meditation Complete 🙏\nMay you carry this peace forward', returnBtn: 'Return', breatheIn: 'Breathe in...', hold: 'Hold...', breatheOut: 'Breathe out...', guides: ['Feel the temperature of air through your nose', 'Relax your shoulders and jaw', 'No need to control, just observe', 'You are the sky, thoughts are passing clouds', 'You are safe in this moment', 'Let each breath go deeper', 'Be grateful for this moment of peace'] },
    ja: { title: '瞑想空間', intro: '静かな場所を見つけて、楽に座ってください。目を閉じて、呼吸のリズムに従います。', startBtn: '開始', pauseBtn: '一時停止', resumeBtn: '再開', stopBtn: '終了', completeMsg: '瞑想完了 🙏', returnBtn: '戻る', breatheIn: '吸って...', hold: '保持...', breatheOut: '吐いて...', guides: ['鼻を通る空気の温度を感じて', '肩とあごの力を抜いて', 'コントロールせずただ観察する', 'あなたは空、思考は通り過ぎる雲', '今この瞬間あなたは安全', '一呼吸一呼吸を深く', 'この静けさに感謝'] },
    th: { title: 'พื้นที่สมาธิ', intro: 'หาที่เงียบสงบ นั่งสบายๆ หลับตา ตามจังหวะลมหายใจ', startBtn: 'เริ่มต้น', pauseBtn: 'หยุดชั่วคราว', resumeBtn: 'ดำเนินต่อ', stopBtn: 'หยุด', completeMsg: 'สมาธิเสร็จสมบูรณ์ 🙏', returnBtn: 'กลับ', breatheIn: 'หายใจเข้า...', hold: 'กลั้น...', breatheOut: 'หายใจออก...', guides: ['รู้สึกถึงอุณหภูมิของอากาศ', 'ผ่อนคลายไหล่และกราม', 'ไม่ต้องควบคุม แค่สังเกต', 'คุณคือท้องฟ้า ความคิดคือเมฆ', 'ตอนนี้คุณปลอดภัย', 'ให้ลมหายใจลึกขึ้น', 'ขอบคุณความสงบนี้'] }
};

Page({
    data: {
        phase: 'setup', title: '', intro: '', startBtn: '', pauseBtn: '', resumeBtn: '', stopBtn: '', completeMsg: '', returnBtn: '',
        durations: [3, 5, 10, 15], selectedMins: 5,
        timerDisplay: '05:00', breathText: '', guideText: '', isPaused: false
    },

    _timer: null, _elapsed: 0, _totalSeconds: 0, _guideIdx: 0, _breathPhase: 0,

    onLoad() {
        i18n.init();
        this.updateUI();
    },

    onShow() { this.updateUI(); },

    updateUI() {
        const d = meditationData[i18n.getLang()] || meditationData.zh;
        this.setData({ title: d.title, intro: d.intro, startBtn: d.startBtn, pauseBtn: d.pauseBtn, resumeBtn: d.resumeBtn, stopBtn: d.stopBtn, completeMsg: d.completeMsg, returnBtn: d.returnBtn });
    },

    selectDuration(e) { this.setData({ selectedMins: e.currentTarget.dataset.mins }); },

    startMeditation() {
        const d = meditationData[i18n.getLang()] || meditationData.zh;
        this._totalSeconds = this.data.selectedMins * 60;
        this._elapsed = 0;
        this._guideIdx = 0;
        this._breathPhase = 0;
        this.setData({ phase: 'active', isPaused: false, breathText: d.breatheIn, guideText: d.guides[0] });
        this.updateTimerDisplay();

        this._timer = setInterval(() => {
            if (this.data.isPaused) return;
            this._elapsed++;
            this.updateTimerDisplay();

            // 呼吸循环 (4s-2s-6s-2s = 14s)
            const breathCycle = this._elapsed % 14;
            if (breathCycle === 0) this.setData({ breathText: d.breatheIn });
            else if (breathCycle === 4) this.setData({ breathText: d.hold });
            else if (breathCycle === 6) this.setData({ breathText: d.breatheOut });
            else if (breathCycle === 12) this.setData({ breathText: d.hold });

            // 引导语每15s切换
            if (this._elapsed % 15 === 0) {
                this._guideIdx = (this._guideIdx + 1) % d.guides.length;
                this.setData({ guideText: d.guides[this._guideIdx] });
            }

            if (this._elapsed >= this._totalSeconds) {
                this.clearTimers();
                this.setData({ phase: 'complete' });
            }
        }, 1000);
    },

    updateTimerDisplay() {
        const remaining = this._totalSeconds - this._elapsed;
        const m = Math.floor(remaining / 60).toString().padStart(2, '0');
        const s = (remaining % 60).toString().padStart(2, '0');
        this.setData({ timerDisplay: m + ':' + s });
    },

    togglePause() { this.setData({ isPaused: !this.data.isPaused }); },

    stopMeditation() { this.clearTimers(); this.setData({ phase: 'complete' }); },

    resetMeditation() { this.clearTimers(); this.setData({ phase: 'setup' }); this.updateUI(); },

    clearTimers() { if (this._timer) { clearInterval(this._timer); this._timer = null; } },

    onUnload() { this.clearTimers(); }
});
