/* ============================================
   国际化核心引擎 - i18n.js
   支持中文/英文/日語/泰語
   ============================================ */

const I18n = (() => {
    const SUPPORTED = ['en', 'zh', 'ja', 'th'];
    const STORAGE_KEY = 'sa_lang';
    let currentLang = 'en';

    // ---- UI 通用翻译 ----
    const ui = {
        zh: {
            appName: '觉察●内在探索',
            splashTitle: '觉察●内在探索',
            splashSub: 'Being Yourself@知己心里',
            greeting: { morning: '早上好', noon: '中午好', afternoon: '下午好', evening: '晚上好' },
            greetingSuffix: '，今天你感觉如何？',
            dailyLabel: '✨ 今日觉察语',
            nav: { home: '首页', emotions: '情绪', meditation: '冥想', dialogue: '对话', more: '更多' },
            pages: {
                home: '觉察', emotions: '情绪罗盘', questioning: '深度发问',
                recall: '24h 回忆', meditation: '冥想空间', brain: '感受模式',
                dialogue: '觉察对话', actions: '行动建议', sharing: '分享句式',
                knowledge: '觉察理论', counselor: '导师链接'
            },
            cards: {
                emotions: { title: '情绪罗盘', desc: '我想理解我的感受' },
                questioning: { title: '深度探索', desc: '我想探索内心' },
                recall: { title: '24h 回忆', desc: '我想回顾今天的感受' },
                meditation: { title: '冥想空间', desc: '我需要安静下来' },
                brain: { title: '感受模式', desc: '我想走出头脑' },
                knowledge: { title: '一起学习成长', desc: '我想学习觉察方法' },
                counselor: { title: '导师链接', desc: '我需要专业支持' }
            },
            filters: { all: '全部', negative: '不舒服的感受', neutral: '中性', positive: '舒服的感受' },
            emotionDetail: { scene: '🎯 常见场景', suggestions: '💡 建议方法', tags: '🏷️ 相关标签', intensity: '强度' },
            emotionTypes: { negative: '不舒服的感受', positive: '舒服的感受', neutral: '中性感受' },
            back: '返回',
            auth: {
                loginTitle: '登录觉察',
                loginDesc: '请输入你的用户名和PIN码',
                username: '用户名（2-20位字符）',
                pin: 'PIN码（4位数字）',
                login: '登录',
                register: '注册新账号',
                switchToLogin: '已有账号？登录',
                switchToRegister: '没有账号？注册',
                registerTitle: '注册觉察',
                registerDesc: '创建你的觉察账号',
                error: { usernameFormat: '用户名需要2-20位字符（中英文/数字）', pinFormat: 'PIN码需要4位数字', wrongCredentials: '用户名或PIN码错误', userExists: '该用户名已被注册', registerSuccess: '注册成功！请登录' },
                loginRequired: '此功能需要登录',
                loggedAs: '当前用户',
                logout: '退出'
            },
            common: { save: '💾 保存', copy: '📋 复制到剪贴板', copied: '已复制到剪贴板 ✓', saved: '已保存 ✓', writeHere: '在这里写下你的回答……', sendPlaceholder: '写下你的想法……' },
            langName: '中文'
        },
        en: {
            appName: 'Awareness',
            splashTitle: 'Awareness',
            splashSub: 'Look within, see your authentic self',
            greeting: { morning: 'Good morning', noon: 'Good afternoon', afternoon: 'Good afternoon', evening: 'Good evening' },
            greetingSuffix: ', how do you feel today?',
            dailyLabel: '✨ Daily Awareness',
            nav: { home: 'Home', emotions: 'Emotions', meditation: 'Meditate', dialogue: 'Talk', more: 'More' },
            pages: {
                home: 'Awareness', emotions: 'Emotion Compass', questioning: 'Deep Inquiry',
                recall: '24h Recall', meditation: 'Meditation', brain: 'Feeling Mode',
                dialogue: 'Inner Dialogue', actions: 'Action Tips', sharing: 'T-Language',
                knowledge: 'Awareness Theory', counselor: 'Mentor Connect'
            },
            cards: {
                emotions: { title: 'Emotion Compass', desc: 'I want to understand my feelings' },
                questioning: { title: 'Deep Inquiry', desc: 'I want to explore within' },
                recall: { title: '24h Recall', desc: 'I want to review today\'s feelings' },
                meditation: { title: 'Meditation', desc: 'I need to calm down' },
                brain: { title: 'Feeling Mode', desc: 'I want to get out of my head' },
                knowledge: { title: 'Learn & Grow Together', desc: 'I want to learn awareness methods' },
                counselor: { title: 'Mentor Connect', desc: 'I need professional support' }
            },
            filters: { all: 'All', negative: 'Uncomfortable', neutral: 'Neutral', positive: 'Comfortable' },
            emotionDetail: { scene: '🎯 Common Scenes', suggestions: '💡 Suggestions', tags: '🏷️ Tags', intensity: 'Intensity' },
            emotionTypes: { negative: 'Uncomfortable', positive: 'Comfortable', neutral: 'Neutral' },
            back: 'Back',
            auth: {
                loginTitle: 'Login',
                loginDesc: 'Enter your username and PIN',
                username: 'Username (2-20 characters)',
                pin: 'PIN (4 digits)',
                login: 'Login',
                register: 'Register',
                switchToLogin: 'Have account? Login',
                switchToRegister: 'No account? Register',
                registerTitle: 'Register',
                registerDesc: 'Create your awareness account',
                error: { usernameFormat: 'Username must be 2-20 characters (letters/numbers/Chinese)', pinFormat: 'PIN must be 4 digits', wrongCredentials: 'Wrong username or PIN', userExists: 'Username already taken', registerSuccess: 'Registered! Please login' },
                loginRequired: 'Login required for this feature',
                loggedAs: 'User',
                logout: 'Logout'
            },
            common: { save: '💾 Save', copy: '📋 Copy', copied: 'Copied ✓', saved: 'Saved ✓', writeHere: 'Write your answer here...', sendPlaceholder: 'Write your thoughts...' },
            langName: 'English'
        },
        ja: {
            appName: '気づき',
            splashTitle: '気づき',
            splashSub: '内側を見つめ、本当の自分に出会う',
            greeting: { morning: 'おはようございます', noon: 'こんにちは', afternoon: 'こんにちは', evening: 'こんばんは' },
            greetingSuffix: '、今日の気分はいかがですか？',
            dailyLabel: '✨ 今日の気づき',
            nav: { home: 'ホーム', emotions: '感情', meditation: '瞑想', dialogue: '対話', more: 'その他' },
            pages: {
                home: '気づき', emotions: '感情コンパス', questioning: '深い問い',
                recall: '24時間振り返り', meditation: '瞑想空間', brain: '感覚モード',
                dialogue: '内なる対話', actions: 'アクション', sharing: 'T言語',
                knowledge: '気づき理論', counselor: 'メンター'
            },
            cards: {
                emotions: { title: '感情コンパス', desc: '自分の感情を理解したい' },
                questioning: { title: '深い問い', desc: '内心を探求したい' },
                recall: { title: '24時間振り返り', desc: '今日の感覚を振り返りたい' },
                meditation: { title: '瞑想空間', desc: '静かになりたい' },
                brain: { title: '感覚モード', desc: '頭から抜け出したい' },
                knowledge: { title: '一緒に学び成長', desc: '気づきの方法を学びたい' },
                counselor: { title: 'メンター', desc: '専門的なサポートが必要' }
            },
            filters: { all: '全て', negative: '不快な感情', neutral: '中性', positive: '快い感情' },
            emotionDetail: { scene: '🎯 よくある場面', suggestions: '💡 おすすめの方法', tags: '🏷️ タグ', intensity: '強度' },
            emotionTypes: { negative: '不快な感情', positive: '快い感情', neutral: '中性の感情' },
            back: '戻る',
            auth: {
                loginTitle: 'ログイン',
                loginDesc: 'ユーザー名とPINを入力',
                username: 'ユーザー名（2-20文字）',
                pin: 'PIN（数字4桁）',
                login: 'ログイン',
                register: '新規登録',
                switchToLogin: 'アカウントをお持ちの方',
                switchToRegister: 'アカウントをお持ちでない方',
                registerTitle: '新規登録',
                registerDesc: '気づきアカウントを作成',
                error: { usernameFormat: 'ユーザー名は2-20文字（英数字/漢字）', pinFormat: 'PINは数字4桁', wrongCredentials: 'ユーザー名またはPINが違います', userExists: 'このユーザー名は登録済み', registerSuccess: '登録完了！ログインしてください' },
                loginRequired: 'この機能にはログインが必要です',
                loggedAs: 'ユーザー',
                logout: 'ログアウト'
            },
            common: { save: '💾 保存', copy: '📋 コピー', copied: 'コピーしました ✓', saved: '保存しました ✓', writeHere: 'ここに回答を書いてください…', sendPlaceholder: '思いを書いてください…' },
            langName: '日本語'
        },
        th: {
            appName: 'การตระหนักรู้',
            splashTitle: 'ตระหนักรู้',
            splashSub: 'มองเข้าไปข้างใน พบตัวตนที่แท้จริง',
            greeting: { morning: 'สวัสดีตอนเช้า', noon: 'สวัสดีตอนเที่ยง', afternoon: 'สวัสดีตอนบ่าย', evening: 'สวัสดีตอนเย็น' },
            greetingSuffix: ' วันนี้คุณรู้สึกอย่างไร?',
            dailyLabel: '✨ คำคมวันนี้',
            nav: { home: 'หน้าแรก', emotions: 'อารมณ์', meditation: 'สมาธิ', dialogue: 'สนทนา', more: 'เพิ่มเติม' },
            pages: {
                home: 'การตระหนักรู้', emotions: 'เข็มทิศอารมณ์', questioning: 'คำถามลึก',
                recall: 'ทบทวน 24 ชม.', meditation: 'พื้นที่สมาธิ', brain: 'โหมดความรู้สึก',
                dialogue: 'บทสนทนาภายใน', actions: 'คำแนะนำ', sharing: 'ภาษา T',
                knowledge: 'ทฤษฎีการตระหนักรู้', counselor: 'เชื่อมต่อที่ปรึกษา'
            },
            cards: {
                emotions: { title: 'เข็มทิศอารมณ์', desc: 'ฉันอยากเข้าใจความรู้สึกของฉัน' },
                questioning: { title: 'คำถามลึก', desc: 'ฉันอยากสำรวจภายใน' },
                recall: { title: 'ทบทวน 24 ชม.', desc: 'ฉันอยากทบทวนความรู้สึกวันนี้' },
                meditation: { title: 'พื้นที่สมาธิ', desc: 'ฉันต้องการความสงบ' },
                brain: { title: 'โหมดความรู้สึก', desc: 'ฉันอยากออกจากหัว' },
                knowledge: { title: 'เรียนรู้และเติบโตด้วยกัน', desc: 'ฉันอยากเรียนรู้วิธีตระหนักรู้' },
                counselor: { title: 'เชื่อมต่อที่ปรึกษา', desc: 'ฉันต้องการการสนับสนุน' }
            },
            filters: { all: 'ทั้งหมด', negative: 'ไม่สบายใจ', neutral: 'เป็นกลาง', positive: 'สบายใจ' },
            emotionDetail: { scene: '🎯 สถานการณ์ที่พบบ่อย', suggestions: '💡 คำแนะนำ', tags: '🏷️ แท็ก', intensity: 'ความเข้มข้น' },
            emotionTypes: { negative: 'ไม่สบายใจ', positive: 'สบายใจ', neutral: 'เป็นกลาง' },
            back: 'กลับ',
            auth: {
                loginTitle: 'เข้าสู่ระบบ',
                loginDesc: 'กรอกชื่อผู้ใช้และ PIN',
                username: 'ชื่อผู้ใช้ (2-20 ตัวอักษร)',
                pin: 'PIN (ตัวเลข 4 หลัก)',
                login: 'เข้าสู่ระบบ',
                register: 'ลงทะเบียน',
                switchToLogin: 'มีบัญชีแล้ว? เข้าสู่ระบบ',
                switchToRegister: 'ยังไม่มีบัญชี? ลงทะเบียน',
                registerTitle: 'ลงทะเบียน',
                registerDesc: 'สร้างบัญชีของคุณ',
                error: { usernameFormat: 'ชื่อผู้ใช้ต้องมี 2-20 ตัวอักษร', pinFormat: 'PIN ต้องเป็นตัวเลข 4 หลัก', wrongCredentials: 'ชื่อผู้ใช้หรือ PIN ไม่ถูกต้อง', userExists: 'ชื่อผู้ใช้นี้ถูกใช้แล้ว', registerSuccess: 'ลงทะเบียนสำเร็จ! กรุณาเข้าสู่ระบบ' },
                loginRequired: 'ฟีเจอร์นี้ต้องเข้าสู่ระบบ',
                loggedAs: 'ผู้ใช้',
                logout: 'ออกจากระบบ'
            },
            common: { save: '💾 บันทึก', copy: '📋 คัดลอก', copied: 'คัดลอกแล้ว ✓', saved: 'บันทึกแล้ว ✓', writeHere: 'เขียนคำตอบของคุณที่นี่...', sendPlaceholder: 'เขียนความคิดของคุณ...' },
            langName: 'ไทย'
        }
    };

    // ---- 每日觉察语（多语言） ----
    const dailyQuotes = {
        zh: [
            '你不需要修复自己——你只需要看见自己。',
            '感受没有对错，它只是在告诉你一些事情。',
            '当你说"我觉得"的时候，试着换成"我感到"。',
            '"我注意到……"是觉察最有力的开场白。',
            '悲伤说明你曾深深在乎过。',
            '愤怒的背后，通常藏着受伤的边界。',
            '你可以同时感到害怕和勇敢。',
            '不评判自己的情绪，就是最大的慈悲。',
            '当你停下来深呼吸的那一刻，觉察就开始了。',
            '你的身体比你的头脑更诚实。',
            '放下"应该"，拥抱"此刻"。',
            '脆弱不是软弱，而是连接的入口。',
            '每一种情绪都有它存在的意义和智慧。',
            '在关系中，被听见比被理解更重要。',
            '"我不知道"也是一个有价值的答案。',
        ],
        en: [
            'You don\'t need to fix yourself — you just need to see yourself.',
            'Feelings are neither right nor wrong. They\'re just telling you something.',
            'When you say "I think", try switching to "I feel".',
            '"I notice that..." is the most powerful start to awareness.',
            'Sadness means you once cared deeply.',
            'Behind anger, there\'s usually a wounded boundary.',
            'You can feel scared and brave at the same time.',
            'Not judging your emotions is the greatest compassion.',
            'The moment you pause and breathe deeply, awareness begins.',
            'Your body is more honest than your mind.',
            'Let go of "should", embrace "right now".',
            'Vulnerability is not weakness, it\'s the doorway to connection.',
            'Every emotion has its meaning and wisdom.',
            'In relationships, being heard matters more than being understood.',
            '"I don\'t know" is also a valuable answer.',
        ],
        ja: [
            '自分を修正する必要はない——ただ自分を見ればいい。',
            '感情に正しいも間違いもない。それはただ何かを伝えている。',
            '「思う」を「感じる」に変えてみよう。',
            '「気づいたのは…」は気づきの最も力強い始まり。',
            '悲しみは、あなたが深く大切にしていた証。',
            '怒りの裏には、傷ついた境界線がある。',
            '怖いと勇敢を同時に感じることができる。',
            '自分の感情を裁かないことが、最大の慈悲。',
            '立ち止まって深呼吸した瞬間、気づきが始まる。',
            '体は心よりも正直です。',
            '「べき」を手放し、「今」を抱きしめよう。',
            '脆さは弱さではなく、つながりへの入り口。',
            'すべての感情には意味と知恵がある。',
            '関係において、理解されるより聞いてもらうことが大切。',
            '「わからない」も価値ある答え。',
        ],
        th: [
            'คุณไม่จำเป็นต้องแก้ไขตัวเอง — แค่มองเห็นตัวเองก็พอ',
            'ความรู้สึกไม่มีถูกผิด มันแค่บอกอะไรบางอย่างกับคุณ',
            'เมื่อคุณพูดว่า "ฉันคิดว่า" ลองเปลี่ยนเป็น "ฉันรู้สึกว่า"',
            '"ฉันสังเกตว่า..." คือจุดเริ่มต้นที่ทรงพลังที่สุดของการตระหนักรู้',
            'ความเศร้าหมายความว่าคุณเคยใส่ใจอย่างลึกซึ้ง',
            'เบื้องหลังความโกรธ มักซ่อนขอบเขตที่ถูกทำร้าย',
            'คุณสามารถรู้สึกกลัวและกล้าหาญไปพร้อมกันได้',
            'การไม่ตัดสินอารมณ์ของตัวเองคือความเมตตาที่ยิ่งใหญ่ที่สุด',
            'ช่วงเวลาที่คุณหยุดและหายใจลึก การตระหนักรู้ก็เริ่มต้น',
            'ร่างกายของคุณซื่อสัตย์กว่าจิตใจ',
            'ปล่อย "ควร" กอด "ตอนนี้"',
            'ความเปราะบางไม่ใช่ความอ่อนแอ แต่เป็นประตูสู่การเชื่อมต่อ',
            'ทุกอารมณ์มีความหมายและปัญญาของมัน',
            'ในความสัมพันธ์ การได้ยินสำคัญกว่าการเข้าใจ',
            '"ไม่รู้" ก็เป็นคำตอบที่มีคุณค่า',
        ]
    };

    // ---- 核心方法 ----
    function init() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && SUPPORTED.includes(saved)) {
            currentLang = saved;
        } else {
            // Auto-detect from browser
            const browserLang = navigator.language?.slice(0, 2);
            if (SUPPORTED.includes(browserLang)) currentLang = browserLang;
        }
        document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : currentLang === 'ja' ? 'ja' : currentLang === 'th' ? 'th' : 'en';
    }

    function getLang() { return currentLang; }

    function setLang(lang) {
        if (!SUPPORTED.includes(lang)) return;
        currentLang = lang;
        localStorage.setItem(STORAGE_KEY, lang);
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
        updateDOM();
        window.dispatchEvent(new CustomEvent('langChanged', { detail: { lang } }));
    }

    function t(key) {
        const keys = key.split('.');
        let val = ui[currentLang];
        for (const k of keys) {
            if (val && typeof val === 'object' && k in val) val = val[k];
            else return key; // fallback to key
        }
        return typeof val === 'string' ? val : key;
    }

    function getDailyQuotes() {
        return dailyQuotes[currentLang] || dailyQuotes.zh;
    }

    function updateDOM() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const text = t(key);
            if (text !== key) el.textContent = text;
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const text = t(key);
            if (text !== key) el.placeholder = text;
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const key = el.getAttribute('data-i18n-aria');
            const text = t(key);
            if (text !== key) el.setAttribute('aria-label', text);
        });
    }

    // Translate for a specific language (not current)
    function tLang(key, lang) {
        const keys = key.split('.');
        let val = ui[lang] || ui.zh;
        for (const k of keys) {
            if (val && typeof val === 'object' && k in val) val = val[k];
            else return key;
        }
        return typeof val === 'string' ? val : key;
    }

    return { init, getLang, setLang, t, tLang, getDailyQuotes, updateDOM, SUPPORTED };
})();
