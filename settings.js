
const fs = require('fs');
const path = require('path');
const { getConfig } = require('./lib/configdb');
const settings = require('./settingss');

if (fs.existsSync(path.resolve('config.env'))) {
  require('dotenv').config({ path: path.resolve('config.env') });
}

// Helper to convert "true"/"false" strings to actual boolean
function convertToBool(text, trueValue = 'true') {
  return text === trueValue;
}

module.exports = {
  // ===== BOT CORE SETTINGS =====
  SESSION_ID: settings.SESSION_ID || process.env.SESSION_ID || "LuckyM2-H4sIAAAAAAAAA5VU2bKiSBT8l3rVaEFExIgbMYiCgCuby8Q8lFDsm0UVoh3++wTevn37YabnzltRFeTJk5nnfAdFGdfIQHcw/Q4qHDeQoO5I7hUCUzCjQYAw6AMfEgimAEnjUMxurXnhrrscCd7aPQhZZCyPzirBo17L7XnjMSLRcfIGnn1Q0UsWe78BXAu3087UIUsPjKrLBzaZ5Zt2I1SDxFI8fvJYXrPC1cu5G76BZ4cIYxwX4aKKUI4wzAx038EYf42+NTsxlc1f9YoqD3plvcFSUlgjfQR0Wx/jShADXruZ/Mz1vkZfsb2rvfL8/Zq7s1UvwHK9Q/XAFKONH4wPIq/Pbjhy0KnQ3unXcVggX/NRQWJy/7LuuZQObE1IR/shXFyptIYPauftqVk8Ejg0VG7obJQwN61h+jXilcYmB6rzVXXO3IXm5IZwyZTV9niMZpmBhnRD/ftYy44K8yvxHf7ISvp/dHd27dC+kuXmth8WFnOrrrLGquJ5vG6d2Y5oYxtbm1SYEyb8Gv18sBf1YHnTr0Vy4Th7vPbR0nd3DJHU0rrsd1E0GwfLwA+dT/qQUPw7luJ2tVKPp8KVpbV7Nbfn8c0gK/7KN1baDCpueJSktinn3PIe8dFmiUWbVVblQiXXpOULkXWYK2mk0hHZdBdoxxqtvOT29uooRXfNB1P22QcYhXFNMCRxWbzuOKYPoN9YyMOIvOQFND05ld3sE/WEb2qvOGjIOqaKYaonhy2J1grIcRnUE+zRG+iDCpceqmvkL+OalPi+RnUNQ1SD6Z9/9UGBWvJuXFeOY/sgiHFNnIJWWQn9D1c/HqHnlbQg1r3w5O6AMJgyn9eIkLgI605HWkDsRXGD5AiSGkwDmNXoZ4cIIx9MCabo59TKpd8Jv5ybx4V5FEEf5C9DYh9MwZAbicyQHw1HHCtMxT/qb7cOFlbVtwKRTsQfFLo/fERgnNVgCmQ9SEJhoiyMwaome1WV9qEkhxL4pPzh/bu26la6jnrWORrzO74lxR4WF15tGNfKhWzC9URxMUtNV+Tbxds/gHRrZNyuJxbX8OFM6PEXxzdu8YxawjzDWpIeWcOl90mJzZFV+NRwrW02O29GK82O3VCZBLzOeQxHB/vBbdzGtDQvtJjL+7eumo+a2EO/FpNHhEkPbbupvYU2720C9YFLq6lRwkJOv49K5Xw6oyKX+bsXzal+wHrpcnIF45HHblLTXNielg/qUokMnabFVorNRHpP5Wsqsh/bKH7lpTOj+wxi9BruAnYW/Zc5H8S7DDHP/i8YP9bFv4zczExCg+7S/ISo3fMuZ0athj0Ti4pTUT7YDJrAlM4LN0CeCZ7Pv/qgyiAJSpyDKYCFj8vYB32AS9qFUiuC8jfFZInRZCm0us4zWBPpM+h2nKOawLwCU1aYCGNmyPHC829fk6TAHgcAAA==",
  PREFIX: getConfig("PREFIX") || "." || settings.PREFIX,
  CHATBOT: getConfig("CHATBOT") || "on",
  BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "ʟᴜᴄᴋʏ-xᴅ",
  MODE: getConfig("MODE") || process.env.MODE || "public",
  REPO: process.env.REPO || "https://github.com/Tomilucky218/Lucky-XD2",
  BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",

  // ===== OWNER & DEVELOPER SETTINGS =====
  OWNER_NUMBER: settings.OWNER_NUMBER || process.env.OWNER_NUMBER || "2349025424317",
  OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "Winners 105",
  DEV: process.env.DEV || "256789966218",
  DEVELOPER_NUMBER: '256789966218@s.whatsapp.net',
  MENU_AUDIO_URL: process.env.MENU_AUDIO_URL || 'https://files.catbox.moe/3v5i11.mp3',
NEWSLETTER_JID: process.env.NEWSLETTER_JID || '120363420656466131@newsletter',

  // ===== AUTO-RESPONSE SETTINGS =====
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*Just seen ur status 😆 🤖*",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*📵 Calls are not allowed on this number unless you have permission. 🚫*",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/4itzeu.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦ʟᴜᴄᴋʏ xᴅ✦ ғʀᴏᴍ ʟᴜᴄᴋʏ ᴛᴇᴄʜ ʜᴜʙ  ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/Tomilucky218/Lucky-XD2",

  // ===== REACTION & STICKER SETTINGS =====
  AUTO_REACT: process.env.AUTO_REACT || "false",
  OWNER_REACT: process.env.OWNER_REACT || "false",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  STICKER_NAME: process.env.STICKER_NAME || "ᴋʜᴀɴ-ᴍᴅ",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",

  // ===== MEDIA & AUTOMATION =====
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  MENTION_REPLY: process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/4itzeu.jpg",

  // ===== SECURITY & ANTI-FEATURES =====
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_VV: process.env.ANTI_VV || "true",
  DELETE_LINKS: process.env.DELETE_LINKS || "false",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  ANTI_BOT: process.env.ANTI_BOT || "true",
  PM_BLOCKER: process.env.PM_BLOCKER || "true",

  // ===== BOT BEHAVIOR & APPEARANCE =====
  DESCRIPTION: process.env.DESCRIPTION || "*© Powered By Lucky Tech Hub*",
  PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_BIO: process.env.AUTO_BIO || "false",
  WELCOME: process.env.WELCOME || "false",
  GOODBYE: process.env.GOODBYE || "false",
  ADMIN_ACTION: process.env.ADMIN_ACTION || "false",
  version: process.env.version || "1.5.0",
  TIMEZONE: settings.TIMEZONE || process.env.TIMEZONE || "Africa/Kampala",

  // ===== CATEGORY-SPECIFIC IMAGE URLs =====
  MENU_IMAGES: {
    '1': process.env.DOWNLOAD_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Download Menu
    '2': process.env.GROUP_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Group Menu
    '3': process.env.FUN_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",       // Fun Menu
    '4': process.env.OWNER_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Owner Menu
    '5': process.env.AI_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",         // AI Menu
    '6': process.env.ANIME_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Anime Menu
    '7': process.env.CONVERT_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Convert Menu
    '8': process.env.OTHER_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Other Menu
    '9': process.env.REACTION_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Reaction Menu
    '10': process.env.MAIN_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",    // Main Menu
    '11': process.env.LOGO_MAKER_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Logo Maker Menu
    '12': process.env.SETTINGS_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Settings Menu
    '13': process.env.AUDIO_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",  // Audio Menu
    '14': process.env.PRIVACY_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg" // Privacy Menu
  }
};
