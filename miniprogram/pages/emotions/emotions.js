const i18n = require('../../utils/i18n.js');
const auth = require('../../utils/auth.js');

// 完整的 91 条情绪数据（从 Web 版直接复用）
const emotionsDataZh = [
    { zh: '愤怒', en: 'enraged', type: 'negative', intensity: 5, scene: '当底线被严重践踏时', suggestions: ['找安全空间释放能量', '做剧烈运动', '深呼吸20次', '写下原因不评判'] },
    { zh: '恼火', en: 'pissed off', type: 'negative', intensity: 5, scene: '被反复挑衅时', suggestions: ['离开现场冷静', '洗冷水脸', '告诉自己这是正常的', '等情绪消退再回应'] },
    { zh: '生气', en: 'angry', type: 'negative', intensity: 4, scene: '期望落空时', suggestions: ['用T语言表达', '做10个深蹲', '问自己触动什么', '找人倾诉'] },
    { zh: '震惊', en: 'shocked', type: 'negative', intensity: 5, scene: '遭遇意想不到的事', suggestions: ['允许自己震惊', '做深呼吸', '找安全环境', '感受身体存在'] },
    { zh: '沮丧', en: 'frustrated', type: 'negative', intensity: 3, scene: '努力了但没成效', suggestions: ['回顾已有进步', '调整方法', '暂时放下', '请教他人'] },
    { zh: '焦虑', en: 'anxious', type: 'negative', intensity: 3, scene: '对未来不确定', suggestions: ['写下担忧清单', '做10分钟冥想', '注意力回到当下', '减少看手机'] },
    { zh: '担心', en: 'worried', type: 'negative', intensity: 2, scene: '关心的事可能出问题', suggestions: ['问自己现在能做什么', '做力所能及的准备', '信任对方', '做放松练习'] },
    { zh: '悲伤', en: 'sad', type: 'negative', intensity: 3, scene: '失去重要的人或事', suggestions: ['允许眼泪流出', '找安全的人诉说', '拥抱自己', '悲伤说明曾在乎'] },
    { zh: '低落', en: 'down', type: 'negative', intensity: 2, scene: '整体能量不高', suggestions: ['做轻度运动', '晒太阳10分钟', '吃健康食物', '不强迫自己开心'] },
    { zh: '孤独', en: 'lonely', type: 'negative', intensity: 3, scene: '感到被隔离', suggestions: ['联系老朋友', '去有人的地方', '尝试新社交', '与自己做朋友'] },
    { zh: '害怕', en: 'scared', type: 'negative', intensity: 4, scene: '面对未知或威胁', suggestions: ['找安全的人或地方', '问恐惧保护什么', '从小步骤开始', '回忆克服恐惧的经历'] },
    { zh: '紧张', en: 'tense', type: 'negative', intensity: 3, scene: '即将面临重要场合', suggestions: ['渐进式肌肉放松', '紧张说明在乎', '充分准备', '慢速深呼吸'] },
    { zh: '内疚', en: 'guilty', type: 'negative', intensity: 3, scene: '觉得辜负了期望', suggestions: ['检查内疚是否合理', '采取弥补行动', '原谅自己', '学会说不'] },
    { zh: '后悔', en: 'regretful', type: 'negative', intensity: 3, scene: '做了不该做的事', suggestions: ['不过度自责', '问自己学到什么', '如可以道歉', '原谅过去的自己'] },
    { zh: '失望', en: 'disappointed', type: 'negative', intensity: 3, scene: '结果和期望有落差', suggestions: ['允许自己失望', '审视期望是否合理', '寻找成长', '调整计划'] },
    { zh: '嫉妒', en: 'jealous', type: 'negative', intensity: 3, scene: '别人有自己想要的', suggestions: ['承认嫉妒不评判', '转化为动力', '列出已拥有的', '向对方学习'] },
    { zh: '疲惫', en: 'fatigued', type: 'negative', intensity: 2, scene: '长期透支后', suggestions: ['优质睡眠优先', '学会拒绝', '做恢复能量的事', '调整生活方式'] },
    { zh: '迷茫', en: 'uncertain', type: 'negative', intensity: 2, scene: '不知道方向', suggestions: ['写下知道和不知道的', '找有经验的人聊', '迷茫是转变的开始', '做好当下能做的'] },
    { zh: '无聊', en: 'bored', type: 'neutral', intensity: 1, scene: '缺乏刺激', suggestions: ['尝试新活动', '让头脑休息', '问自己渴望什么', '出去散步'] },
    { zh: '犹豫', en: 'hesitant', type: 'neutral', intensity: 2, scene: '面对选择不确定', suggestions: ['列出利弊', '听直觉的声音', '设决定截止时间', '先试试'] },
    { zh: '有保护心', en: 'protective', type: 'neutral', intensity: 2, scene: '想守护重要的人', suggestions: ['确认方式是对方需要的', '保护还是控制？', '信任对方能力', '用关心代替担忧'] },
    { zh: '惊讶', en: 'surprised', type: 'positive', intensity: 4, scene: '遇到意料之外的好事', suggestions: ['充分感受惊喜', '分享喜悦', '记录美好瞬间', '保持好奇心'] },
    { zh: '兴奋', en: 'excited', type: 'positive', intensity: 4, scene: '对即将发生的好事期待', suggestions: ['享受期待过程', '把能量用在准备', '分享期待', '保持开放心态'] },
    { zh: '喜悦', en: 'delighted', type: 'positive', intensity: 4, scene: '遇到令人高兴的事', suggestions: ['微笑感受喜悦', '感恩带来喜悦的人', '分享周围的人', '做更多喜悦的事'] },
    { zh: '骄傲', en: 'proud', type: 'positive', intensity: 4, scene: '为成就感到自豪', suggestions: ['对自己说你做到了', '庆祝每个小成就', '分享喜悦', '用自信面对挑战'] },
    { zh: '感恩', en: 'grateful', type: 'positive', intensity: 3, scene: '意识到拥有的一切', suggestions: ['每天写3件感恩的事', '向让你感恩的人表达', '把感恩变成习惯', '从小事发现感恩'] },
    { zh: '好奇', en: 'curious', type: 'positive', intensity: 3, scene: '对新事物感兴趣', suggestions: ['立即去探索', '保持提问习惯', '好奇心是智慧起源', '和不同人交流'] },
    { zh: '放松', en: 'relaxed', type: 'positive', intensity: 2, scene: '身心没有紧张', suggestions: ['享受当下轻松', '做创造性的事', '保持轻松节奏', '记住放松方法'] },
    { zh: '平和', en: 'peaceful', type: 'positive', intensity: 2, scene: '内心没有冲突', suggestions: ['做冥想深化平和', '让平和成为基调', '分享这份能量', '在平和中做决定'] },
    { zh: '满足', en: 'content', type: 'positive', intensity: 2, scene: '刚刚好的感觉', suggestions: ['享受够了的感觉', '不被比较打扰', '感恩拥有的', '在满足中成长'] },
    { zh: '温暖', en: 'warm', type: 'positive', intensity: 2, scene: '被关心或产生连接', suggestions: ['感受身体温暖', '表达感谢', '传递温暖', '珍惜连接'] },
    { zh: '宁静', en: 'serene', type: 'positive', intensity: 1, scene: '深层的平静和安宁', suggestions: ['在宁静中与自己对话', '做感恩冥想', '写日记', '把宁静作为家'] },
    { zh: '冷静', en: 'calm', type: 'positive', intensity: 1, scene: '情绪稳定头脑清晰', suggestions: ['用这状态做重要决策', '练习冥想', '观察自己', '帮助他人找到冷静'] },
];

function getEmotionName(e, i) {
    const lang = i18n.getLang();
    if (lang === 'zh') return e.zh;
    if (lang === 'en') return e.en;
    return e.zh;
}

function makeDots(n) {
    return '●'.repeat(n) + '○'.repeat(5 - n);
}

Page({
    data: {
        introText: '',
        filters: {},
        currentFilter: 'all',
        filteredEmotions: [],
        showModal: false,
        detail: {}
    },

    onLoad() {
        i18n.init();
        this.updateUI();
    },

    onShow() {
        this.updateUI();
    },

    updateUI() {
        this.setData({
            introText: { zh: '点击任意情绪，了解它出现的场景以及如何与它相处', en: 'Tap any emotion to learn when it appears and how to handle it', ja: '感情をタップして場面と対処法を確認', th: 'แตะอารมณ์ใดก็ได้เพื่อเรียนรู้' }[i18n.getLang()] || '点击任意情绪，了解它出现的场景以及如何与它相处',
            filters: {
                all: i18n.t('filters.all'),
                negative: i18n.t('filters.negative'),
                neutral: i18n.t('filters.neutral'),
                positive: i18n.t('filters.positive')
            }
        });
        this.applyFilter(this.data.currentFilter);
    },

    setFilter(e) {
        const filter = e.currentTarget.dataset.filter;
        this.setData({ currentFilter: filter });
        this.applyFilter(filter);
    },

    applyFilter(filter) {
        let data = emotionsDataZh;
        if (filter !== 'all') data = data.filter(e => e.type === filter);
        const filteredEmotions = data.map((e, i) => {
            const origIndex = emotionsDataZh.indexOf(e);
            return {
                origIndex,
                name: getEmotionName(e, origIndex),
                en: e.en,
                type: e.type,
                dots: makeDots(e.intensity)
            };
        });
        this.setData({ filteredEmotions });
    },

    showDetail(e) {
        const index = e.currentTarget.dataset.index;
        const em = emotionsDataZh[index];
        if (!em) return;

        this.setData({
            showModal: true,
            detail: {
                name: getEmotionName(em, index),
                en: em.en,
                dots: makeDots(em.intensity),
                intensityLabel: i18n.t('emotionDetail.intensity'),
                sceneLabel: i18n.t('emotionDetail.scene'),
                scene: em.scene,
                suggestionsLabel: i18n.t('emotionDetail.suggestions'),
                suggestions: em.suggestions,
                tagsLabel: i18n.t('emotionDetail.tags'),
                typeLabel: i18n.t('emotionTypes.' + em.type),
                intensityValue: em.intensity
            }
        });
    },

    closeModal() {
        this.setData({ showModal: false });
    },

    preventClose() {
        // 阻止事件冒泡
    }
});
