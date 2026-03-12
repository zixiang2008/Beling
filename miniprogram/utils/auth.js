/* ============================================
   认证系统 — 小程序版
   ============================================ */
const USERS_KEY = 'sa_users';
const SESSION_KEY = 'sa_session';

function getUsers() {
    try { return JSON.parse(wx.getStorageSync(USERS_KEY) || '{}'); } catch (e) { return {}; }
}

function saveUsers(users) {
    wx.setStorageSync(USERS_KEY, JSON.stringify(users));
}

function hashPin(pin) {
    let h = 0;
    const str = 'sa_' + pin + '_key';
    for (let i = 0; i < str.length; i++) {
        h = ((h << 5) - h) + str.charCodeAt(i);
        h = h & h;
    }
    return h.toString(36);
}

function isValidUsername(name) {
    return /^[\u4e00-\u9fff]{2}$/.test(name);
}

function isValidPin(pin) {
    return /^\d{4}$/.test(pin);
}

function register(username, pin) {
    if (!isValidUsername(username)) return { ok: false, error: 'usernameFormat' };
    if (!isValidPin(pin)) return { ok: false, error: 'pinFormat' };
    const users = getUsers();
    if (users[username]) return { ok: false, error: 'userExists' };
    users[username] = { hash: hashPin(pin), created: Date.now() };
    saveUsers(users);
    return { ok: true };
}

function login(username, pin) {
    if (!isValidUsername(username)) return { ok: false, error: 'usernameFormat' };
    if (!isValidPin(pin)) return { ok: false, error: 'pinFormat' };
    const users = getUsers();
    if (!users[username] || users[username].hash !== hashPin(pin)) {
        return { ok: false, error: 'wrongCredentials' };
    }
    const session = { username, time: Date.now() };
    wx.setStorageSync(SESSION_KEY, JSON.stringify(session));
    getApp().globalData.session = session;
    return { ok: true };
}

function logout() {
    wx.removeStorageSync(SESSION_KEY);
    getApp().globalData.session = null;
}

function isLoggedIn() {
    const app = getApp();
    return !!(app.globalData.session && app.globalData.session.username);
}

function getUsername() {
    const app = getApp();
    return app.globalData.session?.username || null;
}

module.exports = { register, login, logout, isLoggedIn, getUsername, isValidUsername, isValidPin };
