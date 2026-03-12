const i18n = require('../../utils/i18n.js');
const sharingData = {
    zh: {
        title: 'T 语言分享句式', intro: '用 T 语言真诚、不评判地表达感受。结构：当...的时候 → 我的理解是... → 我感到... → 我希望...', templateLabel: '🗣️ 组合你的表达', whenLabel: '当...的时候', whenPlaceholder: '比如：当你没有回我消息', interpretLabel: '我的理解是...', interpretPlaceholder: '比如：我理解为你不在乎', feelLabel: '我感到...', feelPlaceholder: '比如：我感到失落和不安', wantLabel: '我希望...', wantPlaceholder: '比如：我希望你能告诉我原因', generateBtn: '✨ 生成完整表达', resultLabel: '你的 T 语言表达', copyBtn: '📋 复制到剪贴板', examplesTitle: '📝 示例', examples: ['当你迟到的时候，我理解为我对你不重要，我感到受伤和失望，我希望你能提前告诉我会晚到。', '当同事否定我的方案时，我理解为我的能力不够，我感到沮丧和不自信，我希望得到具体的改进建议。', '当朋友取消约会时，我理解为大家都不需要我，我感到孤独，我希望我们能找个新时间相聚。'],
        tips: [{ title: '🎯 描述事实', desc: '只说看到/听到的事实，不加评判' }, { title: '💜 聚焦感受', desc: '说"我感到..."而非"你让我..."' }, { title: '🌱 表达期望', desc: '用"我希望..."代替"你应该..."' }]
    },
    en: {
        title: 'T-Language Sharing', intro: 'Express feelings authentically: When... → I interpreted... → I felt... → I hope...', templateLabel: '🗣️ Compose your expression', whenLabel: 'When...', whenPlaceholder: 'e.g. When you didn\'t reply', interpretLabel: 'I interpreted it as...', interpretPlaceholder: 'e.g. I thought you didn\'t care', feelLabel: 'I felt...', feelPlaceholder: 'e.g. I felt hurt and anxious', wantLabel: 'I hope...', wantPlaceholder: 'e.g. I hope you can tell me why', generateBtn: '✨ Generate', resultLabel: 'Your T-Language expression', copyBtn: '📋 Copy', examplesTitle: '📝 Examples', examples: ['When you were late, I interpreted it as I\'m not important to you, I felt hurt, I hope you can let me know in advance.', 'When my colleague rejected my plan, I interpreted it as I\'m not capable, I felt frustrated, I hope for specific feedback.'],
        tips: [{ title: '🎯 State Facts', desc: 'Describe what you saw/heard without judgment' }, { title: '💜 Focus on Feelings', desc: 'Say "I feel..." not "You make me..."' }, { title: '🌱 Express Hopes', desc: 'Use "I hope..." instead of "You should..."' }]
    },
    ja: {
        title: 'T言語シェアリング', intro: '誠実に感情を表現：〜の時→私は〜と理解した→〜と感じた→〜を望む', templateLabel: '🗣️ 表現を組み立てる', whenLabel: '〜の時...', whenPlaceholder: '例：返信がなかった時', interpretLabel: '私は〜と理解した', interpretPlaceholder: '例：大事にされていないと思った', feelLabel: '〜と感じた', feelPlaceholder: '例：寂しくて不安になった', wantLabel: '〜を望む', wantPlaceholder: '例：理由を教えてほしい', generateBtn: '✨ 生成', resultLabel: 'あなたのT言語', copyBtn: '📋 コピー', examplesTitle: '📝 例文', examples: ['遅刻した時、私は大事にされていないと思い、傷ついた。事前に知らせてほしい。'],
        tips: [{ title: '🎯 事実を述べる', desc: '見た/聞いた事実だけを言う' }, { title: '💜 感情に集中', desc: '「私は感じた」と言い「あなたが」は使わない' }, { title: '🌱 希望を表す', desc: '「〜してほしい」を「〜すべき」の代わりに' }]
    },
    th: {
        title: 'ภาษา T', intro: 'แสดงความรู้สึกอย่างจริงใจ: เมื่อ... → ฉันเข้าใจว่า... → ฉันรู้สึก... → ฉันหวังว่า...', templateLabel: '🗣️ สร้างการแสดงออก', whenLabel: 'เมื่อ...', whenPlaceholder: 'เช่น เมื่อคุณไม่ตอบ', interpretLabel: 'ฉันเข้าใจว่า...', interpretPlaceholder: 'เช่น ฉันคิดว่าคุณไม่แคร์', feelLabel: 'ฉันรู้สึก...', feelPlaceholder: 'เช่น ฉันรู้สึกเสียใจ', wantLabel: 'ฉันหวังว่า...', wantPlaceholder: 'เช่น ฉันหวังว่าคุณจะบอกเหตุผล', generateBtn: '✨ สร้าง', resultLabel: 'ภาษา T ของคุณ', copyBtn: '📋 คัดลอก', examplesTitle: '📝 ตัวอย่าง', examples: ['เมื่อคุณมาสาย ฉันเข้าใจว่าฉันไม่สำคัญ ฉันรู้สึกเจ็บ ฉันหวังว่าคุณจะบอกล่วงหน้า'],
        tips: [{ title: '🎯 ระบุข้อเท็จจริง', desc: 'พูดเฉพาะที่เห็น/ได้ยิน' }, { title: '💜 เน้นความรู้สึก', desc: 'พูดว่า "ฉันรู้สึก..." ไม่ใช่ "คุณทำให้ฉัน..."' }, { title: '🌱 แสดงความหวัง', desc: 'ใช้ "ฉันหวังว่า..." แทน "คุณควร..."' }]
    }
};

Page({
    data: {
        title: '', intro: '', templateLabel: '', whenLabel: '', whenPlaceholder: '', interpretLabel: '', interpretPlaceholder: '',
        feelLabel: '', feelPlaceholder: '', wantLabel: '', wantPlaceholder: '', generateBtn: '', resultLabel: '', copyBtn: '',
        examplesTitle: '', examples: [], tips: [],
        formWhen: '', formInterpret: '', formFeel: '', formWant: '', result: ''
    },
    onLoad() { i18n.init(); this.updateUI(); },
    onShow() { this.updateUI(); },
    updateUI() {
        const d = sharingData[i18n.getLang()] || sharingData.zh;
        this.setData({
            title: d.title, intro: d.intro, templateLabel: d.templateLabel,
            whenLabel: d.whenLabel, whenPlaceholder: d.whenPlaceholder,
            interpretLabel: d.interpretLabel, interpretPlaceholder: d.interpretPlaceholder,
            feelLabel: d.feelLabel, feelPlaceholder: d.feelPlaceholder,
            wantLabel: d.wantLabel, wantPlaceholder: d.wantPlaceholder,
            generateBtn: d.generateBtn, resultLabel: d.resultLabel, copyBtn: d.copyBtn,
            examplesTitle: d.examplesTitle, examples: d.examples, tips: d.tips
        });
    },
    onFormInput(e) { this.setData({ [e.currentTarget.dataset.field]: e.detail.value }); },
    generate() {
        const d = sharingData[i18n.getLang()] || sharingData.zh;
        const { formWhen, formInterpret, formFeel, formWant } = this.data;
        if (!formWhen && !formFeel) return;
        this.setData({ result: `${d.whenLabel}${formWhen}，${d.interpretLabel}${formInterpret}，${d.feelLabel}${formFeel}，${d.wantLabel}${formWant}。` });
    },
    copyResult() {
        wx.setClipboardData({ data: this.data.result, success: () => wx.showToast({ title: i18n.t('common.copied'), icon: 'none' }) });
    }
});
