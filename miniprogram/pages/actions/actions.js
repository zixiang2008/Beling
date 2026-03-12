const i18n = require('../../utils/i18n.js');
const actionsData = {
    zh: {
        title: '行动建议', intro: '当头脑太吵的时候，用身体来帮助自己安静下来。', actions: [
            { title: '🏃 去散步', desc: '不带目的地走路20分钟。注意脚步、呼吸和周围的声音。让身体的节奏带领你回到当下。' },
            { title: '🧘 拉伸身体', desc: '做5分钟简单的拉伸。感受每一根肌肉被拉伸时的感觉。不需要完美，只需要感受。' },
            { title: '💧 洗手冥想', desc: '认真地洗一次手。感受水的温度、肥皂的质感、手指间的摩擦。这是最简单的正念练习。' },
            { title: '🎵 听一首歌', desc: '选一首你喜欢的音乐，闭上眼睛完整地听完。不做别的，只是听。' },
            { title: '✍️ 自由书写', desc: '拿出纸笔，写5分钟。不停地写，不要修改，想到什么写什么。写完不用看。' },
            { title: '🌳 接触自然', desc: '去有绿色植物的地方。触摸树叶，感受风，闻闻泥土的味道。大自然是最好的治愈师。' }
        ]
    },
    en: {
        title: 'Action Suggestions', intro: 'When your mind is too noisy, use your body to quiet down.', actions: [
            { title: '🏃 Go for a Walk', desc: 'Walk without destination for 20 minutes. Notice your steps, breathing, and surrounding sounds.' },
            { title: '🧘 Stretch', desc: 'Do 5 minutes of simple stretching. Feel each muscle as it stretches.' },
            { title: '💧 Mindful Hand Washing', desc: 'Wash your hands mindfully. Feel the water temperature, soap texture, friction between fingers.' },
            { title: '🎵 Listen to a Song', desc: 'Choose a song you love. Close your eyes and listen fully.' },
            { title: '✍️ Free Writing', desc: 'Write for 5 minutes non-stop. Don\'t edit, just write whatever comes to mind.' },
            { title: '🌳 Touch Nature', desc: 'Go somewhere with plants. Touch leaves, feel the wind, smell the earth.' }
        ]
    },
    ja: {
        title: 'アクション', intro: '頭がうるさい時、体を使って静かになる。', actions: [
            { title: '🏃 散歩', desc: '目的なく20分歩く。足音、呼吸、周りの音に注意。' },
            { title: '🧘 ストレッチ', desc: '5分間シンプルなストレッチ。筋肉が伸びる感覚を味わう。' },
            { title: '💧 マインドフル手洗い', desc: '丁寧に手を洗う。水の温度、石鹸の質感を感じて。' },
            { title: '🎵 一曲聴く', desc: '好きな曲を目を閉じて最後まで聴く。' },
            { title: '✍️ フリーライティング', desc: '5分間止まらずに書く。修正せず浮かんだことを書く。' },
            { title: '🌳 自然に触れる', desc: '緑のある場所へ。葉に触り、風を感じ、土の匂いを嗅ぐ。' }
        ]
    },
    th: {
        title: 'คำแนะนำการกระทำ', intro: 'เมื่อหัวสมองเสียงดังเกินไป ใช้ร่างกายช่วยให้สงบ', actions: [
            { title: '🏃 ไปเดิน', desc: 'เดินโดยไม่มีจุดหมาย 20 นาที สังเกตก้าวเท้า ลมหายใจ เสียงรอบข้าง' },
            { title: '🧘 ยืดเหยียด', desc: 'ทำสเตรชง่ายๆ 5 นาที รู้สึกถึงกล้ามเนื้อที่ถูกยืด' },
            { title: '💧 ล้างมืออย่างมีสติ', desc: 'ล้างมืออย่างตั้งใจ รู้สึกถึงอุณหภูมิน้ำ เนื้อสบู่' },
            { title: '🎵 ฟังเพลง', desc: 'เลือกเพลงที่ชอบ หลับตาฟังจนจบ' },
            { title: '✍️ เขียนอิสระ', desc: 'เขียน 5 นาทีไม่หยุด ไม่แก้ไข คิดอะไรเขียนอันนั้น' },
            { title: '🌳 สัมผัสธรรมชาติ', desc: 'ไปที่มีต้นไม้ สัมผัสใบไม้ รู้สึกลม ดมกลิ่นดิน' }
        ]
    }
};
Page({
    data: { title: '', intro: '', actions: [] },
    onLoad() { i18n.init(); this.updateUI(); },
    onShow() { this.updateUI(); },
    updateUI() { const d = actionsData[i18n.getLang()] || actionsData.zh; this.setData({ title: d.title, intro: d.intro, actions: d.actions }); }
});
