const i18n = require('../../utils/i18n.js');

const qData = {
    zh: { title: '深度发问', intro: '以下问题没有标准答案。在安静舒适的环境中，慢慢感受每一个问题。', questions: ['此刻，你身体里有什么感觉？', '如果给现在的情绪画一幅画，它是什么颜色、什么形状？', '今天有什么事情让你感到不舒服？', '你现在最想逃避的是什么？', '如果不用考虑任何人的看法，你最想做什么？', '你害怕别人看到你的哪一面？', '什么时候你觉得自己最"真实"？', '你上一次哭是什么时候？为什么？'] },
    en: { title: 'Deep Inquiry', intro: 'These questions have no right answer. In a quiet space, slowly feel each question.', questions: ['What sensations do you notice in your body right now?', 'If you painted your current emotion, what color and shape would it be?', 'What today made you uncomfortable?', 'What are you most trying to avoid right now?', 'If you didn\'t care about anyone\'s opinion, what would you do?', 'What side of yourself do you hide from others?', 'When do you feel most "authentic"?', 'When was the last time you cried? Why?'] },
    ja: { title: '深い問い', intro: '正解のない質問です。静かな環境で、ゆっくり問いを感じてください。', questions: ['今、体の中にどんな感覚がありますか？', '今の感情を絵にしたら何色、何の形？', '今日、不快に感じた事は？', '今一番逃げたい事は？', '誰の目も気にしなくていいなら何をしたい？', '他人に見せたくない自分の面は？', '最も「本当の自分」を感じる時は？', '最後に泣いたのはいつ？なぜ？'] },
    th: { title: 'คำถามลึก', intro: 'คำถามเหล่านี้ไม่มีคำตอบที่ถูกต้อง ค่อยๆ รู้สึกกับแต่ละคำถาม', questions: ['ตอนนี้คุณรู้สึกอะไรในร่างกาย?', 'ถ้าวาดอารมณ์ตอนนี้ เป็นสีอะไรรูปร่างอะไร?', 'วันนี้มีอะไรทำให้ไม่สบายใจ?', 'ตอนนี้อยากหนีจากอะไรมากที่สุด?', 'ถ้าไม่ต้องสนใจใคร อยากทำอะไร?', 'ด้านไหนที่ซ่อนจากคนอื่น?', 'เมื่อไหร่ที่รู้สึกเป็น "ตัวเอง" มากที่สุด?', 'ร้องไห้ครั้งสุดท้ายเมื่อไหร่ ทำไม?'] }
};

Page({
    data: { title: '', intro: '', questions: [], writePlaceholder: '' },
    onLoad() { i18n.init(); this.updateUI(); },
    onShow() { this.updateUI(); },
    updateUI() {
        const d = qData[i18n.getLang()] || qData.zh;
        this.setData({ title: d.title, intro: d.intro, writePlaceholder: i18n.t('common.writeHere'), questions: d.questions.map(q => ({ q, answer: '' })) });
    },
    onAnswer(e) {
        const idx = e.currentTarget.dataset.index;
        const key = `questions[${idx}].answer`;
        this.setData({ [key]: e.detail.value });
    }
});
