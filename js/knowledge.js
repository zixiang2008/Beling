/* ============================================
   专业知识库 - knowledge.js
   一起学习成长 · 身心灵疗愈体系
   ============================================ */

const KnowledgeModule = (() => {
    // --- 详细说明数据 (hover tooltip + click expand) ---
    const details = {
        zh: {
            methods: {
                'Compassionate Inquiry': {
                    tooltip: '由加拿大著名医师 Gabor Maté 博士创立的身心治疗方法',
                    detail: `<h4>💜 Compassionate Inquiry · 慈悲探询</h4>
                    <p><strong>创始人：</strong>Dr. Gabor Maté，加拿大匈牙利裔医师，成瘾与创伤领域权威。</p>
                    <p><strong>核心理念：</strong>在安全、非评判的临在中，温和地揭示隐藏在症状和行为模式之下的无意识信念。这些信念通常形成于童年，成为我们看待自己和世界的滤镜。</p>
                    <p><strong>工作方式：</strong>治疗师通过倾听身体信号、追踪情绪反应，引导来访者觉察"什么是你真正相信的？"和"这个信念是什么时候形成的？"，从而触碰痛苦的根源。</p>
                    <p><strong>适合人群：</strong>经历成瘾、慢性疼痛、情绪困扰、关系模式重复的人。</p>
                    <p><strong>代表著作：</strong>《When the Body Says No》《The Myth of Normal》</p>`
                },
                'Internal Family System': {
                    tooltip: '理查德·施瓦茨博士创立的内在家族系统疗法',
                    detail: `<h4>🪞 Internal Family Systems (IFS) · 内在家族系统</h4>
                    <p><strong>创始人：</strong>Dr. Richard Schwartz，美国家庭治疗师，20世纪80年代创立IFS。</p>
                    <p><strong>核心理念：</strong>每个人的心智都包含多个"内在部分"（sub-personalities），包括：</p>
                    <ul>
                        <li><strong>保护者（Protectors）</strong>— 管理者(Managers)和救火员(Firefighters)</li>
                        <li><strong>流亡者（Exiles）</strong>— 被保护起来的受伤部分</li>
                        <li><strong>自性（Self）</strong>— 每个人天生具有的平静、慈悲、好奇的核心</li>
                    </ul>
                    <p><strong>工作方式：</strong>不试图消除或压制任何部分，而是通过Self的领导来认识、尊重和疗愈每一个内在部分。</p>
                    <p><strong>适合人群：</strong>内心冲突强烈、自我批评严重、经历过创伤的人。</p>`
                },
                'NARM': {
                    tooltip: '处理发展性创伤的神经情感关系模型',
                    detail: `<h4>🌊 NARM · 神经情感关系模型</h4>
                    <p><strong>创始人：</strong>Dr. Laurence Heller，美国临床心理学家。</p>
                    <p><strong>核心理念：</strong>NARM（NeuroAffective Relational Model）专注于五大核心需求的发展性创伤：</p>
                    <ul>
                        <li><strong>连接</strong> — 与生命和他人的连接感</li>
                        <li><strong>协调</strong> — 感知和满足自身需求的能力</li>
                        <li><strong>信任</strong> — 对自己和他人的健康依赖</li>
                        <li><strong>自主</strong> — 清晰的自我边界</li>
                        <li><strong>爱与性</strong> — 心的开放和亲密连接</li>
                    </ul>
                    <p><strong>工作方式：</strong>关注当下的身份认同模式和身体体验，而非回溯过去故事。温和地帮助来访者识别自适应生存策略如何限制了当下的生活。</p>`
                },
                'Shadow Constellation': {
                    tooltip: '整合身体觉察与家族系统排列的阴影工作',
                    detail: `<h4>🌑 Shadow Constellation · 阴影排列</h4>
                    <p><strong>创始人：</strong>Nir Esterman，以色列身心治疗师，融合海灵格家排与身体觉察。</p>
                    <p><strong>核心理念：</strong>"身体与阴影之道"——我们的身体承载着家族系统的无意识记忆。许多看不见的忠诚（如对父母痛苦的认同、未完成的家族命运）在暗中塑造我们的行为、选择和症状。</p>
                    <p><strong>工作方式：</strong>通过身体的感知和家族场域的排列，让这些隐藏的动力浮现，在看见的那一刻，转化就开始发生。</p>
                    <p><strong>适合人群：</strong>感觉被看不见的力量驱动、重复家族中的痛苦模式、有强烈的身体症状与家族故事相关的人。</p>`
                },
                'Holistic Life Coaching': {
                    tooltip: 'Alan Cohen 全人生活教练方法',
                    detail: `<h4>🌱 Holistic Life Coaching · 全人生活教练</h4>
                    <p><strong>代表人物：</strong>Alan Cohen，美国畅销书作家和生活教练导师。</p>
                    <p><strong>核心理念：</strong>疗愈不是终点，转变生活才是。当你不再被创伤和恐惧驱动，你需要学会如何从真实的自己出发，做出新的选择。</p>
                    <p><strong>工作方式：</strong></p>
                    <ul>
                        <li>澄清生命愿景和核心价值</li>
                        <li>识别自我限制的信念和模式</li>
                        <li>对齐日常选择与内在真相</li>
                        <li>整合身、心、灵的智慧于实际生活</li>
                    </ul>
                    <p><strong>适合人群：</strong>已经有了一定觉察基础，想将内在成长转化为外在改变的人。</p>
                    <p><strong>代表著作：</strong>《A Deep Breath of Life》《The Dragon Doesn't Live Here Anymore》</p>`
                },
                'Diamond Approach': {
                    tooltip: 'A.H. Almaas 创立的灵性探询道路',
                    detail: `<h4>💎 Diamond Approach · 钻石途径</h4>
                    <p><strong>创始人：</strong>A.H. Almaas（Hameed Ali），科威特裔美国灵性导师和心理学家。</p>
                    <p><strong>核心理念：</strong>每个人的本质（Essence）就像钻石的不同切面，包含各种纯净的品质——力量、慈悲、快乐、宁静。人格模式就像蒙在钻石上的灰尘。</p>
                    <p><strong>工作方式：</strong>通过"探询"（Inquiry）实践——一种融合了冥想觉察和心理探索的方法——温和地穿透人格的防御层，让本质品质自然显现。</p>
                    <p><strong>独特之处：</strong>不把灵性和心理分开，认为灵性成长必须包含对人格、情感和身体的深入理解。</p>
                    <p><strong>适合人群：</strong>有灵性追求、想要深入理解自我本质、愿意长期投入内在探索的人。</p>`
                }
            },
            areas: {
                '慢性疼痛与躯体症状恢复': {
                    tooltip: '揭示疼痛背后的情感密码',
                    detail: `<h4>💆 慢性疼痛与躯体症状恢复</h4>
                    <p>许多慢性疼痛并非单纯的生理问题。研究表明，未处理的情绪和创伤会以身体症状的形式表达——头痛、背痛、消化问题、自身免疫反应等。</p>
                    <p><strong>我们的方法：</strong></p>
                    <ul>
                        <li>倾听症状传递的信息，而非对抗它</li>
                        <li>识别身体中储存的情绪记忆</li>
                        <li>探索"保护性信念"如何维持疼痛模式</li>
                        <li>通过安全的身体觉察邀请神经系统的自然调节</li>
                    </ul>
                    <p><em>"当身体说不"——你无法用语言表达的，身体会替你说。</em></p>`
                },
                '情绪处理与创伤释放': {
                    tooltip: '安全地会见和释放深层情绪',
                    detail: `<h4>🌸 情绪处理与创伤释放</h4>
                    <p>大多数人学到的唯一情绪策略是"控制"或"推开"。但被压抑的情绪不会消失，它们会在身体中累积，以焦虑、抑郁、易怒或麻木的形式回来。</p>
                    <p><strong>我们的方法：</strong></p>
                    <ul>
                        <li>创造安全的容器，让情绪被看见和接纳</li>
                        <li>学习区分"情绪反应"和"情绪体验"</li>
                        <li>培养对强烈情绪的承受力（window of tolerance）</li>
                        <li>支持身体自然的释放过程——颤抖、哭泣、呼吸</li>
                    </ul>
                    <p><em>疗愈不是不再有感觉，而是能够安全地感受所有的感觉。</em></p>`
                },
                '自我探询与具身觉知': {
                    tooltip: '回到存在本身的深度探索',
                    detail: `<h4>🔍 自我探询与具身觉知</h4>
                    <p>自我探询不是头脑的分析，而是一种活生生的体验式探索。它问的不是"我应该怎样"，而是"我真正是谁？"</p>
                    <p><strong>我们的方法：</strong></p>
                    <ul>
                        <li><strong>临在探询</strong> — 在当下这一刻，什么是真实的？</li>
                        <li><strong>深层身体聆听</strong> — 不带议程地感受身体</li>
                        <li><strong>调谐临在</strong> — 与另一个人在深度临在中相互支持</li>
                    </ul>
                    <p><em>这不是获取更多关于自己的知识，而是体验"知道"之前的存在。</em></p>`
                }
            }
        },
        en: {
            methods: {
                'Compassionate Inquiry': {
                    tooltip: 'A somatic psychotherapy method by Dr. Gabor Maté',
                    detail: `<h4>💜 Compassionate Inquiry</h4>
                    <p><strong>Founder:</strong> Dr. Gabor Maté, Hungarian-Canadian physician, authority on addiction and trauma.</p>
                    <p><strong>Core Idea:</strong> Through safe, non-judgmental presence, gently reveals unconscious beliefs hidden beneath symptoms and behavior patterns. These beliefs typically form in childhood and become filters for how we see ourselves and the world.</p>
                    <p><strong>How It Works:</strong> Therapists listen to body signals, track emotional responses, guiding clients to ask: "What do you truly believe?" and "When did this belief form?" — touching the root of suffering.</p>
                    <p><strong>Key Works:</strong> <em>When the Body Says No</em>, <em>The Myth of Normal</em></p>`
                },
                'Internal Family System': {
                    tooltip: 'A trauma-informed modality mapping your inner parts',
                    detail: `<h4>🪞 Internal Family Systems (IFS)</h4>
                    <p><strong>Founder:</strong> Dr. Richard Schwartz, American family therapist.</p>
                    <p><strong>Core Idea:</strong> The mind contains multiple "inner parts": Protectors (Managers & Firefighters), Exiles (wounded parts), and the Self — an innate core of calm, compassion, and curiosity.</p>
                    <p><strong>How It Works:</strong> Instead of eliminating parts, IFS helps you befriend and heal each part through Self-leadership.</p>`
                },
                'NARM': {
                    tooltip: 'Body-centered approach for developmental trauma',
                    detail: `<h4>🌊 NARM · NeuroAffective Relational Model</h4>
                    <p><strong>Founder:</strong> Dr. Laurence Heller, American clinical psychologist.</p>
                    <p><strong>Core Idea:</strong> Focuses on 5 core needs: Connection, Attunement, Trust, Autonomy, and Love-Sexuality. When these needs weren't adequately met in development, adaptive survival strategies form.</p>
                    <p><strong>How It Works:</strong> Works with present-moment identity patterns and somatic experience rather than retelling past stories.</p>`
                },
                'Shadow Constellation': {
                    tooltip: 'Integrates body awareness with family systems work',
                    detail: `<h4>🌑 Shadow Constellation</h4>
                    <p><strong>Founder:</strong> Nir Esterman, Israeli somatic therapist combining Hellinger family constellations with body awareness.</p>
                    <p><strong>Core Idea:</strong> Our bodies carry unconscious memories from family systems. Hidden loyalties silently shape behavior, choices, and symptoms.</p>
                    <p><strong>How It Works:</strong> Through somatic perception and field constellations, hidden dynamics surface — and transformation begins in the seeing.</p>`
                },
                'Holistic Life Coaching': {
                    tooltip: 'Whole-person coaching for life transformation',
                    detail: `<h4>🌱 Holistic Life Coaching</h4>
                    <p><strong>Inspired by:</strong> Alan Cohen, American best-selling author and life coaching mentor.</p>
                    <p><strong>Core Idea:</strong> Healing isn't the destination — transforming your life is. When you're no longer driven by trauma and fear, you need to learn how to make new choices from your authentic self.</p>
                    <p><strong>Focus Areas:</strong> Life vision clarity, limiting beliefs, aligning daily choices with inner truth, integrating mind-body-spirit wisdom into practical living.</p>`
                },
                'Diamond Approach': {
                    tooltip: 'A path of spiritual inquiry by A.H. Almaas',
                    detail: `<h4>💎 Diamond Approach</h4>
                    <p><strong>Founder:</strong> A.H. Almaas (Hameed Ali), Kuwaiti-American spiritual teacher and psychologist.</p>
                    <p><strong>Core Idea:</strong> Your essence is like a diamond with many facets — strength, compassion, joy, peace. Personality patterns are like dust covering the diamond.</p>
                    <p><strong>How It Works:</strong> Through "Inquiry" — a practice combining meditation awareness with psychological exploration — gently penetrating personality defenses to reveal essential qualities.</p>`
                }
            },
            areas: {
                'Chronic Pain & Somatic Recovery': {
                    tooltip: 'Revealing the emotional code behind pain',
                    detail: `<h4>💆 Chronic Pain & Somatic Recovery</h4>
                    <p>Many chronic pain conditions are not purely physiological. Research shows unprocessed emotions and trauma express as body symptoms — headaches, back pain, digestive issues, autoimmune reactions.</p>
                    <p><strong>Our Approach:</strong> Listen to symptoms as messages, identify stored emotional memories, explore protective beliefs maintaining pain patterns, invite nervous system regulation through safe body awareness.</p>`
                },
                'Emotional Processing & Trauma Release': {
                    tooltip: 'Safely meeting and releasing deep emotions',
                    detail: `<h4>🌸 Emotional Processing & Trauma Release</h4>
                    <p>Most people only learned to "control" or "push away" emotions. Suppressed emotions accumulate in the body, returning as anxiety, depression, irritability, or numbness.</p>
                    <p><strong>Our Approach:</strong> Create a safe container, learn to distinguish reactions from experiences, build capacity for intensity, support natural release processes.</p>`
                },
                'Self-Inquiry & Embodied Awareness': {
                    tooltip: 'Deep exploration of being itself',
                    detail: `<h4>🔍 Self-Inquiry & Embodied Awareness</h4>
                    <p>Self-inquiry is not mental analysis but a living, experiential exploration. It asks not "How should I be?" but "Who am I, really?"</p>
                    <p><strong>Our Approach:</strong> Presence-based inquiry, deep body listening, and attuned presence — exploring who you are beneath the patterns.</p>`
                }
            }
        }
    };

    const data = {
        zh: {
            title: '📚 一起学习成长', subtitle: '身心灵疗愈体系',
            intro: '来自 BeingYourself 的身心灵整合疗愈知识体系',
            dimensionTitle: '🔮 身心灵三维方法',
            dimensions: [
                { icon: '🧠', name: 'MIND · 心智', desc: '运用基于临在的探询工具，理解并柔化心智循环、生存策略，消化自我构建。' },
                { icon: '🫀', name: 'BODY · 身体', desc: '回归身体的先天智慧，通过安全地会见身体沉默承载的情绪/创伤，邀请它们的安全释放，恢复安全感、扎根感和韧性。' },
                { icon: '✨', name: 'SPIRIT · 灵性', desc: '带着敬畏向内转向，学会感知内在存在的宁静脉动——与生命整体的活的连接——从这个基础上，你的本真自然开始浮现。' }
            ],
            taoTitle: '☯ 道的方式',
            taoLines: ['道的方式不是修复，是流动。', '不是努力，是临在。', '不是强迫，是允许。', '疗愈不是用努力走向完美。', '而是回归你从未破碎的本质——你的真实本性。', '道教导我们放下控制、比较和强迫。', '回到存在的自然节奏。', '信任生命——而非恐惧。'],
            methodsTitle: '🎓 六大专业方法',
            methodsTip: '点击任一方法查看详细说明',
            methods: [
                { icon: '💜', name: 'Compassionate Inquiry', author: 'Dr. Gabor Maté', desc: '基于临在的身心治疗，揭示隐藏的信念，解开痛苦的情感根源。' },
                { icon: '🪞', name: 'Internal Family System', author: 'Dr. Richard Schwartz', desc: '创伤知情的模式，温和地映射和交朋友你的内在部分，促进自我理解、和谐与疗愈。' },
                { icon: '🌊', name: 'NARM', author: 'Dr. Laurence Heller', desc: '以身体为中心的方法，处理早期关系和发展性创伤，处理身份认同模式。' },
                { icon: '🌑', name: 'Shadow Constellation', author: 'Nir Esterman', desc: '"身体与阴影之道"，照亮隐藏的家族动力和无意识的忠诚，让看不见的模式浮出并转化。' },
                { icon: '🌱', name: 'Holistic Life Coaching', author: 'Alan Cohen', desc: '全人方法，支持你在创伤/痛苦恢复之外转变生活——将选择、关系和人生目标与最本真的自我对齐。' },
                { icon: '💎', name: 'Diamond Approach', author: 'A.H. Almaas', desc: '灵性探询之道，温和地揭示人格模式之下你本质的真相，培育临在、清晰和内在自由。' }
            ],
            areasTitle: '🎯 三大服务领域',
            areasTip: '点击了解更多',
            areas: [
                { icon: '💆', name: '慢性疼痛与躯体症状恢复', desc: '症状不是敌人，而是信息。一起揭示疼痛的情感根源，探索保护性信念，邀请神经系统的调节。' },
                { icon: '🌸', name: '情绪处理与创伤释放', desc: '你的感受不需要被管理或推开。它们需要被安全、温和、临在地会见——不判断，不急促。' },
                { icon: '🔍', name: '自我探询与具身觉知', desc: '运用临在探询、深层身体聆听和调谐的临在来探索模式之下的你是谁。这不是智识的，是回到存在的感受。' }
            ],
            forWhomTitle: '👥 适用人群',
            forWhom: [
                '你正经历慢性疼痛/压力/紧张或躯体症状，感到困惑或恐惧',
                '你被情绪淹没，渴望一个安全的空间去不被评判地感受',
                '你花了多年试图修复、优化或改善自己——却感到疲于奋斗',
                '你想重新连接你的真实——而非你的条件化反应或故事',
                '你是一位追寻者、领导者或变革者，准备好以"存在"来体验本真'
            ],
            linkTitle: '了解更多 → 访问官方网站',
            detailClose: '收起'
        },
        en: {
            title: '📚 Learn & Grow Together', subtitle: 'Mind-Body-Spirit Healing',
            intro: 'Mind-Body-Spirit integration healing knowledge from BeingYourself',
            dimensionTitle: '🔮 Mind · Body · Spirit',
            dimensions: [
                { icon: '🧠', name: 'MIND', desc: 'Using presence-based inquiry tools to understand and soften mental loops, survival strategies, and digest ego constructs.' },
                { icon: '🫀', name: 'BODY', desc: 'Returning to the innate wisdom of the body, meeting emotions/trauma it has held in silence, inviting safe release.' },
                { icon: '✨', name: 'SPIRIT', desc: 'Turning inward with reverence, sensing the quiet pulse of being — a living connection to the wholeness of life.' }
            ],
            taoTitle: '☯ The Way of Tao',
            taoLines: ['The Way of Tao is not to fix, but to flow.', 'It\'s not effort, but presence.', 'Not force, but allowing.', 'Healing is not about efforting your way to perfection.', 'It\'s about surrendering back to your true nature.', 'The Tao teaches us to let go of control, comparison, and force.', 'To return to the natural rhythm of being.', 'To trust life — not fear it.'],
            methodsTitle: '🎓 Six Professional Modalities',
            methodsTip: 'Tap any method for details',
            methods: [
                { icon: '💜', name: 'Compassionate Inquiry', author: 'Dr. Gabor Maté', desc: 'Presence-based somatic psychotherapy revealing hidden beliefs and emotional roots of suffering.' },
                { icon: '🪞', name: 'Internal Family System', author: 'Dr. Richard Schwartz', desc: 'Trauma-informed modality that gently maps and befriends inner parts.' },
                { icon: '🌊', name: 'NARM', author: 'Dr. Laurence Heller', desc: 'Body-centered approach addressing early relational and developmental trauma.' },
                { icon: '🌑', name: 'Shadow Constellation', author: 'Nir Esterman', desc: 'Illuminates hidden family dynamics and unconscious loyalties.' },
                { icon: '🌱', name: 'Holistic Life Coaching', author: 'Alan Cohen', desc: 'Supports transformation beyond trauma recovery — aligning with your authentic self.' },
                { icon: '💎', name: 'Diamond Approach', author: 'A.H. Almaas', desc: 'A path of spiritual inquiry revealing your essence beneath personality patterns.' }
            ],
            areasTitle: '🎯 Three Service Areas',
            areasTip: 'Tap for more',
            areas: [
                { icon: '💆', name: 'Chronic Pain & Somatic Recovery', desc: 'The symptom is not the enemy — it\'s a message.' },
                { icon: '🌸', name: 'Emotional Processing & Trauma Release', desc: 'Your feelings need to be met — safely, gently, and with presence.' },
                { icon: '🔍', name: 'Self-Inquiry & Embodied Awareness', desc: 'Using presence-based inquiry to explore who you are beneath the patterns.' }
            ],
            forWhomTitle: '👥 Who Is This For',
            forWhom: ['Navigating chronic pain or somatic symptoms', 'Overwhelmed by emotion and longing for safe space', 'Tired of striving to fix yourself', 'Seeking reconnection with your truth', 'A seeker ready to embody authenticity'],
            linkTitle: 'Learn More → Visit Official Website',
            detailClose: 'Collapse'
        },
        ja: {
            title: '📚 一緒に学び成長', subtitle: '心身魂ヒーリング体系',
            intro: 'BeingYourselfの心身魂統合ヒーリング知識体系',
            dimensionTitle: '🔮 心・体・魂',
            dimensions: [
                { icon: '🧠', name: 'MIND · 心', desc: 'プレゼンスベースの探求ツールで、メンタルループを理解し柔らげる。' },
                { icon: '🫀', name: 'BODY · 体', desc: '体の先天的な知恵に戻り、沈黙のなかに抱えてきた感情やトラウマと安全に出会う。' },
                { icon: '✨', name: 'SPIRIT · 魂', desc: '敬意をもって内側に向き合い、存在の静かな脈動を感じ取る。' }
            ],
            taoTitle: '☯ 道の方法',
            taoLines: ['道とは修復ではなく、流れること。', '努力ではなく、プレゼンス。', '強制ではなく、許容。'],
            methodsTitle: '🎓 六つの専門メソッド',
            methodsTip: 'タップして詳細を表示',
            methods: [
                { icon: '💜', name: 'Compassionate Inquiry', author: 'Dr. Gabor Maté', desc: '隠れた信念を明らかにし、苦しみの感情的根源を解きほぐす。' },
                { icon: '🪞', name: 'Internal Family System', author: 'Dr. Richard Schwartz', desc: '内なるパーツを優しくマッピングする。' },
                { icon: '🌊', name: 'NARM', author: 'Dr. Laurence Heller', desc: '早期の関係性トラウマに取り組む身体中心のアプローチ。' },
                { icon: '🌑', name: 'Shadow Constellation', author: 'Nir Esterman', desc: '隠れた家族力学と無意識の忠誠を照らし出す。' },
                { icon: '🌱', name: 'Holistic Life Coaching', author: 'Alan Cohen', desc: 'トラウマ回復を超えた人生変革のサポート。' },
                { icon: '💎', name: 'Diamond Approach', author: 'A.H. Almaas', desc: '人格パターンの下にある本質の真実を明らかにする。' }
            ],
            areasTitle: '🎯 三つのサービス領域',
            areasTip: 'タップして詳細を表示',
            areas: [
                { icon: '💆', name: '慢性痛・身体症状の回復', desc: '症状は敵ではなくメッセージ。' },
                { icon: '🌸', name: '感情処理・トラウマ解放', desc: '感情は安全に、優しくプレゼンスをもって迎える。' },
                { icon: '🔍', name: '自己探求・具現化された気づき', desc: 'プレゼンスベースの探求で自分を探る。' }
            ],
            forWhomTitle: '👥 対象者',
            forWhom: ['慢性痛やストレスに悩んでいる方', '感情に圧倒されている方', '自己改善に疲れた方', '本当の自分とつながりたい方', '本質を体現したいリーダー'],
            linkTitle: '詳しくは → 公式サイトへ',
            detailClose: '折りたたむ'
        },
        th: {
            title: '📚 เรียนรู้และเติบโตด้วยกัน', subtitle: 'ระบบบำบัดกาย-จิต-วิญญาณ',
            intro: 'ความรู้การเยียวยาแบบบูรณาการจาก BeingYourself',
            dimensionTitle: '🔮 กาย · ใจ · จิตวิญญาณ',
            dimensions: [
                { icon: '🧠', name: 'MIND', desc: 'ใช้เครื่องมือสำรวจแบบมีสติเพื่อเข้าใจวงจรจิตใจ' },
                { icon: '🫀', name: 'BODY', desc: 'กลับสู่ภูมิปัญญาของร่างกาย พบปะอารมณ์ที่ซ่อนอยู่' },
                { icon: '✨', name: 'SPIRIT', desc: 'หันเข้าข้างในด้วยความเคารพ สัมผัสจังหวะเงียบของการดำรงอยู่' }
            ],
            taoTitle: '☯ วิถีแห่งเต๋า',
            taoLines: ['วิถีแห่งเต๋าไม่ใช่การแก้ไข แต่คือการไหล', 'ไม่ใช่ความพยายาม แต่คือการมีอยู่'],
            methodsTitle: '🎓 หกวิธีเชี่ยวชาญ',
            methodsTip: 'แตะเพื่อดูรายละเอียด',
            methods: [
                { icon: '💜', name: 'Compassionate Inquiry', author: 'Dr. Gabor Maté', desc: 'จิตบำบัดแบบมีสติ' },
                { icon: '🪞', name: 'IFS', author: 'Dr. Richard Schwartz', desc: 'ทำแผนที่ส่วนต่างๆภายในตัวคุณ' },
                { icon: '🌊', name: 'NARM', author: 'Dr. Laurence Heller', desc: 'แนวทางที่เน้นร่างกาย' },
                { icon: '🌑', name: 'Shadow Constellation', author: 'Nir Esterman', desc: 'ส่องแสงพลวัตครอบครัว' },
                { icon: '🌱', name: 'Life Coaching', author: 'Alan Cohen', desc: 'สนับสนุนการเปลี่ยนแปลงชีวิต' },
                { icon: '💎', name: 'Diamond Approach', author: 'A.H. Almaas', desc: 'สำรวจจิตวิญญาณ' }
            ],
            areasTitle: '🎯 สามด้านบริการ',
            areasTip: 'แตะเพื่อดูเพิ่มเติม',
            areas: [
                { icon: '💆', name: 'ฟื้นฟูอาการเรื้อรัง', desc: 'อาการไม่ใช่ศัตรู แต่คือข้อความ' },
                { icon: '🌸', name: 'ประมวลผลอารมณ์', desc: 'ความรู้สึกต้องการพบปะอย่างปลอดภัย' },
                { icon: '🔍', name: 'สำรวจตนเอง', desc: 'ค้นพบตัวตนที่แท้จริง' }
            ],
            forWhomTitle: '👥 เหมาะสำหรับ',
            forWhom: ['ผู้ประสบความเจ็บปวดเรื้อรัง', 'ผู้ถูกอารมณ์ท่วมท้น', 'ผู้เหนื่อยจากการพัฒนาตัวเอง', 'ผู้แสวงหาความจริง'],
            linkTitle: 'เรียนรู้เพิ่มเติม → เยี่ยมชมเว็บไซต์',
            detailClose: 'ยุบ'
        }
    };

    function getDetailData(lang) {
        return details[lang] || details.en;
    }

    function init() {
        const container = document.getElementById('knowledge-container');
        if (!container) return;
        const lang = I18n.getLang();
        const d = data[lang] || data.en;
        const det = getDetailData(lang);

        container.innerHTML = `
            <div class="page-intro">
                <h2 class="page-intro-title">${d.title}</h2>
                <p class="kb-subtitle">${d.subtitle}</p>
                <p class="page-intro-text">${d.intro}</p>
            </div>

            <h3 class="kb-section-title">${d.dimensionTitle}</h3>
            <div class="kb-dimensions">
                ${d.dimensions.map(dim => `
                    <div class="kb-dimension-card">
                        <div class="kb-dim-icon">${dim.icon}</div>
                        <div class="kb-dim-name">${dim.name}</div>
                        <div class="kb-dim-desc">${dim.desc}</div>
                    </div>
                `).join('')}
            </div>

            <div class="kb-tao-card">
                <h3 class="kb-section-title" style="margin-top:0;">${d.taoTitle}</h3>
                ${d.taoLines.map(l => `<p class="kb-tao-line">${l}</p>`).join('')}
            </div>

            <h3 class="kb-section-title">${d.methodsTitle}</h3>
            <p class="kb-section-tip">${d.methodsTip || ''}</p>
            ${d.methods.map(m => {
                const methodDet = det.methods && det.methods[m.name];
                const tooltip = methodDet ? methodDet.tooltip : '';
                const detailHtml = methodDet ? methodDet.detail : '';
                return `
                <div class="kb-method-card kb-expandable" title="${tooltip}" data-expanded="false">
                    <div class="kb-method-header">
                        <span class="kb-method-icon">${m.icon}</span>
                        <div class="kb-method-info">
                            <div class="kb-method-name">${m.name}</div>
                            <div class="kb-method-author">${m.author}</div>
                        </div>
                        <span class="kb-expand-arrow">▸</span>
                    </div>
                    <p class="kb-method-desc">${m.desc}</p>
                    ${detailHtml ? `<div class="kb-detail-panel">${detailHtml}<button class="kb-detail-close">${d.detailClose || '收起'}</button></div>` : ''}
                </div>`;
            }).join('')}

            <h3 class="kb-section-title">${d.areasTitle}</h3>
            <p class="kb-section-tip">${d.areasTip || ''}</p>
            ${d.areas.map(a => {
                const areaDet = det.areas && det.areas[a.name];
                const tooltip = areaDet ? areaDet.tooltip : '';
                const detailHtml = areaDet ? areaDet.detail : '';
                return `
                <div class="kb-area-card kb-expandable" title="${tooltip}" data-expanded="false">
                    <div class="kb-area-header">
                        <span class="kb-area-icon">${a.icon}</span>
                        <div class="kb-area-info">
                            <div class="kb-area-name">${a.name}</div>
                            <p class="kb-area-desc">${a.desc}</p>
                        </div>
                        <span class="kb-expand-arrow">▸</span>
                    </div>
                    ${detailHtml ? `<div class="kb-detail-panel">${detailHtml}<button class="kb-detail-close">${d.detailClose || '收起'}</button></div>` : ''}
                </div>`;
            }).join('')}

            <h3 class="kb-section-title">${d.forWhomTitle}</h3>
            <div class="kb-for-card">
                ${d.forWhom.map(f => `<div class="kb-for-item"><span class="kb-bullet">•</span>${f}</div>`).join('')}
            </div>

            <a href="https://www.beingyourself.love" target="_blank" rel="noopener" class="kb-link-card">
                <span class="kb-link-icon">🌐</span>
                <div>
                    <div class="kb-link-title">${d.linkTitle}</div>
                    <div class="kb-link-url">www.beingyourself.love</div>
                </div>
                <span class="kb-link-arrow">→</span>
            </a>
        `;

        // --- Expand/collapse interaction ---
        container.querySelectorAll('.kb-expandable').forEach(card => {
            card.addEventListener('click', function(e) {
                if (e.target.closest('.kb-detail-close')) {
                    this.setAttribute('data-expanded', 'false');
                    e.stopPropagation();
                    return;
                }
                if (e.target.closest('.kb-detail-panel')) return;
                const isExpanded = this.getAttribute('data-expanded') === 'true';
                this.setAttribute('data-expanded', isExpanded ? 'false' : 'true');
            });
        });

        container.querySelectorAll('.kb-detail-close').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                this.closest('.kb-expandable').setAttribute('data-expanded', 'false');
            });
        });
    }

    return { init };
})();
