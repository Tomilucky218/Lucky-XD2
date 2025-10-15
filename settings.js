
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
  SESSION_ID: settings.SESSION_ID || process.env.SESSION_ID || "starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU1XNngyUWQwNFdnK1dFc0Q3VVc2dzNZR2poS3dheGFJNTdHZGdxUitXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid2hxVTEwS0dPUUlPenZUN2c2MGFPWUdCemlKR3MrcjVFNzJMdS9iV1dsZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TTA2azlaT2s3MUh2dk9hNlY1czRtNlVnMkk1ZWZVck1MaGtoN2Y2cVdJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6N2EvUE9SbnA5cFpjWjRKYUZxMUFKUUtMN2MvbVduQVgxbWRJNWpOc0IwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdGYVd5d2k1SEUrcHlYeUg5SjBtZUw1cGdFZmxTZzRxcGRkLytOWmd3RVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikc2WkdMV09qZWxya2h6Z2F4RUxRaXMzemt6RXFTaDlwSklJWGtRSW1KeWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0x4OUhva2poYlZUMjRWN1Q5UEIyNitGbUtxdm9iVTg2R3VxbS9tanEyWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUhwREVIdE5mWURpY0FMc2dRSVlnS1NPcjFDT0U5cXVERVN5bkN3Mk9YWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5EUHAxc1hGRzJtQUtkUXc0UXkvSEltaGNVM1JsU0tRS3Zvd2c1aTJBU3JlS2d3Z3pWaHhNR0pVdVU1eHR1UlBHTnFFZUdFTEdjVTNNME5MVGRld0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ1LCJhZHZTZWNyZXRLZXkiOiIraUxzd1BKUXVvS2M3bkFzUXI3dzFKU1VmNkwzUldkdFJoMmdoVDVZamJzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxOTY0MTc3NzIzNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzczOEFFN0IxQjY2MjYzNjkwRjRDOUI0NzdFQ0UwRSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYwNTIxMjI0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTk2NDE3NzcyMzRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM0QzNFNTg0QTZENzk5MENDNTRFQjUxQzJDNDQwRUYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MDUyMTIyNH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTE5NjQxNzc3MjM0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDMEE4RTZDMjMwMDgyRUIzNTI5QkNGMzRGREY5MzJGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjA1MjEyMjZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im55ZDVfVkpJUXRpV3NDZ196TnhBS3ciLCJwaG9uZUlkIjoiZjZhY2Y1MDctZjg3ZS00YzY5LTg0YjItMjQ4YWM2MjFiYjUzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InUyOGd6c2V4MFNhSVFCQ0txcm5QNmpYSkJGaz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0taNlZvOFhWWW41SUJsbnQ5bkhlNmtOdys4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSSt6bVhNUStOZTl4d1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZUtETUFhWkRtbFFibXhSV0NtS3pEelJxcnY1Q2lJNWd1NlMwcmZGdDhnST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSVhYSDQ4UnpkMUZRaWlrQm5FZUlIZE15M3RrSnRFdkRJLzk3eTAxSlZYZi9ZN3FPNkxZYXlsYXFtRC92eTdHQVJWMzgvRG00UjczY0JtdS94SHJyQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IjdwU2hlTHk5bFFNMGVMbnUvMVF3OFJZcDJMUGZRb3hYSDZ6TnJ0cms0RU92L05jcW96aFNpZm40SEl6USt4S3RFZDlYVGlmTEtsTjhlNStLVWs2YURBPT0ifSwibWUiOnsiaWQiOiI5MTk2NDE3NzcyMzQ6MUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjQyNjY2NjA3ODI5MTYwOjFAbGlkIiwibmFtZSI6IklhaCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTk2NDE3NzcyMzQ6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYaWd6QUdtUTVwVUc1c1VWZ3Bpc3c4MGFxNytRb2lPWUx1a3RLM3hiZklDIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjA1MjEyMjIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBREIyIn0=",
  PREFIX: getConfig("PREFIX") || "." || settings.PREFIX,
  CHATBOT: getConfig("CHATBOT") || "on",
  BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "ʟᴜᴄᴋʏ-xᴅ",
  MODE: getConfig("MODE") || process.env.MODE || "public",
  REPO: process.env.REPO || "https://github.com/Tomilucky218/Lucky-XD2",
  BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",

  // ===== OWNER & DEVELOPER SETTINGS =====
  OWNER_NUMBER: settings.OWNER_NUMBER || process.env.OWNER_NUMBER || "919641777234",
  OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "rockstar",
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
