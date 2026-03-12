const i18n = require('../../utils/i18n.js');
const brainData = {
    zh: {
        title: '感受模式', intro: '帮助你从"思考头脑"切换到"感受身体"。每个练习都是一个从左脑到右脑的桥梁。', exercises: [
            { title: '🖐️ 五指触碰', desc: '闭上眼睛，用大拇指依次触碰其他四根手指。感受每次接触的温度和压力。不要用头脑去想，只是感受。' },
            { title: '👂 声音觉察', desc: '闭上眼睛30秒，听到多少种声音？不要命名它们，只是听。远处的、近处的、身体内部的。' },
            { title: '🫁 呼吸观察', desc: '不改变呼吸，只是观察：空气从哪里进入？经过哪些地方？温度如何？' },
            { title: '🦶 脚底觉察', desc: '站起来，感受脚底和地面的接触。重心在哪里？前脚掌还是后脚跟？' },
            { title: '✋ 身体扫描', desc: '从头顶开始，慢慢往下扫描。哪里紧？哪里放松？哪里有温度？不判断，只是注意。' }
        ]
    },
    en: {
        title: 'Feeling Mode', intro: 'Shift from "thinking mind" to "feeling body". Each exercise bridges left brain to right brain.', exercises: [
            { title: '🖐️ Five-Finger Touch', desc: 'Close eyes. Touch each finger with your thumb. Feel the temperature and pressure of each contact.' },
            { title: '👂 Sound Awareness', desc: 'Close eyes for 30 seconds. How many sounds? Don\'t name them, just listen.' },
            { title: '🫁 Breath Observation', desc: 'Don\'t change your breathing, just observe: Where does air enter? What\'s the temperature?' },
            { title: '🦶 Foot Awareness', desc: 'Stand up. Feel your feet touching the ground. Where is your center of gravity?' },
            { title: '✋ Body Scan', desc: 'Start from the top of your head, slowly scan downward. What\'s tight? Relaxed? Warm?' }
        ]
    },
    ja: {
        title: '感覚モード', intro: '「考える頭」から「感じる体」へのシフト。', exercises: [
            { title: '🖐️ 五本指タッチ', desc: '目を閉じて、親指で他の指を順番に触れてください。温度と圧力を感じて。' },
            { title: '👂 音の気づき', desc: '目を閉じて30秒。いくつの音が聞こえますか？名前をつけずただ聞いて。' },
            { title: '🫁 呼吸の観察', desc: '呼吸を変えずに観察：空気はどこから入る？温度は？' },
            { title: '🦶 足裏の気づき', desc: '立ち上がって。足裏と地面の接触を感じて。重心はどこ？' },
            { title: '✋ ボディスキャン', desc: '頭のてっぺんから下へゆっくりスキャン。どこが緊張？リラックス？' }
        ]
    },
    th: {
        title: 'โหมดรับรู้', intro: 'เปลี่ยนจาก "สมองคิด" เป็น "ร่างกายรู้สึก"', exercises: [
            { title: '🖐️ สัมผัสนิ้ว', desc: 'หลับตา ใช้นิ้วโป้งแตะนิ้วอื่นทีละนิ้ว รู้สึกถึงอุณหภูมิและแรงกด' },
            { title: '👂 การตระหนักรู้เสียง', desc: 'หลับตา 30 วินาที ได้ยินกี่เสียง? ไม่ต้องตั้งชื่อ แค่ฟัง' },
            { title: '🫁 สังเกตลมหายใจ', desc: 'ไม่ต้องเปลี่ยนลมหายใจ แค่สังเกต อากาศเข้าจากไหน? อุณหภูมิเป็นอย่างไร?' },
            { title: '🦶 การรับรู้ที่เท้า', desc: 'ยืนขึ้น รู้สึกถึงเท้าที่สัมผัสพื้น จุดศูนย์ถ่วงอยู่ไหน?' },
            { title: '✋ สแกนร่างกาย', desc: 'เริ่มจากศีรษะ สแกนลงช้าๆ ตรงไหนตึง? ผ่อนคลาย? อุ่น?' }
        ]
    }
};
Page({
    data: { title: '', intro: '', exercises: [] },
    onLoad() { i18n.init(); this.updateUI(); },
    onShow() { this.updateUI(); },
    updateUI() { const d = brainData[i18n.getLang()] || brainData.zh; this.setData({ title: d.title, intro: d.intro, exercises: d.exercises }); }
});
