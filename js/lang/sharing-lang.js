/* 分享句式翻译 - v2.2.0 增强版 */
window.SharingLang = {
    zh: {
        title: '分享句式',
        intro: 'T语言是一种真诚表达感受的沟通方式。用下面的模板练习，生成后可直接复制到聊天软件发送。',
        template: {
            label: '📝 T语言模板',
            when: '当你',
            whenPlaceholder: '描述对方的具体行为……',
            interpret: '我的诠释是',
            interpretPlaceholder: '我怎么理解这件事……',
            feel: '我感到',
            feelPlaceholder: '我的情绪感受……',
            want: '我希望',
            wantPlaceholder: '我的期望或请求……',
            generate: '生成句式',
            result: '生成的句式',
            copyBtn: '📋 复制到剪贴板'
        },
        shareHint: '✅ 已复制！可粘贴到微信、WhatsApp等聊天软件发送',
        copiedMsg: '已复制',
        scenesTitle: '💡 使用场景',
        scenes: [
            { icon: '💑', name: '亲密关系', example: '当你回家后一直看手机不跟我说话，我的诠释是我在你心里不重要，我感到孤独和失落，我希望我们每天能有15分钟不看手机的交流时间。' },
            { icon: '👨‍👩‍👧', name: '亲子沟通', example: '当你考试没考好把试卷藏起来，我的诠释是你害怕我的反应，我感到心疼和自责，我希望你知道不管成绩如何我都爱你。' },
            { icon: '💼', name: '职场沟通', example: '当你在会议上打断我的发言，我的诠释是我的意见不被重视，我感到沮丧和不被尊重，我希望我能把话说完再讨论。' },
            { icon: '👫', name: '朋友关系', example: '当你连续三次取消我们的约会，我的诠释是你不想见我了，我感到受伤和困惑，我希望你能告诉我真实的原因。' }
        ],
        tips: [
            { title: '🎯 保持在当下', desc: '使用具体的、最近发生的事件，而不是"你总是"或"你从来不"' },
            { title: '💡 区分感受和想法', desc: '"我觉得你不在乎我"是想法；"我感到失落和不安"是感受' },
            { title: '🌿 保持温和的语气', desc: '目标是被对方听见，而不是指责或说服' },
            { title: '⏸ 注意节奏', desc: '说完后给对方时间消化，不必急于得到回应' },
            { title: '🤝 对结果保持开放', desc: '对方可能不会按你期望的方式回应，这也是正常的' },
            { title: '📱 善用聊天工具', desc: '如果面对面表达有困难，可以先写下来通过聊天软件发送，这样可以更从容地组织语言' }
        ],
        examples: [
            '当你没有回我消息的时候，我的诠释是你不在意这次对话，我感到失落和不安，我希望你忙完后能告诉我一声。',
            '当你在我说话时看手机，我的诠释是我说的不够重要，我感到被忽视，我希望我们交谈时能放下手机。',
            '当你主动帮我分担家务，我的诠释是你在乎我的感受，我感到温暖和被爱，我希望我们能继续这样互相支持。',
            '当你问我"今天过得怎么样"并认真听我回答，我的诠释是你真的关心我，我感到安全和被重视，我希望我们能保持这样的对话。'
        ],
        examplesTitle: '💬 完整示例'
    },
    en: {
        title: 'T-Language',
        intro: 'T-Language is a communication method for expressing feelings authentically. Generate and copy to share via chat apps.',
        template: {
            label: '📝 T-Language Template',
            when: 'When you',
            whenPlaceholder: 'Describe the specific behavior...',
            interpret: 'My interpretation is',
            interpretPlaceholder: 'How I understand this...',
            feel: 'I feel',
            feelPlaceholder: 'My emotional feeling...',
            want: 'I wish',
            wantPlaceholder: 'My expectation or request...',
            generate: 'Generate',
            result: 'Generated sentence',
            copyBtn: '📋 Copy to clipboard'
        },
        shareHint: '✅ Copied! Paste into WhatsApp, Messenger, or any chat app to send',
        copiedMsg: 'Copied',
        scenesTitle: '💡 Use Cases',
        scenes: [
            { icon: '💑', name: 'Romantic Relationship', example: 'When you came home and kept scrolling your phone without talking to me, my interpretation is that I\'m not important to you, I feel lonely and disappointed, I wish we could have 15 minutes of phone-free conversation each day.' },
            { icon: '👨‍👩‍👧', name: 'Parenting', example: 'When you hid your test paper because of a low score, my interpretation is you\'re afraid of my reaction, I feel heartbroken and regretful, I wish you knew I love you regardless of your grades.' },
            { icon: '💼', name: 'Workplace', example: 'When you interrupted me during the meeting, my interpretation is my opinion isn\'t valued, I feel frustrated and disrespected, I wish I could finish my point before we discuss.' },
            { icon: '👫', name: 'Friendship', example: 'When you cancelled our plans three times in a row, my interpretation is you don\'t want to see me anymore, I feel hurt and confused, I wish you could tell me the real reason.' }
        ],
        tips: [
            { title: '🎯 Stay in the present', desc: 'Use specific, recent events instead of "you always" or "you never"' },
            { title: '💡 Separate feelings from thoughts', desc: '"I think you don\'t care" is a thought; "I feel sad and uneasy" is a feeling' },
            { title: '🌿 Keep a gentle tone', desc: 'The goal is to be heard, not to blame or convince' },
            { title: '⏸ Mind the pace', desc: 'After sharing, give the other person time to process' },
            { title: '🤝 Stay open to outcomes', desc: 'They may not respond as expected, and that\'s okay' },
            { title: '📱 Use chat tools wisely', desc: 'If face-to-face expression is difficult, write it down first and send via chat app for more composed communication' }
        ],
        examples: [
            'When you didn\'t reply to my message, my interpretation is that you didn\'t care about our conversation, I felt disappointed and uneasy, I wish you could let me know when you\'re busy.',
            'When you looked at your phone while I was talking, my interpretation is that what I said wasn\'t important enough, I felt ignored, I wish we could put our phones down during conversations.',
            'When you helped me with the housework without being asked, my interpretation is that you care about my feelings, I felt warm and loved, I wish we could keep supporting each other like this.',
            'When you asked "How was your day?" and really listened to my answer, my interpretation is you truly care, I felt safe and valued, I wish we could keep having conversations like this.'
        ],
        examplesTitle: '💬 Full Examples'
    },
    ja: {
        title: 'T言語',
        intro: 'T言語は感情を誠実に表現するコミュニケーション方法です。生成してチャットアプリにコピーして送信。',
        template: {
            label: '📝 T言語テンプレート',
            when: 'あなたが',
            whenPlaceholder: '具体的な行動を描写…',
            interpret: '私の解釈は',
            interpretPlaceholder: 'これをどう理解したか…',
            feel: '私は感じる',
            feelPlaceholder: '私の感情…',
            want: '私は望む',
            wantPlaceholder: '私の期待やお願い…',
            generate: '生成する',
            result: '生成された文',
            copyBtn: '📋 コピー'
        },
        shareHint: '✅ コピーしました！LINEやメッセンジャーに貼り付けて送信できます',
        copiedMsg: 'コピー済',
        scenesTitle: '💡 使用シーン',
        scenes: [
            { icon: '💑', name: 'パートナー', example: 'あなたが帰宅後ずっとスマホを見ていた時、私の解釈は私は大切ではないということ、私は寂しくて落胆した、毎日15分スマホなしで話す時間が欲しい。' },
            { icon: '💼', name: '職場', example: 'あなたが会議で私の発言を遮った時、私の解釈は私の意見は重視されていないということ、私は不満と不敬を感じた、意見を言い終えてから議論してほしい。' }
        ],
        tips: [
            { title: '🎯 今に留まる', desc: '「いつも」「絶対に」ではなく、具体的で最近の出来事を使って' },
            { title: '💡 感情と考えを区別する', desc: '「あなたは気にしてないと思う」は考え；「寂しくて不安」は感情' },
            { title: '🌿 穏やかな口調を保つ', desc: '目標は聞いてもらうこと、責めたり説得することではない' },
            { title: '⏸ ペースに注意', desc: '伝えた後、相手に消化する時間を与えて' },
            { title: '🤝 結果にオープンでいる', desc: '期待通りの反応でなくても、それは普通のこと' },
            { title: '📱 チャットを活用', desc: '対面が難しければ、まず書いてチャットで送るのも良い方法' }
        ],
        examples: [
            'あなたがメッセージに返信しなかった時、私の解釈はこの会話を大切にしていないということ、私は寂しくて不安を感じた、忙しい時は一言教えてほしい。',
            'あなたが私の話中にスマホを見た時、私の解釈は私の話は重要でないということ、私は無視されたと感じた、会話中はスマホを置いてほしい。'
        ],
        examplesTitle: '💬 例文'
    },
    th: {
        title: 'ภาษา T',
        intro: 'ภาษา T คือวิธีสื่อสารเพื่อแสดงความรู้สึกอย่างจริงใจ สร้างและคัดลอกไปส่งทางแอปแชท',
        template: {
            label: '📝 แม่แบบภาษา T',
            when: 'เมื่อคุณ',
            whenPlaceholder: 'อธิบายพฤติกรรมเฉพาะ...',
            interpret: 'การตีความของฉันคือ',
            interpretPlaceholder: 'ฉันเข้าใจเรื่องนี้ว่า...',
            feel: 'ฉันรู้สึก',
            feelPlaceholder: 'อารมณ์ที่รู้สึก...',
            want: 'ฉันหวังว่า',
            wantPlaceholder: 'ความคาดหวังหรือคำขอ...',
            generate: 'สร้าง',
            result: 'ประโยคที่สร้าง',
            copyBtn: '📋 คัดลอก'
        },
        shareHint: '✅ คัดลอกแล้ว! วางลงในไลน์หรือแอปแชทเพื่อส่ง',
        copiedMsg: 'คัดลอกแล้ว',
        scenesTitle: '💡 สถานการณ์ใช้งาน',
        scenes: [
            { icon: '💑', name: 'คู่รัก', example: 'เมื่อคุณกลับบ้านมาแล้วเล่นโทรศัพท์ตลอดไม่คุยกับฉัน การตีความของฉันคือฉันไม่สำคัญสำหรับคุณ ฉันรู้สึกเหงาและผิดหวัง ฉันหวังว่าเราจะมีเวลา 15 นาทีคุยกันโดยไม่เล่นโทรศัพท์' },
            { icon: '💼', name: 'ที่ทำงาน', example: 'เมื่อคุณขัดจังหวะฉันในที่ประชุม การตีความของฉันคือความคิดเห็นของฉันไม่สำคัญ ฉันรู้สึกหงุดหงิดและไม่ได้รับความเคารพ ฉันหวังว่าจะพูดจบก่อนแล้วค่อยอภิปราย' }
        ],
        tips: [
            { title: '🎯 อยู่กับปัจจุบัน', desc: 'ใช้เหตุการณ์เฉพาะล่าสุด ไม่ใช่ "คุณเสมอ" หรือ "คุณไม่เคย"' },
            { title: '💡 แยกความรู้สึกจากความคิด', desc: '"ฉันคิดว่าคุณไม่แคร์" คือความคิด "ฉันรู้สึกเศร้า" คือความรู้สึก' },
            { title: '🌿 รักษาน้ำเสียงอ่อนโยน', desc: 'เป้าหมายคือให้อีกคนได้ยิน ไม่ใช่กล่าวโทษ' },
            { title: '⏸ ใส่ใจจังหวะ', desc: 'หลังแบ่งปัน ให้เวลาอีกคนย่อย' },
            { title: '🤝 เปิดใจกับผลลัพธ์', desc: 'เขาอาจไม่ตอบสนองตามที่คาดหวัง และนั่นก็ปกติ' },
            { title: '📱 ใช้แอปแชท', desc: 'ถ้าพูดตรงๆ ยาก ลองเขียนก่อนแล้วส่งทางแชท' }
        ],
        examples: [
            'เมื่อคุณไม่ตอบข้อความฉัน การตีความของฉันคือคุณไม่ใส่ใจบทสนทนานี้ ฉันรู้สึกผิดหวังและไม่สบายใจ ฉันหวังว่าคุณจะบอกฉันเมื่อยุ่ง',
            'เมื่อคุณดูโทรศัพท์ขณะที่ฉันพูด การตีความของฉันคือสิ่งที่ฉันพูดไม่สำคัญพอ ฉันรู้สึกถูกเพิกเฉย ฉันหวังว่าเราจะวางโทรศัพท์ระหว่างสนทนา'
        ],
        examplesTitle: '💬 ตัวอย่าง'
    }
};
