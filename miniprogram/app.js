/* ============================================
   觉察 · 内在探索 — 小程序全局入口
   ============================================ */
const i18n = require('./utils/i18n.js');
const auth = require('./utils/auth.js');

App({
    globalData: {
        lang: 'zh',
        session: null,
        version: 'v2.1.0',
        brandName: 'BeingYourself'
    },

    onLaunch() {
        // 初始化语言
        const savedLang = wx.getStorageSync('sa_lang') || 'zh';
        this.globalData.lang = savedLang;

        // 恢复登录状态
        const session = wx.getStorageSync('sa_session');
        if (session && session.username) {
            this.globalData.session = session;
        }
    }
});
