const i18n = require('../../utils/i18n.js');
const recallData = {
    zh: { title: '24小时回忆', intro: '按时间段回顾过去24小时，觉察那些被忽视的感受。', timeSlots: ['🌅 早晨 (6:00-9:00)：醒来时的第一个感受是什么？', '☀️ 上午 (9:00-12:00)：有没有让你紧张或开心的时刻？', '🍜 中午 (12:00-14:00)：午餐时你在想什么？', '🌤 下午 (14:00-18:00)：精力如何？什么消耗了你的能量？', '🌆 傍晚 (18:00-21:00)：回到个人空间时，你的心情如何？', '🌙 晚上 (21:00-24:00)：一天结束时，最大的感受是什么？'] },
    en: { title: '24h Recall', intro: 'Review the past 24 hours by time period, notice overlooked feelings.', timeSlots: ['🌅 Morning (6-9): First feeling when waking up?', '☀️ Late Morning (9-12): Any tense or happy moments?', '🍜 Noon (12-14): What were you thinking during lunch?', '🌤 Afternoon (14-18): How was your energy? What drained you?', '🌆 Evening (18-21): How did you feel returning to personal space?', '🌙 Night (21-24): Biggest feeling at end of day?'] },
    ja: { title: '24時間振り返り', intro: '過去24時間を時間帯ごとに振り返り、見落とした感情に気づく。', timeSlots: ['🌅 朝 (6-9)：起きた時の最初の感覚は？', '☀️ 午前 (9-12)：緊張や喜びの瞬間は？', '🍜 昼 (12-14)：昼食時何を考えていた？', '🌤 午後 (14-18)：エネルギーはどう？何に消耗された？', '🌆 夕方 (18-21)：個人の空間に戻った時の気持ちは？', '🌙 夜 (21-24)：一日の終わりに最も大きな感覚は？'] },
    th: { title: 'ย้อนดู 24 ชม.', intro: 'ทบทวน 24 ชั่วโมงที่ผ่านมา สังเกตความรู้สึกที่ถูกมองข้าม', timeSlots: ['🌅 เช้า (6-9): ความรู้สึกแรกตอนตื่น?', '☀️ สาย (9-12): มีช่วงเครียดหรือมีความสุขไหม?', '🍜 เที่ยง (12-14): ตอนกินข้าวคิดอะไร?', '🌤 บ่าย (14-18): พลังงานเป็นอย่างไร?', '🌆 เย็น (18-21): กลับบ้านรู้สึกอย่างไร?', '🌙 ค่ำ (21-24): ความรู้สึกใหญ่สุดตอนจบวัน?'] }
};
Page({
    data: { title: '', intro: '', timeSlots: [], writePlaceholder: '' },
    onLoad() { i18n.init(); this.updateUI(); },
    onShow() { this.updateUI(); },
    updateUI() {
        const d = recallData[i18n.getLang()] || recallData.zh;
        this.setData({ title: d.title, intro: d.intro, writePlaceholder: i18n.t('common.writeHere'), timeSlots: d.timeSlots.map(label => ({ label, answer: '' })) });
    },
    onAnswer(e) { this.setData({ [`timeSlots[${e.currentTarget.dataset.index}].answer`]: e.detail.value }); }
});
